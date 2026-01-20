import { useState } from 'react';
import ProductMenuItem from './ProductMenuItem';
import './style.scss';

const ProductMenu = ({ proDuctMenuData, onShow }) => {
    const [] = useState();
    return (
        <ul className="menu-bar">
            {proDuctMenuData.map((menu) => (
                <ProductMenuItem key={menu.id} menu={menu} onShow={onShow} />
            ))}
        </ul>
    );
};

export default ProductMenu;
