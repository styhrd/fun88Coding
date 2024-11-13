// Categories.tsx
import { useState } from 'react';
import Games from './Games';
import SearchBar from './SearchBar';
import searchlogo from '../assets/SvgIcons/search.svg';
import startlogo from '../assets/SvgIcons/start.svg';
import newlogo from '../assets/SvgIcons/NEW.svg';
import slotslogo from '../assets/SvgIcons/slot-machine-casino-svgrepo-com.svg';
import livelogo from '../assets/SvgIcons/cas.svg';
import jackpotlogo from '../assets/SvgIcons/jackpots.svg';
import tablelogo from '../assets/SvgIcons/card.svg';
import bingologo from '../assets/SvgIcons/coins 1.svg';
import otherlogo from '../assets/SvgIcons/APP SQUARE.svg';
import '../styles/categories.css';

const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
    const [showFavorites, setShowFavorites] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedProviders, setSelectedProviders] = useState<string[]>([]);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        setShowFavorites(false);
    };

    const toggleSearchBar = () => {
        setShowSearchBar((prev) => !prev);
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };
    const handleFilter = (providers: string[]) => {
        setSelectedProviders(providers);
    };

    return (
        <div className='category-container'>
            <div className="categories">
                <button
                    className={`search-btn ${showSearchBar ? 'active' : ''}`}
                    onClick={toggleSearchBar}
                >
                    <img src={searchlogo} alt="SEARCH" />
                    <p>SEARCH</p>
                </button>

                <div className="vertical-line2"></div>

                <button
                    className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                    onClick={() => handleCategoryClick('all')}
                >
                    <img src={startlogo} alt="START" />
                    <p>START</p>
                </button>
                <button
                    className={`category-btn ${selectedCategory === 'new' ? 'active' : ''}`}
                    onClick={() => handleCategoryClick('new')}
                >
                    <img src={newlogo} alt="NEW" />
                    <p>NEW</p>
                </button>
                <button
                    className={`category-btn ${selectedCategory === 'slots' ? 'active' : ''}`}
                    onClick={() => handleCategoryClick('slots')}
                >
                    <img src={slotslogo} alt="SLOTS" />
                    <p>SLOTS</p>
                </button>
                <button
                    className={`category-btn ${selectedCategory === 'live' ? 'active' : ''}`}
                    onClick={() => handleCategoryClick('live')}
                >
                    <img src={livelogo} alt="LIVE" />
                    <p>LIVE</p>
                </button>
                <button
                    className={`category-btn ${selectedCategory === 'jackpot' ? 'active' : ''}`}
                    onClick={() => handleCategoryClick('jackpot')}
                >
                    <img src={jackpotlogo} alt="JACKPOT" />
                    <p>JACKPOT</p>
                </button>
                <button
                    className={`category-btn ${selectedCategory === 'table' ? 'active' : ''}`}
                    onClick={() => handleCategoryClick('table')}
                >
                    <img src={tablelogo} alt="TABLE" />
                    <p>TABLE</p>
                </button>
                <button
                    className={`category-btn ${selectedCategory === 'bingo' ? 'active' : ''}`}
                    onClick={() => handleCategoryClick('bingo')}
                >
                    <img src={bingologo} alt="BINGO" />
                    <p>BINGO</p>
                </button>
                <button
                    className={`category-btn ${selectedCategory === 'others' ? 'active' : ''}`}
                    onClick={() => handleCategoryClick('others')}
                >
                    <img src={otherlogo} alt="OTHERS" />
                    <p>OTHERS</p>
                </button>
                <button
                    className={`category-btn ${selectedCategory === 'favorites' ? 'active' : ''}`}
                    onClick={() => handleCategoryClick('favorites')}
                >
                    <img src={otherlogo} alt="FAVORITES" />
                    <p>FAVORITES</p>
                </button>
            </div>

            {showSearchBar && <SearchBar onSearch={handleSearch} onFilter={handleFilter} />}

            <Games
                category={selectedCategory}
                showFavorites={showFavorites}
                setShowFavorites={setShowFavorites}
                searchQuery={searchQuery}
                selectedProviders={selectedProviders}
            />
        </div>
    );
};

export default Categories;
