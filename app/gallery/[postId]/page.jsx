"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

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

  const arr = Array.from({ length: fileCount }, (_, i) => ({ id: i + 1, image: `/assets/images/gallery/${folderId}/${i + 1}.jpg` }))
  console.log(arr)

  return (
    <div className="pt-[105px]">
      <div className="container my-10 px-20">
        <div className="grid grid-cols-2 gap-5 auto-rows-max">
          {arr.map(num => (
            <div key={num.id} className="relative">
              <div className="w-full h-[400px] ">
                <Image src={num.image} alt="fs" layout="fill" objectFit="cover" className="hover:scale-105 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GalleryPost
