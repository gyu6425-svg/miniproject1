import { Link } from 'react-router-dom';

const Navi = () => {
    return (
        <nav className="nav">
            <ul className="gnb">
                <li>
                    <Link to="/Brand">브랜드</Link>
                </li>
                <li>
                    <Link to="/Product">제품</Link>
                </li>
                <li>
                    <Link to="/Event">이벤트</Link>
                </li>
                <li>
                    <Link to="/Menbership">멤버십</Link>
                </li>
                <li>
                    <Link to="/Search">매장 찾기</Link>
                </li>
            </ul>
            <p>
                <Link to="#">로그인/회원가입</Link>
            </p>
        </nav>
    );
};

export default Navi;
