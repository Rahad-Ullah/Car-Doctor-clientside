// import { useEffect, useState } from "react";
import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [asc, setAsc] = useState(true)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(999999)
    const [search, setSearch] = useState('')
    
    // const [services, setServices] = useState([])

    // useEffect(() => {
    //     fetch('https://car-doctor-serverside.vercel.app/services')
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // } ,[])

    const services = useServices(asc, min, max, search)      //? custom hook

    const handleMin = (e) => {
        const value = e.target.value;
        value ? setMin(value) : setMin(0)
    }
    const handleMax = (e) => {
        const value = e.target.value;
        value ? setMax(value) : setMax(999999)
    }


    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setSearch(searchText)
    }
    
    
    return (
        <section>
            <div className="text-center">
                <h4 className="text-xl text-primary font-bold mb-5">Service</h4>
                <h2 className="text-4xl text-secondary font-bold">Our Service Area</h2>
                <p className="py-5 text-light-dark max-w-lg mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
                <div className="flex flex-col lg:flex-col justify-between items-center gap-4 mt-8">
                    <form onSubmit={handleSearch} className="flex gap-4">
                        <input type="text" className="input input-bordered" name="search"/>
                        <button className="btn btn-primary normal-case text-base">Search</button>
                    </form>
                    <div className="flex justify-center items-center gap-4">
                        <h4 className="font-semibold">Price Range: </h4>
                        <input onChange={handleMin} type="text" placeholder="min" className="input input-bordered w-24 md:w-36"/>
                        <input onChange={handleMax} type="text" placeholder="max" className="input input-bordered w-24 md:w-36"/>
                    </div>
                    <button
                        onClick={() => setAsc(!asc)}
                        className="btn btn-primary normal-case text-base"
                    >
                        {asc ? 'Sort Descending' : 'Sort Ascending'}
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className="flex justify-center">
                <button className="btn btn-primary btn-outline normal-case text-base">More Services</button>
            </div>
        </section>
    );
};

export default Services;