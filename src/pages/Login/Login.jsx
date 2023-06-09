import { useContext, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hook/useTitle";



const Login = () => {
    useTitle('Login')
    const { logIn,googleLogin } = useContext(authContext)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const location=useLocation();
    console.log(location);
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || '/'
    const handleLOgin = (event) => {   
        setSuccess('')
        setError('')
       
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('successfully login');
                form.reset();
                navigate(from,{replace:true})

            })
            .catch(error => {
                setError(error.message)

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
                navigate(from, { replace: true })


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
                        <img src='https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=2000' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h2 className='text-4xl font-bold text-center'>Please Login!</h2>
                            <form onSubmit={handleLOgin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" required className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className='btn btn-secondary' value="Login" />
                                </div>
                            </form>
                            <div className="">
                                <p className='text-center'><small>New to Car market? Please <Link to='/register' className='text-orange-600 ml-1'>SignUp</Link></small></p>
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

export default Login;