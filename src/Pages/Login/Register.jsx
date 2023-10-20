import { Link } from "react-router-dom";

const Register = () => {
    
    const handleRegister = e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    }
    return (
        <div>
            
            <div className="hero h-[90vh] ">
                <div className="hero-content flex-col">
                    <div className="text-center">
                    <h1 className="text-5xl font-bold text-[#59341A]">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister}
                    className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="email" name="name" placeholder="Your name" className="input input-bordered" required />
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-[#6c4021] hover:text-[#59341A] hover:bg-gray-300 text-white">Login</button>
                        <button className="btn mt-4 text-[#59341A] hover:bg-gray-300 bg-[#f8c2ae]">Login With Google</button>
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