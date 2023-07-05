import {useEffect, useState} from 'react'
import { server_calls } from '../api/backend'

export const useGetData = () => {
    const [vehicleData, setData] = useState<[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    };

    useEffect(() => {
      handleDataFetch();
    }, []) // Occurs when Component is created one time, [componentName] occurs on specific component, empty occurs everytime 

    return { vehicleData, getData:handleDataFetch }
};