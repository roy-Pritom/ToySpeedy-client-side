import { Link } from "react-router-dom";



const MyToysRow = ({ toy, handleDelete }) => {
    const { image, toyName, price, _id } = toy || {}


   
  
    

    return (
        <tr>
            <th>
                <label>
                    <button className="btn btn-circle btn-sm " onClick={() => handleDelete(_id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>

                <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>

            <td>{toyName}</td>
            <td>${price}</td>
            <th>
    
                <Link to={`/update/${_id}`}>
                <button className="btn gap-3">
                    Update
                    <img src="https://cdn-icons-png.flaticon.com/512/5278/5278658.png" className="w-6 h-6" alt="" />
                </button>

                </Link>
               


            </th>

        </tr>
    );
};

export default MyToysRow;