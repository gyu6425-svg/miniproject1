import { productHoverInfo } from '../../../assets/api/HoverInfoData';
import ImageHoverInfo from '../../common/ImageHoverInfo';

const ProductContentItem = ({ prodata, onSort }) => {
    const { id, name, image, price, category, priceText } = prodata;
    return (
        <li className="menu-card">
            {/* <li className={isShow ? 'on' : '' }onClick={()=>onShow(name)}> */}
            <div className="product-thumb">
                <img src={image} alt={name} />
                <ImageHoverInfo info={productHoverInfo[id]} variant="product" />
            </div>
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
