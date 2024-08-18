"use client"

import NavLink from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathName = usePathname()

  return (
    <header className="absolute z-50 w-full">
      <nav className={`container flex justify-between items-center ${pathName === "/" ? "text-white" : "text-black"} py-3`}>
        <NavLink href="/" className="text-4xl uppercase font-semibold">
          Glory <br /> Photo
        </NavLink>
        <ul className="flex [&>*:not(:last-child)]:mr-10 max-sm:hidden">
          <li className="text-base font-medium  uppercase">
            <NavLink href="/">Home</NavLink>
          </li>
          <li className="text-base font-medium uppercase">
            <NavLink href="/gallery">Gallery</NavLink>
          </li>
          <li className="text-base font-medium uppercase">
            <NavLink href="/">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
