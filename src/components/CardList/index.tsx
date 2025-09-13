
import { useContext } from 'react';
import ItemList from '../ItemList'
import { ProductDTO } from '../models/ProductDTO';
import './styles.css'
import { ContextCount } from '../../utils/context-list';

type Props = {
    list: ProductDTO[];
};

export default function CardList({ list }: Props) {

    const { setContextCount } = useContext(ContextCount)
    setContextCount(list.length)

    return (
        <div className='dsc-card-list'>
            <ItemList product={list} />

        </div>
    )
}
