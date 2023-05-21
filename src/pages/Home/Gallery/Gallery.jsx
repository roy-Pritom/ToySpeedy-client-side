import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    useEffect(()=>{
        AOS.init();
    },[])
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://assignment-11-server-site-teal.vercel.app/carGallery')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCars(data)
            })
    }, [])
    return (
        <div className="mt-20 mb-20">
            <h2 className="font-bold text-center text-2xl md:text-4xl">Our Toys Gallery</h2>
            <p className="text-center mt-3 text-base md:text-lg">Experience the thrill of miniature speed with our collection of toy cars</p>
            <div  data-aos="zoom-in-up" className=" gallery grid grid-cols-1 md:grid-cols-3 gap-9 mt-12 ">
                {
                    cars?.map(car => <GalleryCard
                        key={car._id}
                        car={car}
                    ></GalleryCard>)
                }
            </div>
        </div>
    );
};

export default Gallery;