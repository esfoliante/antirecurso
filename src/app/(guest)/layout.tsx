import Topbar from '@/components/Topbar';
import '@/styles/globals.css';

export const metadata = {
  title: 'Anti Recurso',
  description: 'Anti Recurso | ISEP'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className="h-screen">
        <Topbar />
        <main className="min-h-[91vh] h-[91vh]">{children}</main>
      </body>
    </html>
  );
}