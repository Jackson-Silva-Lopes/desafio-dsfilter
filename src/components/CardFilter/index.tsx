import "./styles.css";

import CardList from "../CardList";
import { useProductFilter } from "../../hooks/useProductFilter";
import { ProductDTO } from "../../models/ProductDTO";



type Props = {
  
  list: ProductDTO[];
  
 onFilter: (min: number, max: number) => void;

};




export default function CardFilter({ list , onFilter }: Props) {

  const { formData, handleInputChange, filtrar } = useProductFilter(onFilter );

  return (
    <>
      <div className="custom-filter">
        <form className="custom-form"
          onSubmit={(e) => {
            e.preventDefault();
            filtrar();
          }}
        >
          <div>
            <div>
              <input
                className="custom-input"
                placeholder="Preço mínimo"
                name="priceMin"
                type="number"
                value={formData.priceMin || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                className="custom-input "
                placeholder="Preço máximo"
                name="priceMax"
                type="number"
                value={formData.priceMax || ""}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button className="custom-button">Filtrar</button>
            </div>
          </div>
        </form>
      </div>
      <CardList list={list} />
    </>
  );
}
