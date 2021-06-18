import Carousel from 'react-grid-carousel'
import GalleryItem from "./GalleryItem";
export default function Gallery() {
    return(
        <Carousel
        cols={1}
        rows={1}
        gap={0}
        autoplay={5000}
        loop>
            <Carousel.Item>
            <GalleryItem image="/images/gallery/gallery-about.jpg"
            copy="Your new city bike rental. Located in the city center - 5 minutes walk from central station"
            ctaLink="/about"
            ctaCopy="Learn more!"/>
            </Carousel.Item>

            <Carousel.Item>
            <GalleryItem image="/images/gallery/gallery-prices.jpg"
            copy="Cheap and affordable prices! Multiple bundles for bigger parties"
            ctaLink="/pricing"
            ctaCopy="See Prices"/>
            </Carousel.Item>

            <Carousel.Item>
            <GalleryItem image="/images/gallery/gallery-contact.jpg"
            copy="Call us or Send us an E-mail today!"
            ctaLink="/contact"
            ctaCopy="Book your rental"/>
            </Carousel.Item>
        </Carousel>
    )
}