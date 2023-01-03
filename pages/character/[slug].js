import Layout from '../../components/layout'
import Head from 'next/head'
import Link from 'next/Link'
import slug from 'slug'
import unfetch from 'isomorphic-unfetch'

function CharacterDetail({ character }) {
    return (
        <Layout>
            <Head>
                <title>Character Detail</title>
            </Head>
            <h1>{character.name}</h1>
            <figure>
                <img className='w-50' src={character.image} />
            </figure>


        </Layout>
    )
}

export default CharacterDetail


export async function getStaticPaths() {

    const data = await unfetch('https://rickandmortyapi.com/api/character/')
    const character = await data.json();

    return {
        paths: character.results.map(character => {
            return { params: { slug: `${slug(character.name)}-${character.id}` } }
        }),
        fallback: false
    }

}

export async function getStaticProps({ params }) {
    const id = params.slug.split("-").slice(-1)[0]

    //data fetch
    const data = await unfetch('https://rickandmortyapi.com/api/character/' + id)
    const character = await data.json();
    return {
        props: {
            character
        }
    }
}