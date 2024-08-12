import Image from "next/image"
import Link from "next/link"

function BlogPost({ post }) {
  return (
    <Link href="/" className="w-full h-[400px] relative rounded group overflow-hidden">
      <div className="w-full h-full rounded transform transition duration-300 ease-in group-hover:scale-110">
        <Image
          src={`/assets/images/main-page/blog-posts/${post.image}.jpg`}
          layout="fill"
          objectFit="cover"
          loading="lazy"
          priority={false}
          alt={post.title}
        />
      </div>

      <div className="absolute z-30 w-full bottom-10 flex flex-col items-center text-white">
        <p className="uppercase text-xs tracking-widest mb-2 font-medium">{post.collection}</p>
        <p className="text-base">{post.title}</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded" />
    </Link>
  )
}

export default BlogPost
