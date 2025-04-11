import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-100 p-4 text-lg px-20 font-bold bg-blue-950 w-full">
      <ul className="flex gap-10">
        <li>
          <Link href="/">JPM and Sons</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/financing">Financing options</Link>
        </li>
        <li>
          <Link href="/estimate">Estimate Tool</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/about-us">About</Link>
        </li>

        <li className="ml-auto">
          <Link href="/contact-us">Contact Us Today</Link>
        </li>
      </ul>
    </nav>
  );
}
