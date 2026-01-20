import './style.css';

const Content1 = () => {
    return (
        <>
            <section className="season">
                <div className="inner">
                    <h2>시즌 한정</h2>
                    <ul className="season-menu">
                        <li className="season-card">
                            <img src="/images/season-visual1.png" alt="스트로베리 퀸" />

                            <div className="btn">
                                <p>스트로베리 퀸</p>
                                <p>→</p>
                            </div>
                        </li>
                        <li className="season-card">
                            <img src="/images/season-visual2.png" alt="딸기 생크림 크라상" />

                            <div className="btn">
                                <p>딸기 생크림 크라상</p>
                                <p>→</p>
                            </div>
                        </li>
                        <li className="season-card">
                            <img src="/images/season-visual3.png" alt="딸기 피스타치오 패스트리" />

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
