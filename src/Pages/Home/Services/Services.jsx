import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    console.log(services);
    return (
        <div className=" mt-5">
            <div>
                <h3 className=" text-3xl text-center text-orange-500">Services</h3>
                <h1 className=" text-5xl font-bold text-center">Our Service Area</h1>
                <p className="  text-center text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map( service => <ServiceCard key={service._id} service ={service}></ServiceCard>)
                }
                
            </div>
        </div>
    );
};

export default Services;