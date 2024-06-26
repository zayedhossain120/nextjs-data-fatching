import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-5xl text-center py-5 mt-10">
          <Link className="border py-3 px-5" href="/sequential">
            {" "}
            Sequential
          </Link>
          <Link className="border py-3 px-5" href="/parallel">
            {" "}
            Parallel
          </Link>
          <Link className="border py-3 px-5" href="/progressive">
            {" "}
            Progressive
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
