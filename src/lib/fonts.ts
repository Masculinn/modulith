import { Poppins, Raleway } from "next/font/google";

const secondaryFont = Raleway({
  subsets: ["latin"],
  variable: "--font-secondary",
});
const primaryFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
});

export const { className: secondaryFontClassName } = secondaryFont;
export const { className: primaryFontClassName } = primaryFont;
export { secondaryFont, primaryFont };
