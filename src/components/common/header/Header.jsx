import { Link } from 'react-router-dom';
import Navi from './Navi';
import './style.css';

const Header = () => {
    return (
        <header id="header">
            <div className="inner">
                <h1>
                    <Link to="/">
                        <img src="/images/logo.png" alt="logo" />
                    </Link>
                </h1>
                {/* menu */}
                <Navi />
            </div>
        </header>
    );
};

export default Header;
