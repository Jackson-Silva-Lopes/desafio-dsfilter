import { ProductDTO } from '../models/ProductDTO';
import './styles.css'
type Props = {
  product: ProductDTO[];
};
export default function ItemList({ product }: Props) {
  return (
    product.map((item) => (
      <div key={item.id} className="item-list">
        <div className="content-list">
          <p>{item.name}</p>
          <h1>R$ {item.price}</h1>
        </div>
      </div>
    ))

  )
}
