import Footer from '../../components/common/footer/Footer';
import Header from '../../components/common/header/Header';
import ProductContent1 from '../../components/product/productCon1/ProductContent1';
import ProductMenuData from '../../assets/api/ProductMenuData';
import ProductData from '../../assets/api/ProductData';

import './style.scss';
import { useState } from 'react';
import ProductMenu from '../../components/product/productMenu/ProductMenu';

const Product = () => {
    const [proDuctData, setProDuctData] = useState(ProductData);
    const [proDuctMenuData, setProDuctMenuData] = useState(ProductMenuData);

    const onShow = (category) => {
        /*
        alert(name);
        if (name === '스트로베리') {
            setProDuctData(ProductData);
        } else {
            const newData = ProductDatax.filter((prodata) => prodata.name.includes(name));
            setProDuctData(newData);
        }
        */

        const newData = ProductData.filter((prodata) => prodata.category.includes(category));
        setProDuctData(newData);

        setProDuctMenuData(
            proDuctMenuData.map((prodata) =>
                prodata.category === category
                    ? { ...prodata, isClass: true }
                    : { ...prodata, isClass: false }
            )
        );
    };
    const onSort = (value) => {
        const newData = [...proDuctData].sort((a, b) => (a[value] > b[value] ? -1 : 1));
        setProDuctData(newData);
    };

    return (
        <>
            <Header />
            <div className="menu-box">
                <div className="inner">
                    <ProductMenu proDuctMenuData={proDuctMenuData} onShow={onShow} />
                    <ProductContent1 proDuctData={proDuctData} onSort={onSort} />
                </div>
            </div>

            <hr />
            <Footer />
        </>
    );
};

export default Product;
