import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Header from "../components/header/index"
import PageTransition from "../components/transition/page";
import StairTransition from "../components/staireffect/page"
import Footer from "../components/footer/index";
import WhatsAppButton from "../components/whatsapp/page"
import ThemeProvider from "../components/theme-provider/page"
import { icons } from "lucide-react";

const JetbrainsMono=JetBrains_Mono(
  {
  subsets:["latin"],
  weight:["100", "200","300","400","500","600","700","800"],
  variable:'--font-JetbrainsMono'
}
)


export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        {/* Prevent light flash on reload */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem("theme");
                  if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={JetbrainsMono.variable} 
      >
        <ThemeProvider>
        <Header />
        <StairTransition />
        <PageTransition > {children} </PageTransition>
        <Footer />
        <WhatsAppButton />
        </ThemeProvider>
       
      </body>
    </html>
  );
}
