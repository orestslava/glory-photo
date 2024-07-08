function BlogPost({ post }) {
  return (
    <a
      href="/"
      className="max-w-full max-h-[400px] relative rounded group overflow-hidden"
    >
      <img
        className="object-cover object-center w-full h-full rounded transform transition duration-300 ease-in group-hover:scale-110"
        src={`assets/images/main-page/blog-posts/${post.image}.jpg`}
        alt={post.title}
      />
      <div className="absolute z-30 w-full bottom-10 flex flex-col items-center text-white">
        <p className="uppercase text-xs tracking-widest mb-2 font-medium">
          {post.collection}
        </p>
        <p className="text-base">{post.title}</p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded" />
    </a>
  );
}

export default BlogPost;
