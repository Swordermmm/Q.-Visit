"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="navbar wrap">
      <nav className="wrap">
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Каталог
        </Link>
        <Link
          href="/categories"
          className={pathname === "/categories" ? "active" : ""}
        >
          Категории
        </Link>
        <Link
          href="/favourites"
          className={pathname === "/favourites" ? "active" : ""}
        >
          Избранное
        </Link>
        <Link
          href="/records"
          className={pathname === "/records" ? "active" : ""}
        >
          Мои записи
        </Link>
      </nav>
    </div>
  );
}
