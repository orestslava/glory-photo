"use client"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathName = usePathname()

  return (
    <header className="absolute z-50 w-full">
      <nav className={`container flex justify-between items-center ${pathName === "/" ? "text-white" : "text-black"} py-3`}>
        <a className="text-4xl uppercase font-semibold" href="/">
          Glory <br /> Photo
        </a>
        <ul className="flex [&>*:not(:last-child)]:mr-10">
          <li className="text-sm uppercase">
            <a href="/">Home</a>
          </li>
          <li className="text-sm uppercase">
            <a href="/gallery">Gallery</a>
          </li>
          <li className="text-sm uppercase">
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
