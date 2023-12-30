import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
const Register = () => {
    // access createUser from context 
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    // handle register 
    const handleRegister = e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then(res => {
            console.log(res.user);
            Swal.fire({
                title: 'success',
                text: 'You have successfully created account',
                icon: 'success',
                confirmButtonText: 'Ok'
            }) 
            const createdTime = res.user?.metadata?.creationTime;
            const user = {name, email, password, createdTime};
            // send user data to server
            fetch('http://localhost:5000/user',{
                method: 'POST',
                headers:{
                    'content-Type': 'application/json'
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
        .catch(err => {
            console.log(err.message);
        })
    }
    return (
        <div>
            
            <div className="hero h-[90vh] ">
                <div className="hero-content flex-col">
                    <div className="text-center">
                    <h1 className="text-5xl font-bold text-[#59341A]">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister}
                    className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[#6c4021] hover:text-[#59341A] hover:bg-gray-300 text-white">Register</button>
                        </div>
                    </form>
                    </div>
                    <h1>Already have account? <Link className="text-[#59341A] font-semibold" to='/login'>Login</Link></h1>
                </div>
                </div>
        </div>
    );
};

export default Register;