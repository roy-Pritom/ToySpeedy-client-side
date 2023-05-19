
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { FaHeart } from "react-icons/fa";


const GalleryCard = ({car}) => {
    const {image,newPrice,toyName,oldPrice,rating}=car || {}

    // const han=()=>{
    //  document.getElementById('t').style.color='red';

    // }
  
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 element ">
        <div className="relative">
          <img
            className="w-full h-56 object-cover"
            src={image}
            id='img'
            alt="Card"
          />
        
          <div className="absolute top-2 right-2">
            <span className="px-2 py-1 bg-blue-500 text-white rounded-full text-xs font-semibold">
              New
            </span>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">{toyName}</div>
          <p className=" text-base text-white">
          Our toy cars are made from durable and child-safe materials such as high-quality plastic ensuring long-lasting playtime fun.
          </p>
        </div>
<div className="flex justify-center items-center my-2 text-white ">
<p className='px-6 line-through '>Price : ${oldPrice}</p>
<p className='px-6  '>Price : ${newPrice}</p>
    </div>      
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="">
            <div className="flex items-center ">
            <Rating
                            style={{ maxWidth: 120 }}
                            value={Math.round(rating || 0)} readOnly />
                        <span className='ms-1 text-white'> {rating}</span>
            </div>
          </div>
          <button className="">
          <FaHeart className='text-red-700' ></FaHeart>
       
          </button>
        </div>
      </div>

    );
};

export default GalleryCard;