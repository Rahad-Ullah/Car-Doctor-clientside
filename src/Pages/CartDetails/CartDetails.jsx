import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import CartItem from "./CartItem";

const CartDetails = () => {
    const {user} = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    
    const url = `http://localhost:5000/orders?email=${user?.email}`
    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res => {
            setOrders(res.data)
        })
    }
    ,[url])
    
    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex justify-between items-center gap-8 my-8 mb-12">
                <h2 className="text-3xl font-semibold">Cart Details</h2>
                <h3 className="text-xl font-semibold">Items: {orders.length}</h3>
            </div>
            <div className="flex flex-col gap-7">
                {
                    orders.map(order => <CartItem
                        key={order._id}
                        order={order}
                        orders={orders}
                        setOrders={setOrders}
                        ></CartItem>)
                }
            </div>
        </div>
    );
};

export default CartDetails;