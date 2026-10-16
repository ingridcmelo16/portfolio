import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const title = "Ingrid Melo — Product Designer"
const description =
  "Product Designer em produtos B2B complexos de supply chain, com IA no processo e entrega em código. Design system, agentes de IA e research direto com clientes enterprise."

export const metadata: Metadata = {
  // Defina NEXT_PUBLIC_SITE_URL no deploy (ex.: https://seudominio.com)
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  keywords: [
    "Product Designer",
    "UX Designer",
    "Design System",
    "IA aplicada a UX",
    "B2B",
    "Supply Chain",
    "S&OP",
    "Claude Code",
    "Rio de Janeiro",
  ],
  authors: [{ name: "Ingrid Melo" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: title,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        {children}
      </body>
    </html>
  )
}
