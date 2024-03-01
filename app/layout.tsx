import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

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
          <div className="flex">
            <section
              className="flex min-h-screen
            flex-1 flex-col px-6 pb-6 pt-36
            max-md:pb-14 sm:px-14"
            >
              <div className="mx-auto w-full max-w-5xl">{children}</div>
            </section>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
