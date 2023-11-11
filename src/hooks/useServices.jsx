
import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";

const useServices = (asc, min, max, search) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        // axios.get('https://car-doctor-serverside.vercel.app/services')
        // .then(res => {
        //     setServices(res.data)
        // })

        axiosSecure(`/services?sort=${asc ? 'asc' : 'desc'}&min=${min}&max=${max}&search=${search}`)
        .then(res => setServices(res.data))
    }, [asc, min, max, search])
    return services;
};

export default useServices;