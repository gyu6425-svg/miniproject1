import './style.css';

const HoverInfo = () => (
    <div className="image-hover-info">
        <p className="image-hover-desc">
            반짝이는 비즈로 감싼 부드러운 화이트시트에
            <br />
            상큼달콤한 딸기 꿀리를 샌드하고
            <br />
            신선한 생딸기를 가득 올린 생크림 맛집!
            <br />
            뚜레쥬르의 시그니처 케이크
        </p>
        <div className="image-hover-detail">
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
);

const Content1 = () => {
    return (
        <>
            <section className="season">
                <div className="inner">
                    <h2>시즌 한정</h2>
                    <ul className="season-menu">
                        <li className="season-card">
                            <div className="season-thumb">
                                <img src="/images/season-visual1.png" alt="스트로베리 퀸" />
                                <HoverInfo />
                            </div>

                            <div className="btn">
                                <p>스트로베리 퀸</p>
                                <p>→</p>
                            </div>
                        </li>
                        <li className="season-card">
                            <div className="season-thumb">
                                <img src="/images/season-visual2.png" alt="딸기 생크림 크라상" />
                                <HoverInfo />
                            </div>

                            <div className="btn">
                                <p>딸기 생크림 크라상</p>
                                <p>→</p>
                            </div>
                        </li>
                        <li className="season-card">
                            <div className="season-thumb">
                                <img
                                    src="/images/season-visual3.png"
                                    alt="딸기 피스타치오 패스트리"
                                />
                                <HoverInfo />
                            </div>

                            <div className="btn">
                                <p>딸기 피스타치오 패스트리</p>
                                <p>→</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Content1;
