const ProductContentItem = ({ prodata, onSort }) => {
    const { id, name, image, price, category, priceText } = prodata;
    return (
        <li className="menu-card">
            {/* <li className={isShow ? 'on' : '' }onClick={()=>onShow(name)}> */}
            <img src={image} alt={name} />
            <div className="btm-box">
                <p>{priceText}</p>
                <div className="btn">
                    <p>{name}</p>
                    <p>→</p>
                </div>
            </div>
        </li>
    );
};

export default ProductContentItem;
