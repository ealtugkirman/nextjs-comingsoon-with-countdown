import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight:"600" });

export const metadata = {
  title: "Genç Demokratlar Vakfı",
  description: "Genç Demokratlar Vakfı 1994 yılında kurulmuştur. Vakıf Türk gençliğine çağdaş demokrasi ve milliyetçilik ilkeleri ışığında yetişmesine katkıda bulunmak ve insanlığın ortak değeri olan demokrasinin ülkemizde tesisini sağlamayı hedeflemektedir. 1994 yılında 11 kurucu üye ile yola çıkan vakfımızın bugün kurucu üye sayısı 20 normal üye sayısı 6410 dur.Vakfımızın ülke çapında birçok ilde şubeleri vardır ve yeni şubeler açılması amacına yönelik faaliyetlerine devam etmektedir.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
