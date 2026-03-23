import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elena Krayneva | Analytics & Growth Strategy',
  description: 'Digital Marketing & Analytics specialist turning marketing data into strategic decisions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
