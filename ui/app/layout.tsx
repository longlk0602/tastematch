import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TasteMatch — Group decisions made easy",
  description: "Swipe2Dine. Your group decides in 2 minutes.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, height: "100%" }}>
        <div className="tm-root">
          <div className="tm-bg" />
          <div className="tm-shell">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
