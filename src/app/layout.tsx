import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata = {
  title: "Divya Prakash Foundation",
  description: "Together for change, building a brighter future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-[#111D15]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
