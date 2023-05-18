import { useContext, useEffect, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import MyToysRow from "./MyToysRow";


const MyToys = () => {
    const {user}=useContext(authContext)
    // console.log(user);
const [toys,setToys]=useState();
useEffect(()=>{
    fetch(`http://localhost:5000/myToys/${user?.email}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setToys(data)
    })
},[user])

    return (
        <div className="mx-12 mt-14">
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Toy Name</th>
        <th>Price</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
    
    {
        toys?.map(toy=><MyToysRow
        key={toy._id}
        toy={toy}
        ></MyToysRow>)
    }
    
      
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default MyToys;