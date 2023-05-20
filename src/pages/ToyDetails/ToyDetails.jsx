import { useLoaderData } from "react-router-dom";


import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ToyDetails = () => {
    const toyData=useLoaderData();
    console.log(toyData);
    const {image,name,toyName,price,quantity,email,description,rating}=toyData || {};
    return (
        <div className="bg-red-50 p-12 flex justify-center ">
            <div className="bg-blue-100  shadow-2xl py-12 px-7 w-[1000px] border">
          
          <div className="flex justify-center">
          <img src={image} className="w-96 rounded-lg" alt="" />
          </div>
          <h4 className="text-center font-bold my-3 text-4xl">{toyName}</h4>
 
          <div className="px-44   border  py-10 mt-2">
             <p className=""><span className="font-bold">Description</span> : {description}</p>
             <p className="my-2"><span className="font-bold ">Seller Name</span> : {name}</p>
             <p><span className="font-bold">Seller Email</span> : {email}</p>
             <p className="my-2"><span className="font-bold">Price</span> : ${price}</p>
            <div className="flex justify-between">
            <p><span className="font-bold">Quantity</span> : {quantity}</p>
             <div className="flex items-center ">
             <Rating
                             style={{ maxWidth: 120 }}
                             value={Math.round(rating || 0)} readOnly />
                         <span className='ms-1 '> {rating}</span>
             </div>
            </div>
          </div>
            
         </div>
        </div>
    );
};

export default ToyDetails;