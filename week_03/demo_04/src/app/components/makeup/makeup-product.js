import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1, faStar, beatFade } from '@fortawesome/free-solid-svg-icons';

const MakeupProduct = ({className, product}) => {
  return (
    <div className={`${className} card`}>
      <img src={product.image_link ? product.image_link : 'image.pnghttps://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg'} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
      <div className="card-body">
        <span><FontAwesomeIcon icon={faMoneyBill1} beatFade /> {product.price}</span>
        <span><FontAwesomeIcon icon={faStar} beatFade /> {product.rating}</span>
      </div>
    </div>
  )
};

export default MakeupProduct;