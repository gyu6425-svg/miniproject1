import { useState } from 'react';
import ProductContentItem from './ProductContentItem';
import './style.css';

const ProductContent1 = ({ proDuctData, onSort }) => {
    const onSelect = (e) => {
        e.preventDefault();
        const { value } = e.target;
        onSort(value);
    };
    return (
        <>
            <section className="product">
                <div className="inner">
                    <select onChange={onSelect}>
                        <option value="/"></option>
                        <option value="price">가격</option>
                    </select>
                    <ul className="menu">
                        {proDuctData.map((prodata) => (
                            <ProductContentItem
                                key={prodata.id}
                                prodata={prodata}
                                onSort={onSort}
                            />
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default ProductContent1;
