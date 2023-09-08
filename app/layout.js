import './globals.css'
import './embla.css'
import { NavbarResponsive, FooterResponsive } from "@/components";

export const metadata = {
  title: 'Toxicology',
  description: "Toxicology Frontend",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarResponsive />
        {children}
        <FooterResponsive />
      </body>
    </html>
  )
}
