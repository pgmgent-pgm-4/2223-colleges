import MakeupProduct from "./makeup-product";

const MakeupList = ({data}) => {
  return (
    <div className={`container`}>
      <div className={`row`}>
        {data && data.map((product => 
          <MakeupProduct className={`col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3`} key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
};

export default MakeupList;