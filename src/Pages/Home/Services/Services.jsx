// import { useEffect, useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
    // const [services, setServices] = useState([])

    // useEffect(() => {
    //     fetch('https://car-doctor-serverside.vercel.app/services')
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // } ,[])

    const services = useServices()      //? custom hook
    
    return (
        <section>
            <div className="text-center">
                <h4 className="text-xl text-primary font-bold mb-5">Service</h4>
                <h2 className="text-4xl text-secondary font-bold">Our Service Area</h2>
                <p className="py-5 text-light-dark max-w-lg mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.</p>
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