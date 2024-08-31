import React from "react";

import "../../src/global.css";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <div className="flex flex-col h-screen">
          <header className="w-full p-4 bg-blue-200">RootLayout Header</header>
          <div className="flex-1 p-4">{children}</div>
          <footer className="p-4 bg-state-100">RootLayout Footer</footer>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
