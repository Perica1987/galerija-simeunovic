export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12 text-center">
      <p className="text-sm mb-3">
        © {new Date().getFullYear()} Rasadnik Simeunović. Sva prava zadržana.
      </p>

      <div className="flex justify-center gap-6">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.svg" alt="Instagram" className="w-8 h-8 hover:opacity-80" />
        </a>
        <a href="mailto:pericasim@hotmail.com">
          <img src="/mail.svg" alt="Mail" className="w-8 h-8 hover:opacity-80" />
        </a>
      </div>
    </footer>
  );
}
