import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = e =>{
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
        const coffeeData = {name, supplier, category, availableQuantity, taste, details, photo};
        console.log(coffeeData);
        // send data to server 
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(coffeeData)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            // receive data from server 
            if(data.insertedId){
                Swal.fire({
                    title: 'success',
                    text: 'You have sucessfully added data',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })                  
                form.reset();
            }
        })
    }
    return (
        <div className='min-h-screen'>
            <form onSubmit={handleAddCoffee}
             className="bg-[#F4F3F0] w-[600px] mx-auto p-10 my-16">
                <h1 className="text-2xl font-bold text-amber-900 py-3 uppercase text-center">Add a coffee</h1>
                <div className=" flex gap-6 justify-center">
                <div className="text-left text-gray-600">
                    <label htmlFor="name" className="text-left text-black">Name </label> <br />
                    <input className="hover:outline rounded-sm py-1 mb-2" type="text" name="name" required />
                    <label htmlFor="supplier" className="text-left text-black">Supplier </label> <br />
                    <input className="hover:outline rounded-sm py-1 mb-2" type="text" name="supplier" required />
                    <label htmlFor="category" className="text-left text-black">Category </label> <br />
                    <input className="hover:outline rounded-sm py-1 mb-2" type="text" name="category"  />
                </div>
                <div className="text-left text-gray-600">
                    <label htmlFor="chef" className="text-left text-black">Available Quantity </label> <br />
                    <input className="hover:outline rounded-sm py-1 mb-2" type="text" name="availableQuantity"  />
                    <label htmlFor="taste" className="text-left text-black">Taste </label> <br />
                    <input className="hover:outline rounded-sm py-1 mb-2" type="text" name="taste" required />
                    <label htmlFor="details" className="text-left text-black">Details </label> <br />
                    <input className="hover:outline rounded-sm py-1 mb-2" type="text" name="details"  />
                </div>
            </div>
            <div className="text-left text-gray-600">
                <label htmlFor="photo" className="text-left text-black">Photo </label> <br />
                <input className="hover:outline rounded-sm w-[96%] py-1" type="text" name="photo" />
                <button className="rounded-sm w-[96%] hover:outline outline-black bg-amber-800 mt-4 py-2 font-semibold text-white" type="submit">Add Coffee</button>
            </div>
            </form>
        </div>
    );
};

export default AddCoffee;