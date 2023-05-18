import { useContext, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";


const Register = () => {
    const {createUser,logOut}=useContext(authContext)
    const [success,setSuccess]=useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate()

    const handleSignUp=(event)=>{
        setSuccess('')
        setError('')
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const password=form.password.value;
        const email=form.email.value
        const photoUrl=form.photo.value
        console.log(photoUrl);
        createUser(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            setSuccess('successfully register')
            form.reset();
            updateUser(loggedUser,name,photoUrl)

            logOut();
            navigate('/login')


        })
  .catch(error=>{
    setError(error.message)

  })

    }

    const updateUser = (currentUser,name,photoURL) => {
        updateProfile(currentUser, {
            displayName: name, photoURL: photoURL
        })
            
    }

    return (
        <div>
        <div className="hero mt-11">
   <div className="hero-content flex-col lg:flex-row gap-10 items-center">
     <div className="w-1/2">
       <img src='https://media.istockphoto.com/id/497347644/photo/hand-pressing-register-now.jpg?b=1&s=170667a&w=0&k=20&c=ZV58v5dckr5lEbp-D2ke7PxpkMiR-G6x_MvgBTm-2Hs=' alt="" />
     </div>
     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
       <div className="card-body">
           <h2 className='text-4xl font-bold text-center'>Please SignUp!</h2>
      <form onSubmit={handleSignUp}>
      <div className="form-control">
           <label className="label">
             <span className="label-text">Name</span>
           </label>
           <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" />
         </div>
      <div className="form-control">
           <label className="label">
             <span className="label-text">Email</span>
           </label>
           <input type="email" name='email' placeholder="email" className="input input-bordered" />
         </div>
      <div className="form-control">
           <label className="label">
             <span className="label-text">PhotoUrl</span>
           </label>
           <input type="text" name='photo' placeholder="photoUrl"  className="input input-bordered" />
         </div>
         <div className="form-control">
           <label className="label">
             <span className="label-text">Password</span>
           </label>
           <input type="text" name='password' placeholder="password" className="input input-bordered" />
           
         </div>
         <div className="form-control mt-6">
              <input type="submit" className='btn btn-secondary' value="SignUp" />
         </div>
      </form>
      <div className="">
       <p  className='text-center'><small>Already have an account? Please <Link to='/login' className='text-orange-600 ml-1'>Login</Link></small></p>
      </div>
       </div>
       <div className="text-center mb-3 pb-2">
           
           <p className='text-green-600'>{success}</p>
           <p className='text-red-600'>{error}</p>
       </div>
     </div>
   </div>
 </div>
   </div>
    );
};

export default Register;