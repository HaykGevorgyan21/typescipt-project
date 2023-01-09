import React from "react";

interface ErrorMessageProps {
    Error: string
}

export function ErrorMessage({Error}: ErrorMessageProps) {
    return (<p className='text-center text-red-600 font-light'>{Error}</p>)
}