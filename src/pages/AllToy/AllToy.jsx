
import ToysRow from "./ToysRow";
import { useEffect, useState } from "react";


const AllToy = () => {
    const [toys,setToys]=useState([]);
    const [search,setSearch]=useState('');
    useEffect(()=>{
        fetch('http://localhost:5000/allToys')
        .then(res=>res.json())
        .then(data=>{
            setToys(data)
        })
    },[])

    const handleSearch=()=>{
        fetch(`http://localhost:5000/toySearch/${search}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            setToys(data)
            })


    }
    
    
    // console.log(data);
    return (
        <div className="mx-12">
            <h1 className="text-center font-bold text-5xl mt-10 mb-12 text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text ">Our All Products</h1>
            {/* search */}
          <div className="flex justify-center mb-8">
          <div className="form-control ">
                <div className="input-group">
                    <input type="text" onChange={(event)=>setSearch(event.target.value)} placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square" onClick={handleSearch} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
          </div>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
               
                    <thead>
                        <tr>
                           
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
                            toys?.map(item => <ToysRow
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