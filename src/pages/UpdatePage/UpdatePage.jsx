import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hook/useTitle";

const UpdatePage = () => {
    useTitle("UpdatePage")
    const toy = useLoaderData()
    const navigate = useNavigate()
    // console.log(toy);
    const { _id } = toy || {};

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = data => {
        // console.log(data);
        fetch(`https://assignment-11-server-site-teal.vercel.app/myToys/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(item => {
                if (item.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/myToys')
                }
            })

    }



    return (
        <div className=" mb-12 mt-10 ">
            <h1 className="text-center text-4xl font-bold mb-8">Update Your Toys</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="px-5 py-5 border bg-red-100 shadow-lg w-[450px] h-[500px] rounded-lg mx-auto">
                {errors.exampleRequired && <span>This field is required</span>}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 gap-10">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">

                                <input className="input input-bordered w-80 "

                                    {...register("price",{ required: true })}
                                    placeholder="price"
                                    type="text"


                                />



                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <label className="input-group">

                                <input className="input input-bordered w-80"

                                    {...register("quantity",{ required: true })}
                                    placeholder="quantity"
                                    type="text"


                                />



                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">

                                <input className="input input-bordered w-80"

                                    {...register("description",{ required: true })}
                                    placeholder="details"
                                    type="text"


                                />



                            </label>
                        </div>

                    </div>
                </div>
                <div className="flex justify-center mt-7">

                    <button className="btn btn-secondary" >
                        <input className="btn btn-secondary" value="Update" type="submit" />

                    </button>
                </div>
            </form>

        </div>
    );
};

export default UpdatePage;