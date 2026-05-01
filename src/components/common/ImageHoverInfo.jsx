import defaultHoverInfo from '../../assets/api/HoverInfoData';

const ImageHoverInfo = ({ info = defaultHoverInfo, variant = 'home' }) => {
    const rootClass = variant === 'product' ? 'product-info' : 'image-hover-info';
    const descClass = variant === 'product' ? 'product-desc' : 'image-hover-desc';
    const detailClass = variant === 'product' ? 'product-detail' : 'image-hover-detail';
    const desc = info.desc || defaultHoverInfo.desc;
    const nutrition = info.nutrition || defaultHoverInfo.nutrition;
    const allergy = info.allergy || defaultHoverInfo.allergy;

    return (
        <div className={rootClass}>
            <p className={descClass}>
                {desc.map((line, index) => (
                    <span key={line}>
                        {line}
                        {index < desc.length - 1 && <br />}
                    </span>
                ))}
            </p>
            <div className={detailClass}>
                <strong>영양성분</strong>
                <dl>
                    <div>
                        <dt>총중량(g)</dt>
                        <dd>{nutrition.weight}</dd>
                    </div>
                    <div>
                        <dt>열량(kcal)</dt>
                        <dd>{nutrition.calories}</dd>
                    </div>
                </dl>
                <span></span>
                <strong>알레르기 정보</strong>
                <p>{allergy}</p>
            </div>
        </div>
    );
};

export default ImageHoverInfo;
