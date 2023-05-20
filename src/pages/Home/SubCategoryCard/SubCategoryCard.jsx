
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const SubCategoryCard = ({car}) => {
    const {image,toyName,price,rating}=car || {};
    return (
        <div className="card card-side shadow-xl p-5 bg-gradient-to-r from-purple-600 to-pink-200 ">
        <figure><img src={image} className="md:w-72 md:h-48 rounded " alt="Movie"/></figure>
        <div className="divider divider-horizontal"></div>
        <div>
          <h2 className="text-lg md:text-3xl font-bold">{toyName}</h2>
          <p className="mt-4 mb-3 text-base md:text-lg font-semibold ">Price : ${price}</p>
          <div className="card-actions ">
            <button className="btn btn-primary">View Details</button>
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