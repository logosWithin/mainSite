import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css"

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}