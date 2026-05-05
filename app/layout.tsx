import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Elena Krayneva | Analytics & Growth Strategy',
  description: 'Digital Marketing & Analytics specialist turning marketing data into strategic decisions.',
  verification: {
    google: 'Ed1i7zwdlXYjKuQXugdqYA6mVW7xj-Fbj7zAODgMqf8',
  },
};

import BackgroundBlur from '@/components/BackgroundBlur';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BackgroundBlur />
        {children}
      </body>
    </html>
  );
}
