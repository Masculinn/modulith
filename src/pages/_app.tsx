import RootProvider from "@/providers/root-provider";
import SidebarProvider from "@/providers/sidebar-provider";
import StoreProvider from "@/providers/store-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider>
          <RootProvider>
            <Component {...pageProps} />
          </RootProvider>
        </SidebarProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}
