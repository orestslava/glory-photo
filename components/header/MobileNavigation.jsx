import NavLink from "next/link"

function MobileNavigation({ isOpen, setIsOpen, navigation, isMainPage }) {
  return (
    <div className="sm:hidden">
      <button onClick={() => setIsOpen(isOpen => !isOpen)} className={`flex flex-col justify-center items-center relative z-50`}>
        <span
          className={`${isMainPage ? "bg-white" : "bg-black"} block transition-all duration-300 ease-out  h-0.5 w-8 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1.5 bg-white" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`${isMainPage ? "bg-white" : "bg-black"} block transition-all duration-300 ease-out  h-0.5 w-8 rounded-sm my-1 ${
            isOpen ? "opacity-0 bg-white" : "opacity-100"
          }`}
        ></span>
        <span
          className={`${isMainPage ? "bg-white" : "bg-black"} block transition-all duration-300 ease-out  h-0.5 w-8 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1.5 bg-white" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div
        className={`w-screen h-screen absolute top-0 z-40 bg-stone-900 text-white transition-all duration-300 ${isOpen ? "right-0" : "-right-full"}`}
      >
        <ul className="flex flex-col items-center justify-center gap-20 h-full w-full">
          {navigation.map(el => (
            <li key={el.link} className="relative text-3xl font-medium uppercase">
              <NavLink href={el.link} onClick={() => setIsOpen(false)} className={`text-stone-200`}>
                {el.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileNavigation
