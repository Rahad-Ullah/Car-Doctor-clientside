import { AiOutlineArrowRight } from 'react-icons/ai';
import PropTypes from 'prop-types'

const ServiceCard = ({service}) => {
    const {title, img, price} = service;

    return (
    <div className="card bg-base-100 p-6 border rounded-lg hover:border-primary cursor-pointer group">
        <figure className="">
            <img src={img} alt="" className="rounded-lg md:h-48 lg:h-40 xl:h-48 w-full"/>
        </figure>
        <div>
            <h2 className="card-title text-2xl font-bold text-[#444] my-5">{title}</h2>
            <div className="card-actions w-full flex justify-between items-center">
                <h3 className="text-xl font-semibold text-primary">Price: ${price}</h3>
                <button className="text-xl font-semibold text-primary transform group-hover:translate-x-3 transition"><AiOutlineArrowRight></AiOutlineArrowRight></button>
            </div>
        </div>
    </div>
    );
};


ServiceCard.propTypes = {
    service: PropTypes.object,
}

export default ServiceCard;