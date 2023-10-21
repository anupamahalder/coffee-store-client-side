import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            Swal.fire({
                title: 'success',
                text: 'You have successfully logged in',
                icon: 'success',
                confirmButtonText: 'Ok'
            }) 
            // we will update user table with last sign in time 
            const user ={
                email, 
                lastLoggedAt: result?.user?.metadata?.lastSignInTime
            }
            // update last last looged at in the database 
            // steps 1. request to update from client side 
            // 2. go to backend and take response 
            // 3. backend will create an api to update to database and send resposne to client
            fetch('https://coffee-store-server-side-4e2s3g6ma-anupama-halders-projects.vercel.app/user',{
                method: 'PATCH',
                headers:{
                    'content-Type':'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            form.reset();
            navigate('/');
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className="hero h-[90vh] ">
                <div className="hero-content flex-col">
                    <div className="text-center">
                    <h1 className="text-5xl font-bold text-[#59341A]">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} 
                     className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button
                        className="btn bg-[#6c4021] hover:text-[#59341A] hover:bg-gray-300 text-white">Login</button>
                        <button className="btn mt-4 text-[#59341A] hover:bg-gray-300 bg-[#f8c2ae]">Login With Google</button>
                        </div>
                    </form>
                    </div>
                    <h1>Donot have account? <Link className="text-[#59341A] font-semibold" to='/register'>Register</Link></h1>
                </div>
                </div>
        </div>
    );
};

export default Login;