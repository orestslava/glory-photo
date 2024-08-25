"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules"
import { useRef } from "react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

function MainPageSwiper() {
  const swiperRef = useRef(null)
  const imagesName = ["1", "2", "3", "4", "5", "6", "7"]

  return (
    <div className="h-screen w-screen relative">
      <Swiper
        ref={swiperRef}
        onSlideChange={swiper => {
          document.querySelector(".current-slide").textContent = swiper.realIndex + 1
          document.querySelector(".total-slides").textContent = swiper.slides.length
        }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay, EffectFade, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        effect="fade"
        loop
        speed={500}
        className="h-full w-full"
      >
        {imagesName.map(image => (
          <SwiperSlide
            key={image}
            className="h-full w-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url('assets/images/main-page/full-screen/${image}.jpg')` }}
          />
        ))}
      </Swiper>
      <div className="w-full absolute bottom-0 z-20 ">
        <div className="container flex justify-center items-center border-t border-white py-5">
          <div className=".swiper-button-prev-custom  cursor-pointer" onClick={() => swiperRef.current && swiperRef.current.swiper.slidePrev()}>
            <svg className="w-[40px] h-[40px]" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
              <path
                d="m0,12s0-.006,0,0h0Zm23.5-.5H1.089c.075-.209.198-.401.364-.565l3.948-4.043c.193-.197.189-.514-.009-.707-.197-.192-.513-.189-.707.009L.744,10.23c-.474.467-.738,1.105-.744,1.77.002.658.258,1.296.716,1.761l3.923,4.086c.098.102.229.153.361.153.125,0,.25-.046.346-.14.199-.19.206-.508.015-.707l-3.928-4.091c-.16-.162-.279-.354-.351-.562h22.418c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="custom-pagination text-white mx-20">
            <span className="current-slide">1</span> / <span className="total-slides">7</span>
          </div>
          <div className=".swiper-button-next-custom cursor-pointer" onClick={() => swiperRef.current && swiperRef.current.swiper.slideNext()}>
            <svg className="w-[40px] h-[40px]" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
              <path
                d="m23.263,10.237c.467.461.731,1.098.737,1.763-.002.658-.258,1.296-.721,1.766l-3.918,4.081c-.098.102-.229.153-.361.153-.125,0-.25-.046-.346-.14-.199-.19-.206-.508-.015-.707l3.923-4.086c.163-.165.283-.358.355-.567H.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h22.411c-.075-.208-.196-.398-.358-.558l-3.955-4.05c-.193-.197-.189-.514.009-.707.198-.192.514-.189.707.009l3.948,4.043Zm.737,1.763s0-.006,0,0h0Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPageSwiper
