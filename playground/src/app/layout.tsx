import { ConfigProvider } from "antd"
import { StoreProvider } from "@/store";
import type { Metadata, Viewport } from "next";

import './global.css'


export const metadata: Metadata = {
  title: "HomeGPT",
  description: "HomeGPT is a home assistant that can help you with your daily tasks.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
}




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            components: {
              Select: {
                selectorBg: "#181A1D",
              },
            },
          }}
        >
          <StoreProvider>
            {children}
          </StoreProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}
