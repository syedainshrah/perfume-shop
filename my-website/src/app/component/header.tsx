import Link from "next/link";


      {/* Links */}
function Header() {
  return (
    <header className="flex justify-between bg-red-400">
      {/* Logo */}
      <div>
        
        <h1 className="text-3xl font-bold text-center">Welcome to My Perfume Store</h1>
      </div>
      <nav>
        <ul className="flex gap-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>

          
        </ul>
      </nav>
    </header>
  );
}

export default Header