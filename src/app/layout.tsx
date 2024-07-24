import { cn } from "@/lib/utils";
import "./globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "")}>
        {children}
      </body>
    </html>
  );
}
