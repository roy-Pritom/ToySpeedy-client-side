
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'


const AddToy = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = toyCarData => {
        console.log(toyCarData);
        fetch('http://localhost:5000/postToy',{
            method:"POST",
            headers:{
               'content-type':'application/json'
            },
            body:JSON.stringify(toyCarData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId)
            {
                Swal.fire({
                    title: 'success',
                    text: 'add toy successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (

        <div className="bg-blue-200 mx-auto w-full md:w-7/12 px-10 py-8 rounded-lg my-8">
            <h2 className="text-center font-bold  mb-8 text-5xl">Add Toy</h2>
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <label className="input-group">
                                <span>Name</span>
                                <input className="input input-bordered w-full"

                                    {...register("name")}
                                    placeholder="user name"
                                    type="text"

                                />



                            </label>
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <label className="input-group">
                                <span>Email</span>
                                <input className="input input-bordered w-full"

                                    {...register("email", { required: true })}
                                    placeholder="email" type="email"


                                />



                            </label>
                        </div>



                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <label className="input-group">
                                <span>SubCategory</span>
                                <select {...register("subCategory")} className="input input-bordered w-full">
                                    <option value="Engineering">engineering</option>
                                    <option value="Editor">Editor</option>
                                    <option value="writer">Writer</option>
                                </select>
                            </label>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <label className="input-group">
                                <span>Toy</span>
                                <input className="input input-bordered w-full"

                                    {...register("toyName", { required: true })}
                                    placeholder="Enter Toy Name"


                                />



                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <label className="input-group">
                                <span>Url</span>
                                <input className="input input-bordered w-full"

                                    {...register("image")}
                                    placeholder="photo url"
                                    type="url"
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <span>Price</span>
                                <input className="input input-bordered w-full"

                                    {...register("price")}
                                    placeholder="price"
                                    type="number"
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratting</span>
                            </label>
                            <label className="input-group">
                                <span>Ratting</span>
                                <input className="input input-bordered w-full"

                                    {...register("ratting")}
                                    placeholder="ratting"

                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <label className="input-group">
                                <span>Quantity</span>
                                <input className="input input-bordered w-full"

                                    {...register("quantity")}
                                    placeholder="quantity"

                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <span>Description</span>
                                <input className="input input-bordered w-full"

                                    {...register("description")}
                                    placeholder="description"

                                />
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center mt-7">

                        <button className="btn btn-secondary" >
                            <input className="submit-btn" value="Add Toy" type="submit" />

                        </button>
                    </div>
                </form>
            </div>

        </div>





    );
};

export default AddToy;