import React, {useState} from "react";
import {Iprdouct} from "../model";
import axios from "axios";
import {ErrorMessage} from "./ErrorMessage";

const ProductData: Iprdouct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 20
    }
}

interface CreateProductProps {
    onCreate: (product: Iprdouct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')


    const SubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        if (value.trim().length === 0) {
            setError('Please enter valid title...')
            return
        }

        ProductData.title = value
        const resposne = await axios.post('https://fakestoreapi.com/products', ProductData)
        onCreate(resposne.data)
    }

    const ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (<>
        <form onSubmit={SubmitHandler}>
            <input type='text' className='border py-2 px-4 mb-2 w-full outline-0' placeholder='Enter Product Title...'
                   value={value}
                   onChange={ChangeHandler}
            />
            {error && <ErrorMessage Error={error}/>}
            <button type='submit' className="py-2 px-4 border bg-emerald-500 hover:text-white">Create</button>
        </form>

    </>)
}