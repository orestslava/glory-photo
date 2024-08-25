"use client"

import { useState, useEffect } from "react"
import NavLink from "next/link"
import { usePathname } from "next/navigation"

import MobileNavigation from "./MobileNavigation"

const navigation = [
  { link: "/", name: "Home" },
  { link: "/gallery", name: "Gallery" },
  { link: "/contact", name: "Contact" },
]
const afterStyling = `after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px]`

export default function Header() {
  const [hasScrolledPastViewport, setHasScrolledPastViewport] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const pathName = usePathname()
  const isMainPage = pathName === "/"

  useEffect(() => {
    const handleScroll = () => {
      const isPastViewport = window.scrollY > 100
      setHasScrolledPastViewport(isPastViewport)
    }

    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed z-50 w-full ${hasScrolledPastViewport ? "bg-slate-400/25 backdrop-blur-2xl" : ""}`}>
        <nav className={`container flex justify-between items-center ${isMainPage ? "text-white" : "text-black"} py-3`}>
          <NavLink href="/" className="text-2xl md:text-3xl uppercase font-semibold">
            Glory <br /> Photo
          </NavLink>
          <ul className="flex [&>*:not(:last-child)]:mr-10 max-sm:hidden">
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
          <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} navigation={navigation} isMainPage={isMainPage} />
        </nav>
      </header>
    </>
  )
}
