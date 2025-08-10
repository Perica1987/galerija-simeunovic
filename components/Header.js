import Link from "next/link";
import { useRouter } from "next/router";
import { useLang, LanguageToggle } from "./LanguageToggle";

export default function Header() {
  const { pathname } = useRouter();
  const { lang } = useLang();

  const linkClass = (path) =>
    `px-3 py-2 rounded ${
      pathname === path ? "bg-green-700 text-white" : "hover:bg-gray-100"
    }`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <Link href="/" className="text-xl font-bold text-green-700">
          Rasadnik Simeunović
        </Link>

        <nav className="flex gap-2 items-center text-sm font-medium">
          <Link href="/" className={linkClass("/")}>
            {lang === "sr" ? "Početna" : "Home"}
          </Link>
          <Link href="/gallery" className={linkClass("/gallery")}>
            {lang === "sr" ? "Galerija" : "Gallery"}
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            {lang === "sr" ? "O nama" : "About"}
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            {lang === "sr" ? "Kontakt" : "Contact"}
          </Link>

          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
}
