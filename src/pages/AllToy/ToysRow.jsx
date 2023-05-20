import { Link } from "react-router-dom";


const ToysRow = ({item}) => {
    const {_id,image,name,toyName,subCategory,price,quantity}=item || {};

    return (
       
             <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-32 h-32">
                                            <img src={image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    {/* <div>
                                        <div className="font-bold">{toyName}</div>
                                        
                                    </div> */}
                                </div>
                            </td>
                            <td>
                               {toyName}
                            </td>
                            <td>
                               {name}
                            </td>
                            <td>
                                {subCategory}
                            </td>
                            <td>
                                {price}
                            </td>
                            <td>
                                {quantity}
                            </td>
                            <th>
                                <Link to={`/details/${_id}`}>
                                <button className="btn btn-secondary hover:bg-orange-700">View details</button>
                                </Link>
                            </th>
                        </tr>
       
    );
};

export default ToysRow;