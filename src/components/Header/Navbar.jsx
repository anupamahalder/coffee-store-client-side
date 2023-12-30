import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="py-2 px-10 shadow-lg flex justify-between items-center">
            <div className="flex items-center ">
                <img className="h-[70px]" src="./logo.png" alt="" />
                <h1 className="text-3xl font-bold text-[#59341A] italic">Coffee Store</h1>
            </div>
            <div className=" flex gap-10 text-[#59341A] font-semibold text-xl ">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/addcoffee'>Add Coffee</NavLink>
                <NavLink to='/user'>User Details</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;