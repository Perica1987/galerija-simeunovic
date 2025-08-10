import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";

export default function Gallery() {
  const images = [
    { src: "/fuchsia_mindjusica.jpg", title: "Fuchsia / Minđušica", cat: "Fuchsia" },
    { src: "/kaliopa_crvena_1.jpg", title: "Kaliopa crvena", cat: "Kaliopa" },
    { src: "/kaliopa_crvena_2.jpg", title: "Kaliopa crvena", cat: "Kaliopa" },
    { src: "/kaliopa_crvena_3.jpg", title: "Kaliopa crvena", cat: "Kaliopa" },
    { src: "/kaliopa_crvena_4.jpg", title: "Kaliopa crvena", cat: "Kaliopa" },
  ];

  const [filter, setFilter] = useState("Sve");
  const [query, setQuery] = useState("");
  const [current, setCurrent] = useState(null);
  const [scale, setScale] = useState(1);
  const slideRef = useRef();
  const touchStartX = useRef(null);

  const filtered = images.filter(
    (img) =>
      (filter === "Sve" || img.cat === filter) &&
      img.title.toLowerCase().includes(query.toLowerCase())
  );

  const categories = ["Sve", ...new Set(images.map((i) => i.cat))];

  const prev = useCallback(
    () => setCurrent((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );

  const next = useCallback(
    () => setCurrent((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    const h = (e) => {
      if (current === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [current, prev, next]);

  useEffect(() => {
    if (current === null) return;
    slideRef.current = setInterval(next, 5000);
    return () => clearInterval(slideRef.current);
  }, [current, next]);

  const close = () => {
    setCurrent(null);
    setScale(1);
  };

  const wheelZoom = (e) => {
    if (current === null) return;
    e.preventDefault();
    setScale((s) => Math.min(3, Math.max(1, +(s + (e.deltaY < 0 ? 0.1 : -0.1)).toFixed(1))));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) prev();
    if (dx < -50) next();
  };

  return (
    <div
      className="min-h-screen p-10 bg-cover bg-center"
      style={{
        backgroundImage: "url('/pozadina.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Link href="/" className="text-sm text-blue-600 hover:underline">
        ← Nazad / Back
      </Link>

      <h1 className="text-3xl font-bold text-green-700 mt-2 mb-6">Galerija</h1>

      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setQuery("");
            }}
            className={`px-3 py-1 rounded ${
              filter === cat ? "bg-green-700 text-white" : "bg-gray-200 hover:bg-gray-300"
            } text-sm`}
          >
            {cat}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Traži… / Search…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-6 px-3 py-2 border rounded w-full md:w-1/2"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((img, idx) => (
          <div key={idx} className="text-center group">
            <img
              src={img.src}
              alt={img.title}
              className="rounded shadow mx-auto cursor-pointer transition-transform duration-200 group-hover:scale-105"
              onClick={() => setCurrent(idx)}
            />
            <p className="mt-2 text-sm font-medium">{img.title}</p>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-gray-500 col-span-full">
            Nema rezultata / No results&nbsp;😕
          </p>
        )}
      </div>

      {current !== null && (
        <dialog
          open
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={close}
          onWheel={wheelZoom}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="relative flex flex-col items-center gap-4 max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl select-none"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl select-none"
            >
              ›
            </button>

            <figure className="flex flex-col items-center">
              <img
                src={filtered[current].src}
                alt={filtered[current].title}
                style={{ transform: `scale(${scale})` }}
                className="object-contain max-h-[80vh] max-w-[90vw] rounded shadow-lg transition-transform duration-150"
              />
              <figcaption className="mt-3 text-white text-lg">
                {filtered[current].title}
              </figcaption>
            </figure>

            <button
              onClick={close}
              className="absolute -top-4 -right-4 text-white text-2xl bg-black/60 rounded-full w-8 h-8 leading-8"
              aria-label="Zatvori"
            >
              ×
            </button>
            <button
              onClick={close}
              className="mt-2 px-4 py-1 text-sm text-white bg-black/60 rounded"
            >
              Zatvori / Close
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
}
