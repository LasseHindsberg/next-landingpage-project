import PriceCard from "./PriceCard";

export default function Prices() {
    return (
        <section className="prices__plans">
            <PriceCard
            heading="Bike"
            summary="Rent a single bike"
            price="25€ / hour"
            />
            <PriceCard
            heading="small group"
            summary="Rent 2-3 bikes"
            price="20€ / hour / bike"            
            />
            <PriceCard
            heading="big group"
            summary="Rent 4-5 bikes"
            price="15€ / hour / bike"
            />
            <PriceCard
            heading="Day Deal"
            summary="Rent 5 bikes for a whole day"
            price="100€"
            />
        </section>
    )
}