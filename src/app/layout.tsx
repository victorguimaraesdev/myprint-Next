import SideBar from "@/components/sidebar";
import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased flex`}>
        <SideBar/>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
