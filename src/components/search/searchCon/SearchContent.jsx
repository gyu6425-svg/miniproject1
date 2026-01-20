import { useState } from 'react';
import './stlye.scss';
import SearchContentItem from './SearchContentItem';

const SearchContent = ({ map, onSearch }) => {
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(text);
    };

    const onSelect = (e) => {
        e.preventDefault();
        const { value } = e.target;
        onSort(value);
    };

    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    };

    return (
        <>
            <form className="form" onSubmit={onSubmit}>
                <div className="search-box">
                    <div className="field">
                        <span className="label">지역</span>
                        <select onChange={onSelect}>
                            <option value="">전체</option>
                            <option value="서울">서울</option>
                            <option value="경기">경기</option>
                        </select>
                    </div>
                    <div className="field">
                        <span className="label">도시</span>
                        <select onChange={onSelect}>
                            <option value="">전체</option>
                            <option value="map">강남</option>
                            <option value="map">건대</option>
                            <option value="map">인계</option>
                        </select>
                    </div>
                    <input
                        type="text"
                        name="text"
                        id=""
                        placeholder="매장명"
                        onChange={changeInput}
                        value={text}
                    />
                    <button type="submit">검색</button>
                </div>
            </form>
            <div className="search-con">
                <div className="inner">
                    <h2>매장 정보</h2>
                    <ul className="map-con">
                        {map.map((map) => (
                            <SearchContentItem key={map.id} map={map} />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SearchContent;
