import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/section/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Navbar />
          <div className="flex pt-20">
            <section
              className="flex min-h-screen
            flex-1 flex-col pb-6 
            max-md:pb-14 sm:px-14"
            >
              <div className="mx-auto w-full max-w-5xl">{children}</div>
            </section>
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
