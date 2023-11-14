import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import ContextProvider from "./providers/ContextProvider";
import Modal from "./components/Modal";
import "@/styles/globals.scss"
import BlurProvider from "./components/BlurProvider";
import "simplebar-react/dist/simplebar.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <BlurProvider>
            <Modal>
              <Navbar />
              {children}
            </Modal>
          </BlurProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
