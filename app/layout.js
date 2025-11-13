import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  title: "Instituto de Excelência - Educação Superior",
  description: "Formando líderes e inovadores para o futuro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={geist.className}>
        <Header />

        <div className="app-shell">
          <main className="main-content">{children}</main>

          <aside className="sidebar-wrapper">
            <Sidebar />
          </aside>
        </div>
      </body>
    </html>
  );
}
