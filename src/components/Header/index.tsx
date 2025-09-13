import { useContext } from 'react'
import './styles.css'
import { ContextCount } from '../../utils/context-list'



export default function Header() {

    const { contextCount } = useContext(ContextCount)
    return (
        <header>
            <div >
                <h1>DSFilter</h1>
                <p>{contextCount} produto(s)</p>
            </div>
        </header>
    )
}
