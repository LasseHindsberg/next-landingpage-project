export default function PriceCard( {heading, summary, price } ) {
    return (
        <>
        <article className="price.priceCard">
            <section className="priceCard__title">
                <h1 className="title__heading">{heading}</h1>
                <p className="title__summary">{summary}</p>
                <p className="title__price">{price}</p>
            </section>
        </article>
        </>
    )
}