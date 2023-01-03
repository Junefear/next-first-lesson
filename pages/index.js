import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/Link'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

function HomePage({ characters }) {
    return (
        <Layout>
            <Head>
                <title>Anasayfa</title>
            </Head>
            <h1>Welcome to Next.js!</h1>

            <ul>
                {characters.results.map(characters => (
                    <li key={characters.id}>
                        <Link href="/character/[slug]" as={`/character/${slug(characters.name) }-${characters.id}`}>
                            {characters.name}
                            <figure>
                                <img src= {characters.image}/>
                            </figure>
                        </Link>
                    </li>
                ))}
            </ul>

        </Layout>
    )
}

export default HomePage

export async function getStaticProps() {

    //data fetch
    const data = await unfetch("https://rickandmortyapi.com/api/character")
    const characters = await data.json();
    return {
        props: {
            characters
        }
    }
}