import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const CheckOut = () => {
    const loadedUser = useLoaderData()
    const {_id, title, img, price} = loadedUser;

    const {user} = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            customerName: name,
            email,
            date, 
            service: title,
            service_id: _id,
            img,
            price
        }
        
        // send order to server
        axios.post('http://localhost:5000/orders', order)
        .then((result) => {
            console.log(result.data)
            if(result.data.insertedId){
                alert('Order placed successfully')
            }
        }).catch((err) => {
            console.log(err)
        });
    }
    
    return (
    <div className='max-w-5xl mx-auto py-16'>
        <div className="px-8 md:px-28 py-16 bg-[#ff523b0d]">
        <h2 className="text-3xl text-center font-semibold mb-6 font-rancho text-[#374151]">Check Out</h2>
        <div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered"
                />
                </div>
                {/* Date */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Date</span>
                </label>
                <input
                    type="date"
                    name="date"
                    placeholder=""
                    className="input input-bordered"
                />
                </div>
                {/* Your Email */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                />
                </div>
                {/* Due Amount */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due Amount</span>
                    </label>
                    <input
                        type="number"
                        name="dueAmount" 
                        placeholder="Your Amount"
                        className="input input-bordered"
                    />
                </div>
                {/* Form Button */}
                <div className="form-control mt-6 md:col-span-2">
                <button className="btn btn-neutral bg-primary border-2 border-primary  text-white hover:bg-white hover:border-primary hover:text-primary text-base">Check Out</button>
                </div>
            </form>
        </div>
        </div>
    </div>
    );
};

export default CheckOut;