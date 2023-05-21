import { useContext, useEffect, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTitle";


const MyToys = () => {
    useTitle('MyToys')
    const { user } = useContext(authContext)
    // console.log(user);
    const [toys, setToys] = useState();
    useEffect(() => {
        fetch(`https://assignment-11-server-site-teal.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setToys(data)
            })
    }, [user])

    const handleDelete = (id) => {
        // sweet alert 2
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-site-teal.vercel.app/myToys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(myToysData => {
                        // console.log(myToysData);
                        if (myToysData.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(item => item._id !== id);
                            setToys(remaining)
                        }
                    })
            }
        })

    }
    const handleAscendingOrder=()=>{
        const sort=[...toys].sort((x,y)=>x.price-y.price)
        setToys(sort)
    }
    const handleDescendingOrder=()=>{
        const sort=[...toys].sort((x,y)=>y.price-x.price)
        setToys(sort)
    }

    return (
        <div className="mx-12 mt-14">
            <div className="btn-group flex justify-center mb-8">
                <button className="btn btn-active" onClick={handleAscendingOrder}>Ascending</button>
                <button className="btn" onClick={handleDescendingOrder}>Descending</button>

            </div>
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
                            toys ?
                                <>
                                    {
                                        toys?.map(toy => <MyToysRow
                                            key={toy._id}
                                            toy={toy}
                                            handleDelete={handleDelete}
                                        ></MyToysRow>)
                                    }
                                </>
                                :

                                <tr>
                                    <td>
                                        <button className="btn loading">loading</button>

                                    </td>
                                </tr>
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToys;