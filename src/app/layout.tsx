import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joris Mansion",
  description:
    "Hello, moi c'est Joris Mansion, développeur web Javascript / Typescript basé sur Paris. J'affectionne particulièrement React et Next.js, et je suis toujours à la recherche de nouveaux projets à réaliser.",
  icons: {
    icon: "/ico.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <noscript>
          <iframe
            src={"https://www.googletagmanager.com/ns.html?id=" + process.env.NEXT_PUBLIC_GTM_ID}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
    </html>
  );
}
