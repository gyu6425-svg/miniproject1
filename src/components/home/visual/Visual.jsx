import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import './style.css';
import 'swiper/css';
import 'swiper/css/pagination';

const Visual = () => {
    return (
        <section className="main-swiper">
            <Swiper loop={true} slidesPerView={1} className="swiper-inner">
                <SwiperSlide>
                    <div className="hero-slide">
                        {/* 왼쪽 큰 텍스트 */}
                        <h2 className="bg-title left">CROI</h2>

                        {/* 오른쪽 잘리는 텍스트 */}
                        <h2 className="bg-title right">SSANG</h2>

                        {/* 좌측 상단 문구 */}
                        <div className="text-left">
                            <span className="eyebrow">딸기가 가장 맛있는 계절</span>
                        </div>

                        {/* 우측 설명 */}
                        <div className="text-right">
                            <p>바삭한 크루아상에 부드러운 생크림을 듬뿍 채우고</p>
                            <p>상큼한 딸기를 넣은</p>

                            <div className="visual-box">
                                <p>딸기 메뉴 보러가기</p>
                                <p>→</p>
                            </div>
                        </div>

                        {/* 중앙 제품 이미지 */}
                        <div className="product-image">
                            <img src="/images/visual1.png" alt="딸기 크루아상" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero-slide">
                        {/* 왼쪽 큰 텍스트 */}
                        <h2 className="bg-title left">CROI</h2>

                        {/* 오른쪽 잘리는 텍스트 */}
                        <h2 className="bg-title right">SSANG</h2>

                        {/* 좌측 상단 문구 */}
                        <div className="text-left">
                            <span className="eyebrow">딸기가 가장 맛있는 계절</span>
                        </div>

                        {/* 우측 설명 */}
                        <div className="text-right">
                            <p>바삭한 크루아상에 부드러운 생크림을 듬뿍 채우고</p>
                            <p>상큼한 딸기를 넣은</p>
                            {/* <button className="btn">딸기 한정 메뉴 →</button> */}
                            <div className="visual-box">
                                <p>딸기 메뉴 보러가기</p>
                                <p>→</p>
                            </div>
                        </div>

                        {/* 중앙 제품 이미지 */}
                        <div className="product-image">
                            <img src="/images/visual1.png" alt="딸기 크루아상" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-slide">
                        {/* 왼쪽 큰 텍스트 */}
                        <h2 className="bg-title left">CROI</h2>

                        {/* 오른쪽 잘리는 텍스트 */}
                        <h2 className="bg-title right">SSANG</h2>

                        {/* 좌측 상단 문구 */}
                        <div className="text-left">
                            <span className="eyebrow">딸기가 가장 맛있는 계절</span>
                        </div>

                        {/* 우측 설명 */}
                        <div className="text-right">
                            <p>바삭한 크루아상에 부드러운 생크림을 듬뿍 채우고</p>
                            <p>상큼한 딸기를 넣은</p>
                            {/* <button className="btn">딸기 한정 메뉴 →</button> */}
                            <div className="visual-box">
                                <p>딸기 메뉴 보러가기</p>
                                <p>→</p>
                            </div>
                        </div>

                        {/* 중앙 제품 이미지 */}
                        <div className="product-image">
                            <img src="/images/visual1.png" alt="딸기 크루아상" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Visual;
