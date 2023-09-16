function Header() {
    return (
        <div>
            <div className="flex text-white justify-between items-center max-w-[1280px] mx-auto px-10 py-3">
                <a className="text-4xl uppercase font-semibold" href="/">
                    Glory <br/> Photo
                </a>
                <ul className="flex [&>*:not(:last-child)]:mr-10">
                    <li className="text-sm uppercase">
                        <a href="/">Home</a>
                    </li>
                    <li className="text-sm uppercase">
                        <a href="/">Portfolio</a>   
                    </li>
                    <li className="text-sm uppercase">
                        <a href="/">Contact</a>   
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header