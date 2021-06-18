import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import scss from '../styles/contact.module.scss'
import ContactForm from '../components/ContactForm'

export default function contact() {
    return(
        <>
        <Head>
            <title>Contact Us | Amsterdam Bikes</title>
        </Head>
        <Navigation/>
        <article className="pageContent">
            <section className={scss.where}>
                <div className={scss.whereLeft}>
            <h1>Lorem ipsum dolor sit.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias natus praesentium ab rem tempore quos sapiente corporis enim esse qui labore in eius eligendi error optio inventore soluta mollitia, nisi nulla voluptatem iste at dolorum. Fugiat vel incidunt quidem facere doloribus in neque, dignissimos cumque dolorem veniam recusandae accusamus deserunt!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptas atque nesciunt velit et ipsam sint architecto laborum debitis! Ratione quod eos vero praesentium dolor perferendis animi et ipsa iure eum accusamus quibusdam voluptatum quam assumenda magnam quasi, tempora facilis minus tempore nulla! Quas ad, accusamus voluptatum nostrum enim labore rem molestiae nulla quibusdam tempora, quod, unde odio maxime architecto nemo vitae eius expedita sit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sequi labore expedita, illum saepe laudantium soluta ea veniam mollitia impedit architecto sed porro itaque temporibus illo veritatis, quod non? Eaque quae tenetur fuga magni accusantium.</p>
                </div>

        <div className={scss.mapContainer}>
        <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1012%20AB%20Amsterdam,%20Netherlands+(Amsterdam%20BIkes)&amp;t=h&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>

            </section>
        <h2>Lorem, ipsum dolor?</h2>
            <section className={scss.whyUs}>
        <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, consectetur.</li>
        </ul>
            <ContactForm/>
            </section>
        <section className={scss.imageGrid}>
            <h1>Images from our customers</h1>
            <div className={scss.imageGrid__container}>
                <Image
                priority
                src="/images/misc/bike-1.jpg"
                width={200}
                height={400}
                />
                <Image
                priority
                src="/images/misc/bike-2.jpg"
                width={200}
                height={400}
                />
                <Image
                priority
                src="/images/misc/bike-3.jpg"
                width={200}
                height={400}
                />
                <Image
                priority
                src="/images/misc/bike-1.jpg"
                width={200}
                height={400}
                />
                <Image
                priority
                src="/images/misc/bike-2.jpg"
                width={200}
                height={400}
                />
                <Image
                priority
                src="/images/misc/bike-3.jpg"
                width={200}
                height={400}
                />
                <Image
                priority
                src="/images/misc/bike-1.jpg"
                width={200}
                height={400}
                />
                <Image
                priority
                src="/images/misc/bike-2.jpg"
                width={200}
                height={400}
                />
                <Image
                priority
                src="/images/misc/bike-3.jpg"
                width={200}
                height={400}
                />
            </div>
        </section>
    </article>       
</>
    )
}