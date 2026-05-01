import './style.css';

const Visual = () => {
    return (
        <section className="main-visual">
            <div className="hero-slide">
                <h2 className="bg-title left">CROI</h2>
                <h2 className="bg-title right">SSANG</h2>

                <div className="text-left">
                    <span className="eyebrow">딸기가 가장 맛있는 계절</span>
                </div>

                <div className="text-right">
                    <p>바삭한 크루아상에 부드러운 생크림을 듬뿍 채우고</p>
                    <p>상큼한 딸기를 넣은</p>

                    <div className="visual-box">
                        <p>딸기 메뉴 보러가기</p>
                        <p>→</p>
                    </div>
                </div>

                <div className="product-image">
                    <img src="/images/visual1.png" alt="딸기 크루아상" />
                </div>
            </div>
        </section>
    );
};

export default Visual;
