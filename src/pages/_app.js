import "@/styles/globals.css";
import "../assets/css/tailwind.css";
import "../assets/css/materialdesignicons.min.css";
import { I18nextProvider } from "react-i18next";
import i18n from "../translate/i18n";
import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${poppins.variable} font-poppins text-base text-black dark:text-white dark:bg-slate-900 `}
    >
      <I18nextProvider i18n={i18n}>
        <Toaster
          toastOptions={{
            style: {
              background: "#0f172a",
              color: "#fff",
              border: "1px solid #ffa80f",
              padding: "1rem",
            },
            error: {
              icon: "⚠️",
            },
            success: {
              icon: "👏",
            },
            duration: 3000,
          }}
        />
        <Component {...pageProps} />
      </I18nextProvider>
    </main>
  );
}
