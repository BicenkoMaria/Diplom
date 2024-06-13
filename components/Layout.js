import Footer from "./Footer";
import Header from "./Header";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

function Layout ({children}) {
    return(
        <>
            <Header className={montserrat.className} />
            {children}
            <Footer className={montserrat.className}/>
        </>
    );
}

export default Layout;