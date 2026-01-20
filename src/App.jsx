import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Event from './pages/event';
import Brand from './pages/brand';
import Search from './pages/search';
import Product from './pages/product';
import Membership from './pages/membership';

const App = () => {
    return (
        <BrowserRouter>
            <div id="wrap">
                <Routes>
                    {/* 화면 */}
                    <Route path="/" element={<Home />} />
                    <Route path="/brand" element={<Brand />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/event" element={<Event />} />
                    <Route path="/membership" element={<Membership />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
