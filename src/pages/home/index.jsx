import Footer from '../../components/common/footer/Footer';
import Header from '../../components/common/header/Header';
import Content1 from '../../components/home/con1/Content1';
import Content2 from '../../components/home/con2/Content2';
import Content3 from '../../components/home/con3/Content3';
import Visual from '../../components/home/visual/Visual';
import './style.css';

const Home = () => {
    return (
        <>
            <Header />
            <Visual />
            <Content1 />
            <Content2 />
            <Content3 />
            <Footer />
        </>
    );
};
export default Home;
