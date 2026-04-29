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

const Content2 = () => {
    return (
        <div className="signature">
            <div className="inner">
                <h2>SIGNATURE</h2>
                <div className="sign-con con1">
                    <div className="img-con">
                        <div className="sign-thumb">
                            <img src="/images/sign-image1.png" alt="마담 얼그레이 크림번" />
                            <HoverInfo />
                        </div>
                        <div className="img-btn">
                            <p>주문/선물하기</p>
                            <p>→</p>
                        </div>
                    </div>
                    <div className="sign-txt">
                        <h3>마담 얼그레이 크림번</h3>
                        <p>
                            생크림과 얼그레이 토핑을 더한 빵이 은은하게 어우러져 향긋한 홍차향을
                            느낄 수 있는 크림 번
                        </p>
                        <div className="btn">
                            <p>주변 매장 찾아보기</p>
                            <p>→</p>
                        </div>
                    </div>
                </div>
                <div className="sign-con con2">
                    <div className="sign-txt">
                        <h3>겹겹이 연유크림 데니쉬</h3>
                        <p>겹겹이 결이 살아있는 데니쉬에 달콤한 연유크림을 듬뿍 샌드한 간식</p>
                        <div className="btn">
                            <p>주변 매장 찾아보기</p>
                            <p>→</p>
                        </div>
                    </div>
                    <div className="img-con">
                        <div className="sign-thumb">
                            <img src="/images/sign-image2.png" alt="겹겹이 연유크림 데니쉬" />
                            <HoverInfo />
                        </div>
                        <div className="img-btn">
                            <p>주문/선물하기</p>
                            <p>→</p>
                        </div>
                    </div>
                </div>
                <div className="sign-con con3">
                    <div className="img-con">
                        <div className="sign-thumb">
                            <img src="/images/sign-image3.png" alt="사르르 고구마케이크 빵" />
                            <HoverInfo />
                        </div>
                        <div className="img-btn">
                            <p>주문/선물하기</p>
                            <p>→</p>
                        </div>
                    </div>
                    <div className="sign-txt">
                        <h3>사르르 고구마케이크 빵</h3>
                        <p>부드러운 크림과 고구마 필링이 듬쭉 들어있어 입안에서 사르르 녹는 빵</p>
                        <div className="btn">
                            <p>주변 매장 찾아보기</p>
                            <p>→</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content2;
