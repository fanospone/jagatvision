"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <span className="icon">📹</span>
        <div>
          <h1>JAGATVISION CCTV</h1>
          <small>store.</small>
        </div>
      </div>

      <nav style={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/paketcctv">Paket CCTV</Link>
        <Link href="/paketakseskontrol">Paket Akses Kontrol</Link>
        <Link href="/tentangkami">Tentang Kami</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    backgroundColor: "#111",
    color: "#fff",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
};
