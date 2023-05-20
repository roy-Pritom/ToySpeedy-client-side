
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useContext } from 'react';

import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';
import { authContext } from '../../../AuthProvider/AuthProvider';


const SubCategoryCard = ({car}) => {
  const {user}=useContext(authContext)
    const {_id,image,toyName,price,rating}=car || {};

    const handleDetails=()=>{
      
       {
        if(!user)
        {
          Swal.fire({
            title: 'Warning!',
            text: 'You have to log in first to view details',
            icon: 'warning',
            confirmButtonText: 'Ok'
          })
        
      }
       }
    }
    return (
        <div className="card card-side shadow-xl p-5 bg-gradient-to-r from-purple-600 to-pink-200 ">
        <figure><img src={image} className="md:w-72 md:h-48 rounded " alt="Movie"/></figure>
        <div className="divider divider-horizontal"></div>
        <div>
          <h2 className="text-lg md:text-3xl font-bold">{toyName}</h2>
          <p className="mt-4 mb-3 text-base md:text-lg font-semibold ">Price : ${price}</p>
          <div className="card-actions ">
          <Link to={`/details/${_id}`}>
                                <button onClick={handleDetails} className="btn btn-primary hover:bg-orange-700">View details</button>
                                </Link>
          </div>
          <div className="flex items-center mt-4 ">
            <Rating
                            style={{ maxWidth: 120 }}
                            value={Math.round(rating || 0)} readOnly />
                        <span className='ms-1 text-white'> {rating}</span>
            </div>
        </div>
      </div>
    );
};

export default SubCategoryCard;