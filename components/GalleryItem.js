import Carousel from "react-grid-carousel";
import Link from 'next/link'
import Image from 'next/image'
import gallery from '../styles/galleryItem.module.scss';

export default function GalleryItem({ image, copy, ctaLink, ctaCopy}) {
    return(

        <Carousel.Item>
    <div className={gallery.carouselItem}>
        <img src={image} className={gallery.carouselItem__image}/>
        <div className={gallery.carouselItem__content}>
            <p className={gallery.carouselItem__copy}>{copy}</p>
            <Link href={ctaLink}>
            <a className={gallery.carouselItem__CTA}>{ctaCopy}</a>
            </Link>
        </div>
    </div>
</Carousel.Item>
    );
}