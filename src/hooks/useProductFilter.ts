import { useState } from "react";


type FormData = {
    priceMin?: number;
    priceMax?: number;
};



export function useProductFilter( onFilter:(min: number, max: number) => void) {
    
    const [formData, setFormData] = useState<FormData>({});
  

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
        onFilter(minVal, maxVal);      
    }

    return {
        formData,       
        handleInputChange,
        filtrar,
    };
}


