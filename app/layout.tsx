import './globals.css'
import React from "react";

import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';

export const metadata = {
  title: 'Andreas Steinsland',
  description: 'Portfolio description for Andreas Steinsland',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
          <head>
            <ColorSchemeScript defaultColorScheme="dark"/>
          </head>
          <body>
            <MantineProvider defaultColorScheme="dark">{children}</MantineProvider>
          </body>
      </html>
  );
}
