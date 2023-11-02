import axios from 'axios';
import { space } from 'postcss/lib/list';
import { useCallback, useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';
import Swal from 'sweetalert2'
import { AuthContext } from '../../providers/AuthProvider';


const CartItem = ({order, orders, setOrders}) => {
    const {_id, service, img, price, date,} = order;
    const {SetLoading} = useContext(AuthContext)

    // Delete Product
    const handleDelete = () =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/orders/${_id}`)
                .then(res => {
                    if(res.data.deletedCount){
                        const remaining = orders.filter(ord => ord._id !== _id)
                        setOrders(remaining)
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
            }
          })
    }

    // Approve Order Products
    const handleApprove = () =>{
        axios.patch(`http://localhost:5000/orders/${_id}`, {
            status: 'Approved'
        })
        .then(res => {
            console.log(res.data)
            const remaining = orders.filter(ord => ord._id !== _id)
            const updated = orders.find(ord => ord._id === _id)
            updated.status = 'Approved'
            const newOrders = [updated, ...remaining]
            setOrders(newOrders)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="flex gap-8 items-center">
            <button onClick={handleDelete} className="btn btn-sm btn-circle btn-neutral hover:btn-primary text-lg"><RxCross2></RxCross2></button>
            <div>
                <img src={img} className="w-28 h-28 rounded-lg"/>
            </div>
            <div className="flex flex-1 flex-col md:flex-row justify-between items-center gap-1 md:gap-8">
                <h2>{service}</h2>
                <h3>${price}</h3>
                <h3>{date}</h3>
                {
                    order?.status ? 
                    <span className='text-zinc-500 text-sm p-1 px-2 rounded-lg border'>{order?.status}</span>
                    : <button onClick={handleApprove} className="btn btn-sm md:btn-md btn-primary normal-case text-base">Pending</button>
                }
            </div>
        </div>
    );
};

export default CartItem;