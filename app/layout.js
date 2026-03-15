import { Noto_Sans_Kannada } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const kannada = Noto_Sans_Kannada({
  subsets: ["kannada"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "ಕನ್ನಡ ಸುದ್ದಿ",
  description: "ನಿಖರ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ಸುದ್ದಿ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="kn">
      <body className={kannada.className}>
        {children}
        <GoogleAnalytics gaId="G-1KBKGVDSHX" />
      </body>
    </html>
  );
}