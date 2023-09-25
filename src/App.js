import Header from "./components/header/Header.js";
import MainPageSwiper from "./components/main-page/Swiper.js";
import MainPageBlogPosts from "./components/main-page/blog/BlogPosts.js";

function App() {
  return (
    <div>
      <div className="">
        <div className="h-screen w-screen relative">
          <MainPageSwiper />
          <Header />
        </div>
        <MainPageBlogPosts />
      </div>
    </div>
  );
}

export default App;
