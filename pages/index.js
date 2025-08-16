// pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>SIMEUNOVIĆ Rasadnik Cvijeća – Gajevi, Šamac</title>
        <meta
          name="description"
          content="Više od 20 godina proizvodimo pelargonije, surfinije, petunije, begonije, dalije, milion bels, ciklame, verbenke, lavandu i još mnogo vrsta cvijeća. Rasadnik Simeunović – Gajevi, Šamac."
        />
        <meta property="og:title" content="SIMEUNOVIĆ Rasadnik Cvijeća" />
        <meta
          property="og:description"
          content="Tradicionalna i moderna proizvodnja cvijeća u plastenicima i staklenicima. Sadnice i gotovi proizvodi u visećim saksijama."
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="page">
        {/* Navigacija */}
        <header className="nav">
          <div className="container navbar">
            <div className="brand">
              <span className="dot" />
              <span>SIMEUNOVIĆ Rasadnik Cvijeća</span>
            </div>
            <nav className="menu">
              <Link href="/" className="link active">Početna</Link>
              <Link href="/gallery" className="link">Galerija</Link>
              <Link href="/contact" className="link">Kontakt</Link>
            </nav>
          </div>
        </header>

        {/* Glavni sadržaj */}
        <main className="container">
          <section className="hero">
            <h1>Dobro došli u Rasadnik cvijeća SIMEUNOVIĆ</h1>
            <p className="lead">
              Već više od <strong>20 godina</strong> s ljubavlju i predanošću bavimo se
              proizvodnjom cvijeća. Naša tradicija i iskustvo, uz savremene metode uzgoja u
              <strong> modernim staklenicima i plastenicima</strong>, garancija su kvaliteta i
              povjerenja.
            </p>
          </section>

          <section className="copy">
            <h2>Naša ponuda</h2>
            <p>
              U našem rasadniku pronaći ćete širok asortiman sezonskog i višegodišnjeg cvijeća:
            </p>
            <ul>
              <li><strong>Pelargonije lozane i stojeće (muškatle)</strong> – raskošan cvat i dugotrajna ljepota.</li>
              <li><strong>Vinka</strong> – elegantna i otporna, unosi svježinu u svaki prostor.</li>
              <li><strong>Surfinije i petunije</strong> – idealne za bogate vodopade cvijeća u visećim saksijama.</li>
              <li><strong>Begonije i dalije</strong> – klasičan izbor za dvorišta, parkove i cvjetne gredice.</li>
              <li><strong>Milion bels (Calibrachoa)</strong> – stotine sitnih cvjetova u različitim nijansama.</li>
              <li><strong>Ciklama</strong> – donosi toplinu u jesen i zimu.</li>
              <li><strong>Kadifa i salvija</strong> – tradicionalne vrste koje oplemenjuju vrt bojama i mirisom.</li>
              <li><strong>Verbena</strong> – dekorativna i šarena, savršena za kombinacije.</li>
              <li><strong>Lavanda</strong> – mediteranski miris i ljepota u svakom vrtu.</li>
            </ul>
          </section>

          <section className="copy">
            <h2>Gotovi proizvodi</h2>
            <p>
              Pored sadnica, nudimo i <strong>gotove proizvode u visećim saksijama</strong>,
              spremne da odmah ukrase vaš dom, balkon ili dvorište. Na taj način štedite vrijeme,
              a dobijate savršeno oblikovanu biljku koja odmah donosi radost i ljepotu.
            </p>
          </section>

          <section className="copy">
            <h2>Naša misija</h2>
            <p>
              Naš cilj je da svaka biljka iz našeg rasadnika pronađe svoj novi dom i da unese
              <strong> boju, miris i život</strong> u vašu svakodnevicu.
            </p>
            <p>
              🌿 Posjetite nas u <strong>Gajevima kod Šamca</strong> i uvjerite se u kvalitet
              naše proizvodnje.
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            © {new Date().getFullYear()} SIMEUNOVIĆ Rasadnik Cvijeća · Gajevi, Šamac
          </div>
        </footer>
      </div>

      {/* Minimalni stilovi u okviru stranice */}
      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: radial-gradient(1200px 500px at 10% 0%, #0f172a 0%, #0b1020 60%, #0a0f18 100%);
          color: #e6f0ff;
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 16px 20px;
        }
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(8px);
          background: rgba(10, 16, 24, 0.65);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
        }
        .dot {
          width: 10px;
          height: 10px;
          background: #e65050;
          border-radius: 50%;
        }
        .menu {
          display: flex;
          gap: 10px;
        }
        .link {
          padding: 8px 12px;
          border-radius: 10px;
          color: #cfe3ff;
          text-decoration: none;
        }
        .link:hover,
        .active {
          background: rgba(255, 255, 255, 0.08);
        }
        .hero {
          padding: 48px 0 20px;
          text-align: center;
        }
        h1 {
          margin-bottom: 12px;
          font-size: 34px;
        }
        .lead {
          color: #9db2ce;
          max-width: 820px;
          margin: 0 auto;
        }
        .copy {
          margin: 28px 0;
        }
        ul {
          margin: 12px 0 0 18px;
        }
        li {
          margin-bottom: 6px;
        }
        .footer {
          margin-top: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(10, 16, 24, 0.6);
          font-size: 14px;
          color: #a8bedb;
          padding: 16px 0;
          text-align: center;
        }
        @media (max-width: 640px) {
          h1 {
            font-size: 26px;
          }
        }
      `}</style>
    </>
  );
}
