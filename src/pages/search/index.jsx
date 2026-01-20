import { useState } from 'react';
import Footer from '../../components/common/footer/Footer';
import Header from '../../components/common/header/Header';

import SearchContent from '../../components/search/searchCon/SearchContent';
import mapData from '../../assets/api/mapData';

const Search = () => {
    const [map, setMap] = useState(mapData);

    const onSearch = (city) => {
        const newData = mapData.filter((mpdata) =>
            mpdata.name.toLowerCase().includes(city.toLowerCase())
        );
        setMap(newData);
    };

    return (
        <>
            <Header />
            <section className="search-box">
                <div className="inner">
                    <SearchContent map={map} onSearch={onSearch} />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Search;
