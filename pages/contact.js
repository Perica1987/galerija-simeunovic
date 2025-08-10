import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat px-4 py-16"
      style={{
        backgroundImage: "url('/pozadina.jpg')",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
        {/* Forma */}
        <div>
          <h1 className="text-3xl font-bold text-green-700 mb-6">Kontakt</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Ime"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            <textarea
              name="message"
              placeholder="Poruka"
              value={form.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Slanje..." : "Pošalji"}
            </button>
            {status === "error" && (
              <p className="text-red-600 text-sm">Molimo popunite sva polja.</p>
            )}
            {status === "success" && (
              <p className="text-green-600 text-sm">Poruka je uspješno poslata!</p>
            )}
          </form>
        </div>

        {/* Kontakt info + mapa */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">📍 Lokacija</h2>
            <p><strong>Adresa:</strong> Gajevi 22, 76238 Gornja Slatina</p>
            <p><strong>Telefon:</strong> +387 65 690 123</p>
            <p><strong>Email:</strong> pericasim@hotmail.com</p>
          </div>
          <div className="rounded overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.0439362534566!2d18.44056617572988!3d44.9427747680785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c3f31e3663a69%3A0x619d4bb9a8969259!2sSIMEUNOVI%C4%86%20rasadnik%20cvije%C4%87a!5e0!3m2!1sbs!2s!4v1753717645312!5m2!1sbs!2s"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
