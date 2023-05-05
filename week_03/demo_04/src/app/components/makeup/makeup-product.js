

const MakeupProduct = ({className, product}) => {
  return (
    <div className={`${className} card`}>
      <img src={product.image_link ? product.image_link : 'image.pnghttps://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg'} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
};

export default MakeupProduct;