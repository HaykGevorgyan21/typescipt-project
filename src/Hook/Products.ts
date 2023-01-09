import {useEffect, useState} from "react";
import {Iprdouct} from "../model";
import axios, {AxiosError} from "axios";


export function UseProducts() {
    const [Products, SetProducts] = useState<Iprdouct[]>([])
    const [Loading, SetLoading] = useState(false)
    const [Error, SetError] = useState('')

    function addProduct(product: Iprdouct) {
        SetProducts(prev => [...prev, product])
    }

    async function FetchProducts() {
        try {
            SetError('')
            SetLoading(true)
            const resposne = await axios.get<Iprdouct []>('https://fakestoreapi.com/products')
            SetProducts(resposne.data)
            SetLoading(false)

        } catch (e: unknown) {
            const Error = e as AxiosError
            SetLoading(false)
            SetError(Error.message)

        }
    }


    useEffect(() => {

        FetchProducts()

    }, [])
    return {Error, Products, Loading, addProduct}
}

