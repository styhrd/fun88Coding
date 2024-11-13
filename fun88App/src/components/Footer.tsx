import React from 'react';
import FavoritesLogo from '../assets/SvgIcons/FAVE.svg';

interface FooterProps {
    showFavoriteGames: boolean;
    setShowFavoriteGames: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer = ({ showFavoriteGames, setShowFavoriteGames }: FooterProps) => {
    const handleFavoritesClick = () => {
        setShowFavoriteGames((prev) => !prev); // Toggle the showFavoriteGames state
    };

    return (
        <footer className="footer">
            {/* Favorites Button */}
            <button onClick={handleFavoritesClick} className="favorites-btn">
                <img src={FavoritesLogo} alt="Favorites" />
                {showFavoriteGames ? 'Show All' : 'Show Favorites'}
            </button>
        </footer>
    );
};

export default Footer;
