import { useLoaderData } from "react-router-dom";
import ToysRow from "./ToysRow";


const AllToy = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className="mx-12">
            <h1 className="text-center font-bold text-5xl mt-10 mb-12 text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text ">Our All Products</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <th>Image</th>
                            <th>Toy-Name</th>
                            <th>Seller Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(item=><ToysRow
                            key={item._id}
                            item={item}
                            ></ToysRow>)
                        }
                       
                    
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default AllToy;