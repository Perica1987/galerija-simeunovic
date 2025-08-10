import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("sr");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === "sr" ? "en" : "sr")}
      className="ml-3 px-2 py-1 text-sm border rounded hover:bg-gray-100"
    >
      {lang === "sr" ? "EN" : "SR"}
    </button>
  );
}
