import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { NextUIProvider } from "@nextui-org/react";
import { getServerAuthSession } from "~/server/auth";
import CustomNavbar from "./navbar";
import SigninButton from "./signinButton";

export const metadata: Metadata = {
  title: "Invoicer",
  description: "Make that $🤑$",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerAuthSession();

  return (
    <>
      <html
        lang="en"
        className={`${GeistSans.variable} bg-background text-foreground dark`}
      >
        <body>
          <NextUIProvider>
            <TRPCReactProvider>
              {session ? (
                <>
                  <CustomNavbar />
                  {children}
                </>
              ) : (
                <div
                  style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SigninButton></SigninButton>
                </div>
              )}
            </TRPCReactProvider>
          </NextUIProvider>
        </body>
      </html>
    </>
  );
}
