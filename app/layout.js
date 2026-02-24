import "./globals.css";

export const metadata = {
  title: "Bambrew | Plastic-Free Living, Powered by Nature",
  description: "Our advanced plant-based materials replace single-use plastic in the products you use every day — bags, liners, wraps, and more... without compromising strength, safety, or convenience.",
  keywords: ["sustainable", "eco-friendly", "plastic-free", "compostable", "biopolymer", "green products"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
