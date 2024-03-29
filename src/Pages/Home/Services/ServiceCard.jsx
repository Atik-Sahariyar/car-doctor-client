import PropTypes from 'prop-types'

const ServiceCard = ({service}) => {
    const { title, img, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                 <p className=' text-xl text-orange-500'>Price: {price}</p>
            </div>
        </div>
    );
};


ServiceCard.propTypes = {
    service: PropTypes.object
}
export default ServiceCard;