import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LangProvider } from "@/components/LanguageToggle";

export default function MyApp({ Component, pageProps }) {
  return (
    <LangProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </LangProvider>
  );
}
