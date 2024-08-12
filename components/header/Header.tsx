"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathName = usePathname()

  return (
    <header className="absolute z-50 w-full">
      <nav className={`container flex justify-between items-center ${pathName === "/" ? "text-white" : "text-black"} py-3`}>
        <Link href="/" className="text-4xl uppercase font-semibold">
          Glory <br /> Photo
        </Link>
        <ul className="flex [&>*:not(:last-child)]:mr-10 max-sm:hidden">
          <li className="text-sm uppercase">
            <Link href="/">Home</Link>
          </li>
          <li className="text-sm uppercase">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="text-sm uppercase">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
