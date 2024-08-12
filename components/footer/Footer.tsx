import Link from "next/link"
import Image from "next/image"

import logo from "@/public/assets/logo.png"
import instagramIcon from "@/public/assets/icons/instagram.svg"
import instagramAbs from "@/public/assets/icons/instagram-absolute-black.svg"

import inst1 from "@/public/assets/images/footer/inst1.jpg"
import inst2 from "@/public/assets/images/footer/inst2.jpg"
import inst3 from "@/public/assets/images/footer/inst3.jpg"
import inst4 from "@/public/assets/images/footer/inst4.jpg"
import inst5 from "@/public/assets/images/footer/inst5.jpg"
import inst6 from "@/public/assets/images/footer/inst6.jpg"

const instagramImages = [
  { id: 1, image: inst1, link: "https://www.instagram.com/p/C2SixRNq8Eo/?igsh=MWp3aDhubDBqNnBkZw==" },
  { id: 2, image: inst2, link: "https://www.instagram.com/p/C0hlaa3KMxw/?igsh=MW00Nzdpamg4ZDVjMg==" },
  { id: 3, image: inst3, link: "https://www.instagram.com/p/C2QLylXqoRY/?igsh=bmY4b3lkNTB2cXYx" },
  { id: 4, image: inst4, link: "https://www.instagram.com/p/C9DHctFquSf/?igsh=MXcxNzVtY3k2bGNhMg==" },
  { id: 5, image: inst5, link: "https://www.instagram.com/p/Czyq1q6K2cK/?igsh=N2FyeGc0dHZuNmFv" },
  { id: 6, image: inst6, link: "https://www.instagram.com/p/CjVswTdqMUJ/?igsh=MjVlMGNwdHNsY3Fq" },
]

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="px-20 max-md:container">
        <p className="uppercase text-sm text-center mb-5">Follow me on instagram</p>
        <ul className="grid grid-rows-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full [&>*]:aspect-[1]">
          {instagramImages.map(item => (
            <li key={item.id} className="relative hover:opacity-95">
              <Link target="_blanc" className="block w-full h-full" href={item.link}>
                <Image src={item.image} alt="" layout="fill" objectFit="cover" className="rounded-xl" />
                <Image src={instagramAbs} alt="" className="absolute top-1 right-1 max-w-[20px]" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="grid md:grid-cols-3 items-center container py-6">
          <p className="text-xs text-center md:text-left">Copyrights © Glory Photo 2024</p>
          <div className="flex justify-center w-full">
            <div className="max-w-[50px]">
              <Link href={"/"}>
                <Image src={logo} alt={""} />
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Link
              target="_blanc"
              href={"https://www.instagram.com/glory_photo_?igsh=MWV5NDFxeXdnc25tOQ=="}
              className="inline-flex items-center bg-black px-5 py-2 rounded-lg"
            >
              <div className="mr-5">
                <Image src={instagramIcon} alt="" />
              </div>
              <p className="text-white">@glory_photo_</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
