const SearchContentItem = ({ map }) => {
    const { id, region, city, name, image, tel } = map;
    return (
        <li className="map-card">
            <img src={image} alt={name} />
            <div className="btm-box">
                <p>☎ {tel}</p>
                <p>{name}</p>
                <div className="btn">
                    <p>매장 알아보기</p>
                    <p>→</p>
                </div>
            </div>
        </li>
    );
};

export default SearchContentItem;
