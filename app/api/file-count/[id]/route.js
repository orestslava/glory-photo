import fs from "fs"
import path from "path"

export async function GET(request, { params }) {
  const { id } = params // Extract the dynamic parameter
  const directoryPath = path.join(process.cwd(), `public/assets/images/gallery/${id}`)

  try {
    // Check if the directory exists
    if (!fs.existsSync(directoryPath)) {
      return new Response(JSON.stringify({ error: "Directory not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Read the contents of the directory
    const files = fs.readdirSync(directoryPath)
    // Filter out directories and count the files
    const fileCount = files.filter(file => fs.statSync(path.join(directoryPath, file)).isFile()).length

    // Send the file count as a JSON response
    return new Response(JSON.stringify({ count: fileCount }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    // Handle errors and send an appropriate response
    return new Response(JSON.stringify({ error: "Unable to read directory" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
