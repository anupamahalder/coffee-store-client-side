import PropTypes from 'prop-types';
import {IoEyeSharp} from 'react-icons/io5';
import {BsFillPencilFill} from 'react-icons/bs';
import {RxCross1} from 'react-icons/rx';
const CoffeeCard = ({coffee}) => {
    // destructure 
    const {_id, name, supplier, category, availableQuantity, taste, details, photo} = coffee;
    return (
        <div className='bg-[#f9eae0] rounded-xl mb-10'>
            <div className="card card-side shadow-xl">
            <figure className='w-[300px] h-[250px] object-cover rounded-lg object-center m-4'><img src={photo} alt="coffee"/></figure>
            <div className="w-[70%] my-auto text-black flex gap-2 items-center justify-around pr-5">
                <div className='space-y-6'>
                    <h2 className=""><span className='font-bold'>Name:</span> {name}</h2>
                    <p><span className='font-bold'>Quantity:</span> {availableQuantity}</p>
                    <p><span className='font-bold'>Supplier:</span> {supplier}</p>
                </div>
                <div className="btn-group btn-group-vertical space-y-2">
                    <button className="btn bg-blue-600 text-white text-xl hover:bg-blue-800"><IoEyeSharp></IoEyeSharp></button>
                    <button className="btn bg-black text-xl hover:text-black text-white"><BsFillPencilFill></BsFillPencilFill></button>
                    <button className="btn text-red-700 text-xl hover:bg-red-700 hover:text-white"><RxCross1></RxCross1></button>
                </div>
            </div>
            </div>
        </div>
    );
};

// Adding prop types 
CoffeeCard.propTypes ={
    coffee: PropTypes.object.isRequired,
}
export default CoffeeCard;