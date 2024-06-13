import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Layout className={montserrat.className}>
        <Component {...pageProps} />
      </Layout>      
    </main>

  )
  ;
}
