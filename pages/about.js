import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Pitch from '../components/Pitch'

export default function about() {
    return(
        <>
        <Head>
            <title> About Us | Amsterdam Bikes</title>
        </Head>
        <Navigation/>
        <div className="pageContent">
            <Pitch />
            <Pitch />
            <Pitch />
        </div>
        </>
    )
}