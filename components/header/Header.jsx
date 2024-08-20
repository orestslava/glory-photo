"use client"

import NavLink from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { link: "/", name: "Home" },
  { link: "/gallery", name: "Gallery" },
  { link: "#", name: "Contact" },
]
const afterStyling = `after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px]`

export default function Header() {
  const pathName = usePathname()
  const isMainPage = pathName === "/"

  return (
    <header className="absolute z-50 w-full">
      <nav className={`container flex justify-between items-center ${isMainPage ? "text-white" : "text-black"} py-3`}>
        <NavLink href="/" className="text-4xl uppercase font-semibold">
          Glory <br /> Photo
        </NavLink>
        <ul className="flex [&>*:not(:last-child)]:mr-10 max-sm:hidden ">
          {navigation.map(el => (
            <li key={el.link} className="relative text-base font-medium uppercase">
              <NavLink
                href={el.link}
                className={`${pathName === el.link && `${afterStyling} after:!w-full ${isMainPage ? "after:bg-white" : "after:bg-black"}`} 
                ${afterStyling} after:w-0 ${
                  isMainPage ? "after:bg-white" : "after:bg-black"
                } hover:after:w-full after:transition-all after:duration-700`}
              >
                {el.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
