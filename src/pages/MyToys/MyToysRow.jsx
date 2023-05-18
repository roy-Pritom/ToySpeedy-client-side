


const MyToysRow = ({ toy, handleDelete }) => {
    const { image, toyName, price, _id } = toy || {}


    const handleSubmit=(event)=>{
        event.preventDefault();
        // console.log(id);
        const form = event.target;
        const price = form.price.value
        const quantity = form.quantity.value
        const details = form.details.value
        const user={price,quantity,details}
        // console.log(price,quantity,details);
        fetch(`http://localhost:5000/myToys?${_id}`,{
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))


        
    }
  
    

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
                {/* The button to open modal */}

                <label htmlFor="my-modal-3" className="btn gap-3">
                    Update
                    <img src="https://cdn-icons-png.flaticon.com/512/5278/5278658.png" className="w-6 h-6" alt="" />
                </label>

                {/* modal */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <form className="modal-box relative grid grid-cols-1" onSubmit={handleSubmit}>
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="price" className="input input-bordered" />
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" placeholder="quantity" className="input input-bordered" />
                            </label>
                        </div>
{/* id */}
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={id}  className="input input-bordered" />
                            </label>
                        </div> */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                            <textarea placeholder="details" name="details" className="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>

                               
                            </label>
                        </div>
                 
                    <div className="flex justify-center mt-5">
                 <input type="submit" value="update" className="btn btn-secondary w-full" />
                 {/* <button>lol</button> */}

                    </div>
                    </form>
                </div>


            </th>

        </tr>
    );
};

export default MyToysRow;