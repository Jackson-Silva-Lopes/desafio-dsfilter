
import CardFilter from "../../components/CardFilter";
import Header from "../../components/Header";
import './styles.css'
import { products } from "../../api/products";



export default function Home() {
    return (
        <>
            <Header />
            <main>
                <section className="catalog-card">
                    <CardFilter list={products} />
                </section>

            </main>
           

        </>
    )
}

