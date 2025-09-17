import { useState } from "react";
import { ProductDTO } from "../models/ProductDTO";

type FormData = {
    priceMin?: number;
    priceMax?: number;
};

type filterProps = {
    filterFunction: (min: number, max: number) => ProductDTO[];
};


export function useProductFilter(initialList: ProductDTO[], { filterFunction }:filterProps) {
    
    const [formData, setFormData] = useState<FormData>({});
    const [products, setProducts] = useState<ProductDTO[]>(initialList);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value === "" ? undefined : Number(value),
        });
    }

   

    function filtrar() {
        const minVal = formData.priceMin || 0;
        const maxVal = formData.priceMax || Number.MAX_VALUE;

        const lista = filterFunction(minVal, maxVal);
        setProducts(lista);
    }

    return {
        formData,
        products,
        handleInputChange,
        filtrar,
    };
}
