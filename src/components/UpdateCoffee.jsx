import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    // destructure 
    const {_id, name, supplier, category, availableQuantity, taste, details, photo} = coffee;
    const navigate = useNavigate();
    const handleUpdateCoffee = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const availableQuantity = form.availableQuantity.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;

        // create an object 
        const updatedCoffeeData = {name, supplier, category, availableQuantity, taste, details, photo};
        console.log(updatedCoffeeData);
        // send data to server 
        fetch(`https://coffee-store-server-side-4e2s3g6ma-anupama-halders-projects.vercel.app/coffee/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedCoffeeData)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            // receive data from server 
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success',
                    text: 'Updated sucessfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })                  
                form.reset();
                navigate('/');
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleUpdateCoffee}
             className="bg-[#F4F3F0] w-[600px] mx-auto p-10 my-10">
                <h1 className="text-2xl font-bold my-4 text-amber-900 py-2 text-center"><span className="uppercase ">Update coffee: </span>{name}</h1>
                <div className=" flex gap-6 justify-center">
                <div className="text-left text-gray-600">
                    <label htmlFor="name" className="text-left text-black">Name </label> <br />
                    <input className="hover:outline rounded-sm py-1 mb-2" type="text" name="name" defaultValue={name} required />
                    <label htmlFor="supplier" className="text-left text-black">Supplier </label> <br />
                    <input className="hover:outline rounded-sm py-1 mb-2" type="text" name="supplier" defaultValue={supplier} required />
                    <label htmlFor="category" className="text-left text-black">Category </label> <br />
                    <input className="hover:outline rounded-sm py-1 mb-2" type="text" name="category" defaultValue={category} />
                </div>
                <div className="text-left text-gray-600">
                    <label htmlFor="chef" className="text-left text-black">Available Quantity </label> <br />
                    <input className="hover:outline rounded-sm py-1 mb-2" type="text" name="availableQuantity" defaultValue={availableQuantity} />
                    <label htmlFor="taste" className="text-left text-black">Taste </label> <br />
                    <input className="hover:outline rounded-sm py-1 mb-2" type="text" name="taste" required defaultValue={taste}/>
                    <label htmlFor="details" className="text-left text-black">Details </label> <br />
                    <input className="hover:outline rounded-sm py-1 mb-2" type="text" name="details" defaultValue={details} />
                </div>
            </div>
            <div className="text-left text-gray-600">
                <label htmlFor="photo" className="text-left text-black">Photo </label> <br />
                <input className="hover:outline rounded-sm w-[96%] py-1" type="text" name="photo" defaultValue={photo}/>
                <button className="rounded-sm w-[96%] hover:outline outline-black bg-amber-800 mt-4 py-2 font-semibold text-white" type="submit">Update Coffee</button>
            </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;