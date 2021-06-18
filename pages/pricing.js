import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Prices from '../components/Prices'

export default function pricing() {
    return(
        <>
        <Head>
            <title>Pricing | Amsterdam Bikes</title>
        </Head>
        <Navigation/>
        <article className="pageContent">
            <h1>Our Pricing</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, totam nesciunt iure non porro debitis quis. Eius quaerat fugit, voluptate, doloremque eligendi quae voluptatem illum, veritatis molestias velit vel saepe commodi ipsa aperiam ut nihil aut ad dolor accusantium iusto veniam? Fugit fugiat tempora voluptate ipsam quia repellendus modi reprehenderit!</p>
        <Prices/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit numquam, eaque excepturi quia assumenda aliquam perspiciatis voluptatibus possimus maxime? Saepe provident deleniti, dolore explicabo est repellat eius hic blanditiis doloribus tempore atque quia eligendi. Eligendi officiis tempora amet nihil excepturi animi voluptas corporis fugiat quam tempore odio quo velit nobis pariatur suscipit dolore minima alias numquam fugit, sequi est cumque. Sint voluptatum vitae dolore maiores necessitatibus voluptatem autem minus in quas aut? Mollitia, numquam unde?</p>
        <section className="packageDeal">
        <Image 
        priority
        src="/images/misc/pricing-img.jpg"
        width={910}
        height={540}
        />
        <div>
        <h1>Custom packages</h1>
        <Link href="/contact">
        <a>If your group is larger than 5 people, you can contact us to make a specific package deal </a>
        </Link>
        </div>
        </section>
        </article>
        </>
    )
}