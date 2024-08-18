import Image from "next/image"
import Link from "next/link"

import post1 from "@/public/assets/images/gallery/1/1.jpg"
import post2 from "@/public/assets/images/gallery/2/13.jpg"
import post3 from "@/public/assets/images/gallery/3/12.jpg"
import post4 from "@/public/assets/images/gallery/4/1.jpg"

const galleryPosts = [
  { id: 1, image: post1, title: "Nastya" },
  { id: 2, image: post2, title: "якась мала" },
  { id: 3, image: post3, title: "Uliana and Roman" },
  { id: 4, image: post4, title: "якась балерина" },
]

export default function Gallery() {
  return (
    <div className="pt-[105px]">
      <div className="container my-10">
        <h2 className="text-center text-3xl mb-5">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 h-full">
          {galleryPosts.map(post => (
            <Link href={`/gallery/${post.id}`} key={post.id} className=" border border-gray-200 rounded-lg p-1">
              <div className="w-full h-[250px] max-h-[250px] relative">
                <Image src={post.image} alt="post image" layout="fill" objectFit="cover" className="rounded-lg" />
              </div>

              <h3 className="text-center py-2">{post.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
