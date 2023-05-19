import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";


const Gallery = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/carGallery')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCars(data)
            })
    }, [])
    return (
        <div className="mt-20 mb-20">
            <h2 className="font-bold text-center text-4xl">Our Toys Gallery</h2>
            <p className="text-center mt-3 text-lg">Experience the thrill of miniature speed with our collection of toy cars</p>
            <div className="gallery grid grid-cols-1 md:grid-cols-3 gap-9 mt-12 mx-auto w-[1200px]">
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