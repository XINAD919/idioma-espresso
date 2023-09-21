import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CustomThemeProvider, ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <CustomThemeProvider>
      <Component {...pageProps} toggleTheme={toggleTheme} theme={theme} />
    </CustomThemeProvider>
  );
}
