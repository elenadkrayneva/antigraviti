import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elena Krayneva | Marketing Analytics & Growth Strategy',
  description: 'Marketing Analytics specialist turning data into strategic growth decisions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-brand-accent-muted selection:text-brand-accent">
        <div className="min-h-screen relative lg:flex max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-12 lg:py-0">
          {children}
        </div>
      </body>
    </html>
  );
}
