const ProductContentItem = ({ prodata, onSort }) => {
    const { id, name, image, price, category, priceText } = prodata;
    return (
        <li className="menu-card">
            {/* <li className={isShow ? 'on' : '' }onClick={()=>onShow(name)}> */}
            <div className="product-thumb">
                <img src={image} alt={name} />
                <div className="product-info">
                    <p className="product-desc">
                        반짝이는 비즈로 감싼 부드러운 화이트시트에
                        <br />
                        상큼달콤한 딸기 꿀리를 샌드하고
                        <br />
                        신선한 생딸기를 가득 올린 생크림 맛집!
                        <br />
                        뚜레쥬르의 시그니처 케이크
                    </p>
                    <div className="product-detail">
                        <strong>영양성분</strong>
                        <dl>
                            <div>
                                <dt>총중량(g)</dt>
                                <dd>815</dd>
                            </div>
                            <div>
                                <dt>열량(kcal)</dt>
                                <dd>1780</dd>
                            </div>
                        </dl>
                        <span></span>
                        <strong>알레르기 정보</strong>
                        <p>계란,우유,대두,밀,돼지고기,아황산류 함유</p>
                    </div>
                </div>
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
