
import CardFilter from "../../components/CardFilter";
import Header from "../../components/Header";
import './styles.css'
import { products } from "../../api/products";
import { useState } from "react";
import { ProductDTO } from "../../models/ProductDTO";




export default function Home() {
    
    const [filtered, setFiltered] = useState<ProductDTO[]>(products);

    function findByPrice(min: number, max: number): ProductDTO[] {
        return products
            .filter((x) => x.price >= min && x.price <= max)
            .sort((x, y) => x.price - y.price);
    }


   

    return (
        <>
            <Header />
            <main>
                <section className="catalog-card">
                    <CardFilter list={filtered}   onFilter={(min, max) => setFiltered(findByPrice(min, max))} />
                </section>

            </main>


        </>
    )
}

