"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

function splitArrayIntoThreeEqualParts(array) {
  const totalObjects = array.length
  const size = Math.floor(totalObjects / 4)
  const remainder = totalObjects % 4

  let result = [[], [], [], []]
  let startIndex = 0

  for (let i = 0; i < 4; i++) {
    let currentSize = size + (i < remainder ? 1 : 0)
    result[i] = array.slice(startIndex, startIndex + currentSize)
    startIndex += currentSize
  }

  return result
}

const GalleryPost = ({ params }) => {
  const folderId = params.postId
  const [fileCount, setFileCount] = useState(null)

  useEffect(() => {
    async function fetchFileCount() {
      try {
        const response = await fetch(`/api/file-count/${folderId}`)
        const data = await response.json()
        setFileCount(data.count)
      } catch (error) {
        console.error("Error fetching file count:", error)
      }
    }

    fetchFileCount()
  }, [folderId])

  const arr = splitArrayIntoThreeEqualParts(
    Array.from({ length: fileCount }, (_, i) => ({ id: i + 1, image: `/assets/images/gallery/${folderId}/${i + 1}.jpg` }))
  )

  return (
    <div className="pt-[105px]">
      <div className="container my-10 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {arr.map((col, i) => (
            <div key={i} className="flex flex-col gap-2 relative w-full h-full ">
              {col.map(colItem => (
                <div key={colItem.id} className="overflow-hidden group">
                  <div className="w-full full transform transition duration-700 ease-in group-hover:scale-110">
                    <Image src={colItem.image} alt="fs" width={0} height={0} className="" sizes="100vw" style={{ width: "100%", height: "100%" }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryPost
