// "use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import Provider from "./SessionProvider";

export const metadata = {
  title: "Anonymous Post",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen h-screen w-full ">
          <Provider>
            <div className="container mx-auto ">
              <Navbar />
              {children}
            </div>
          </Provider>
        </div>
      </body>
    </html>
  );
}
