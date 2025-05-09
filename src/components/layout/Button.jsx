import Link from "next/link";

export default function Button({ href, CTA, customClass =""}) {
  return (
    <Link
      href={href}
      className={`bg-blue-800 px-4 py-2 rounded-4xl text-white hover:bg-blue-700 transition cursor-pointer w-fit ${customClass}`}>
      {CTA}
    </Link>
  );
}
