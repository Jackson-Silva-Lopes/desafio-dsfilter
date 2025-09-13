import { useState } from "react";
import { ProductDTO } from "../models/ProductDTO";

type FormData = {
    priceMin?: number;
    priceMax?: number;
};

export function useProductFilter(initialList: ProductDTO[]) {
    
    const [formData, setFormData] = useState<FormData>({});
    const [products, setProducts] = useState<ProductDTO[]>(initialList);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value === "" ? undefined : Number(value),
        });
    }

    function findByPrice(min: number, max: number): ProductDTO[] {
        return initialList
            .filter((x) => x.price >= min && x.price <= max)
            .sort((x, y) => x.price - y.price);
    }

    function filtrar() {
        const minVal = formData.priceMin || 0;
        const maxVal = formData.priceMax || Number.MAX_VALUE;

        const lista = findByPrice(minVal, maxVal);
        setProducts(lista);
    }

    return {
        formData,
        products,
        handleInputChange,
        filtrar,
    };
}
