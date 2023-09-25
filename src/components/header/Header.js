function Header() {
  return (
    <div className="h-full">
      <div className="flex text-white relative z-50 justify-between items-center container py-3">
        <a className="text-4xl uppercase font-semibold" href="/">
          Glory <br /> Photo
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
  );
}

export default Header;
