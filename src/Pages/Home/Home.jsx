import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../../components/CoffeeCard/CoffeeCard";
import {AiFillHeart} from 'react-icons/ai';
const Home = () => {
    const coffeeData = useLoaderData();
    return (
        <div className="max-w-[1300px] min-h-screen">
            <img className="h-[80vh] brightness-50 object-cover object-center w-full" src="https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="absolute flex gap-1 top-1/2 left-80 text-center font-semibold text-4xl text-white italic">
            <h1>Sip Our Coffee to Make Your Face Happy!</h1> 
            <p><AiFillHeart className="text-white text-4xl"></AiFillHeart></p>
            </div>
            <h1 className="mb-10 mt-20 text-3xl font-bold text-[#59341A] uppercase text-center">Our Coffee Collection</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mx-auto p-4">
                {
                    // loop through the coffeedata 
                    coffeeData.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;