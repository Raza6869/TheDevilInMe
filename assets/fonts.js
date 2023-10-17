import { Gothic_A1, Andada_Pro, Krona_One } from "next/font/google";

export const kronaOne = Krona_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: ["--font-krona-one"],
});

export const gothic = Gothic_A1({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-gothic",
});

export const andadaPro = Andada_Pro({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-andada-pro",
});
