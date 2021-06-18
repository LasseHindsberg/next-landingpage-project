import Head from 'next/head'
import Navigation from '../components/Navigation'
import Gallery from '../components/Gallery'
import Pitch from '../components/Pitch'
import Prices from '../components/Prices'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Amsterdam Bikes</title>
      </Head>
      <Navigation/>
      <Gallery />
      <article className="pageContent">
        <Pitch/>
        <section>
        <h1>Our Prices</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem impedit alias vel dolorem eius odio aut aliquid saepe vero quidem? Ea dicta odio, aperiam dolorem error impedit modi. Pariatur voluptatem dolorum doloremque, debitis voluptates veritatis ipsam inventore adipisci nisi accusamus laboriosam. Fuga, facere numquam vero nesciunt qui magnam tempora autem.</p>
        <Prices/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, esse iusto officiis amet quas inventore dolor quo. Temporibus hic ullam incidunt tempore cum sit magnam fuga tenetur. Inventore alias eaque officia aperiam nostrum, tenetur repellat, soluta temporibus vitae provident a, asperiores est suscipit cum dolorem amet accusamus expedita eligendi fugiat.</p>


        </section>
        <section className="contactContainer">
          <div className="contactLeft">
          <h1>Contact Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laudantium nam enim, molestiae porro ab consequuntur magni vero dignissimos aperiam, nobis esse voluptatem incidunt nisi officiis quas aliquid repudiandae? Eum repudiandae iure asperiores cumque alias voluptas laboriosam. Praesentium dolores voluptatum sint nemo explicabo, maxime facilis ab quos, tempora omnis doloribus quasi pariatur eius recusandae, velit sed deserunt illo. Voluptatum porro ullam culpa placeat minima impedit?</p>
          </div>
          <ContactForm/>
        </section>
      </article>
      <footer>
      </footer>
    </>
  )
}
