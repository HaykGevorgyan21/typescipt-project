import {Iprdouct} from "../model";
import {useState} from "react";

interface ProductProps {
    product: Iprdouct
}

export function Product({product}: ProductProps) {
    const [details, setDetails] = useState(false)
    const ButtonBgClassname = details ? 'bg-yellow-400' : 'bg-blue-400'
    const BtnClasses = ['py-2 px-4 border', ButtonBgClassname]

    return (<div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
        {product.title}
        <img src={product.image} className='w-1/6' alt={product.title}/>
        <p>{product.title}</p>
        <p className='font-bold'>{product.price}</p>
        <button className={BtnClasses.join(' ')} onClick={() => setDetails(prev => !prev)}>
            {details ? 'Hide Details' : 'Show Details'}
        </button>


        {details && <div>
            <p>{product.description}</p>
        </div>}
    </div>)

}


