import BlogPost from "./BlogPost.js";

function MainPageBlogPosts() {
  const blogPosts = [
    { key: 1, image: "travel", collection: "travel", title: "Orest & Nastia" },
    { key: 2, image: "portrait", collection: "portrait", title: "Ballerina" },
    { key: 3, image: "food", collection: "food", title: "Food" },
    { key: 4, image: "baby", collection: "babies", title: "Baby" },
    { key: 5, image: "folk", collection: "folk", title: "Folk" },
    { key: 6, image: "couples", collection: "couples", title: "Couples" },
  ];

  return (
    <div className="container py-20">
      <div>
        <h3 className="mb-10 text-center text-4xl italic font-serif font-medium text-[#454543]">
          Blog Posts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((postObj) => (
            <BlogPost post={postObj} key={postObj.key} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPageBlogPosts;
