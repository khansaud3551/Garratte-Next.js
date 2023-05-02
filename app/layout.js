import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Maven_Pro } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const maven_Pro = Maven_Pro({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "ManageHer",
  description: "Unlock the Secrets to Financial Freedom: Master OnlyFans Model Management and Skyrocket Your Income with ManageHer!",
  image: "/assets/logo.gif",
  icon: "/assets/logo.gif",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div className={`header relative`}>
          <Header />
        </div>
        <div className="container px-5 mx-auto">{children}</div>
        <img
          src="
      assets/footer.gif"
          className="w-[300px] md:w-[580px] mx-auto"
          alt=""
        />
        {/* <p className="mb-5 text-xl text-center">Copyright @ 2023</p> */}
        <p className="mb-5 text-xl text-center">© {new Date().getFullYear()} ManageHer</p>
      </body>
    </html>
  );
}
