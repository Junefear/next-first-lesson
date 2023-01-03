import Navigation from "./navigation"
import Head from 'next/head'

function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>Arif Küçük'ün Web Sitesi</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
            </Head>
            <Navigation></Navigation>
            <main>

                {children}

            </main>
            <footer>
                desing by arif
            </footer>
        </div>
    )
}

export default Layout