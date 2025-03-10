import Navbar from "@/components/common/Navbar";
import "./globals.css";


export const metadata = {
  title: "Learn Next.js",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
