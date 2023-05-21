import { useContext, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import useTitle from "../../hook/useTitle";



const Register = () => {
  useTitle('Register')
    const {createUser,logOut,googleLogin}=useContext(authContext)
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
        // console.log(photoUrl);
        if (password.length < 6) {
          setError('Password should be 6 character');
          return;
      }
      else if (!/(?=.*[0-9])/.test(password)) {
          setError('Password should have at least one number');
          return;
      }
      else if (!/(?=.*[A-Z])/.test(password)) {
          setError('Password should have at least one upperCase');
          return;
      }
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

    const loginWithGoogle = () => {
      setSuccess('')
      setError('')
      googleLogin()
          .then(result => {
              const loggedUser = result.user;
              console.log(loggedUser);
              setSuccess('Successfully login')
              navigate('/')


          })
          .catch(error => {
              setError(error.message)
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
           <input type="text" name='name' placeholder="Enter Your Name" required className="input input-bordered" />
         </div>
      <div className="form-control">
           <label className="label">
             <span className="label-text">Email</span>
           </label>
           <input type="email" name='email' placeholder="email" required className="input input-bordered" />
         </div>
      <div className="form-control">
           <label className="label">
             <span className="label-text">PhotoUrl</span>
           </label>
           <input type="text" name='photo' placeholder="photoUrl"   className="input input-bordered" />
         </div>
         <div className="form-control">
           <label className="label">
             <span className="label-text">Password</span>
           </label>
           <input type="password" name='password' placeholder="password" required className="input input-bordered" />
           
         </div>
         <div className="form-control mt-6">
              <input type="submit" className='btn btn-secondary' value="SignUp" />
         </div>
      </form>
      <div className="">
       <p  className='text-center'><small>Already have an account? Please <Link to='/login' className='text-orange-600 ml-1'>Login</Link></small></p>
      </div>
       </div>
       <div className="flex justify-center px-8   mt-4 ">
                <button type="button" className="  w-full btn  w-75 d-flex gap-4 justify-center items-center" onClick={loginWithGoogle}>
                    <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png?w=740&t=st=1683030098~exp=1683030698~hmac=a172fbf96bc191335562a518ae58b3fe0d5807cd0aa88a9835adf20c6d03047b" style={{ width: "40px", height: "40px" }} alt="" />
                    Continue with Google

                </button>

            </div>
       <div className="text-center mb-3 pb-2 mt-4">
           
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