import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../AuthProvider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";


const Header = () => {
  const { user, logOut } = useContext(authContext)
  const navLinks = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/allToys'>All Toys</Link></li>
    {user && <li><Link to='/myToys'>My Toys</Link></li>}
    {user && <li><Link to='/addToy'>Add A Toy</Link></li>}
    <li><Link to='/blog'>Blogs</Link></li>


  </>
  return (

    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

            {navLinks}

          </ul>
        </div>
   <div className="flex items-center">
   <img className="MD:h-16 MD:w-20 w-8 h-8" src="https://img.freepik.com/free-vector/sticker-template-with-car-many-balloons_1308-61699.jpg?w=740&t=st=1684649198~exp=1684649798~hmac=196b1b02179d431fbdc5e61a42e3bab87a503088721638fe4f1d47fd9dc0741d" alt="" />
        <a className="btn btn-ghost normal-case text-xl">ToySpeedy</a>
   </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">

        {
          user ? <div className="flex gap-3 items-center">
            <div className="">
              <img id="title" src={user?.photoURL} className="w-10 h-8 rounded-full" alt="" />
              <ReactTooltip anchorId='title' place="bottom" content={user?.displayName}></ReactTooltip>
            </div>
            <button className="btn btn-active btn-secondary" onClick={logOut}> logout</button>
          </div>
            :
            <button className="btn btn-active btn-secondary"><Link to='/login'>Login</Link></button>


        }
      </div>
    </div>

  );
};

export default Header;