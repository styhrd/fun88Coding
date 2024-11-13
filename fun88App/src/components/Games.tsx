import React, { useEffect, useState, useMemo, useCallback } from 'react';

// Import images
import ABLImage from '../assets/GameLogo/ABL.webp';
import PopImage from '../assets/GameLogo/PoP.webp';
import SRImage from '../assets/GameLogo/SR.webp';
import BBWQImage from '../assets/GameLogo/BBW.webp';
import BLImage from '../assets/GameLogo/BL.webp';
import SCImage from '../assets/GameLogo/SC.webp';
import BOEImage from '../assets/GameLogo/BOE.webp';
import PPImage from '../assets/GameLogo/PP.webp';
import CBImage from '../assets/GameLogo/CB.webp';
import AWImage from '../assets/GameLogo/AW.webp';
import MJImage from '../assets/GameLogo/MJ.webp';
import IJImage from '../assets/GameLogo/IJ.webp';
import SportsLogo from '../assets/SvgIcons/SPORTS.svg';
import FavoritesLogo from '../assets/SvgIcons/FAVE.svg';
import InviteLogo from '../assets/SvgIcons/INVITE.svg';
import CasinoLiveLogo from '../assets/SvgIcons/casino-chip-svgrepo-com.svg';
import CashierLogo from '../assets/SvgIcons/CASHIER.svg';
import '../styles/games.css';
import '../styles/footer.css'

// Define the Game type with isFavorite and liveStatus
interface Game {
    name: string;
    img: string;
    gameProvider: string;
    category: string;
    isNew: boolean;
    isFavorite: boolean;
}

interface GamesProps {
    category: string;
    showFavorites: boolean;
    setShowFavorites: React.Dispatch<React.SetStateAction<boolean>>;
    searchQuery: string;
    selectedProviders: string[];
}

const Games = ({ category, showFavorites, setShowFavorites, searchQuery, selectedProviders }: GamesProps) => {
    const [games, setGames] = useState<Game[]>([]);
    const [favoriteGames, setFavoriteGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [activeFooterLogo, setActiveFooterLogo] = useState<string | null>(null);

    // Mock API call function
    const mockApiCall = useCallback(async (): Promise<Game[]> => {
        const gamesData: Game[] = [
            { name: 'Pride of Persia', img: PopImage, category: 'jackpot', isNew: false, isFavorite: false, gameProvider: 'playtech' },
            { name: 'Sugar Rush', img: SRImage, category: 'jackpot', isNew: false, isFavorite: false, gameProvider: 'PragmaticPlay' },
            { name: 'Big Bro World', img: BBWQImage, category: 'live', isNew: false, isFavorite: false, gameProvider: 'playtech' },
            { name: 'Beach Life', img: BLImage, category: 'slots', isNew: false, isFavorite: false, gameProvider: 'playtech' },
            { name: 'Shaolin Crew', img: SCImage, category: 'slots', isNew: false, isFavorite: false, gameProvider: 'Xpanz' },
            { name: 'Book of Egypt', img: BOEImage, category: 'table', isNew: false, isFavorite: false, gameProvider: 'Xpanz' },
            { name: 'Pirates Power', img: PPImage, category: 'others', isNew: false, isFavorite: false, gameProvider: 'Xpanz' },
            { name: 'Crocodile Blitz', img: CBImage, category: 'jackpot', isNew: false, isFavorite: false, gameProvider: 'playtech' },
            { name: 'Anaconda Wild 2', img: AWImage, category: 'slots', isNew: false, isFavorite: false, gameProvider: 'playtech' },
            { name: 'Maya Jackpot', img: MJImage, category: 'jackpot', isNew: false, isFavorite: false, gameProvider: 'skywind' },
            { name: 'Azteca Bonus Lines', img: ABLImage, category: 'bingo', isNew: false, isFavorite: false, gameProvider: 'playtech' },
            { name: 'Inca Jackpot', img: IJImage, category: 'jackpot', isNew: false, isFavorite: false, gameProvider: 'skywind' }

        ];

        // Mark the last 3 games as new
        const updatedGames = gamesData.map((game, index) => ({
            ...game,
            isNew: index >= gamesData.length - 3
        }));

        return new Promise((resolve) => {
            setTimeout(() => resolve(updatedGames), 3000);
        });
    }, []);

    useEffect(() => {
        const fetchGames = async () => {
            const gamesData = await mockApiCall();
            setGames(gamesData);
            setLoading(false);
        };

        fetchGames();
    }, [mockApiCall]);

    // Handle the "favorite" click to mark games as favorite
    const handleFavoriteClick = (game: Game) => {
        const updatedGames = games.map((g) =>
            g.name === game.name ? { ...g, isFavorite: !g.isFavorite } : g
        );
        setGames(updatedGames);

        // Update favorite games state
        const updatedFavorites = updatedGames.filter((g) => g.isFavorite);
        setFavoriteGames(updatedFavorites);
    };

    // Handle footer click to toggle between categories and favorites view
    const handleFooterClick = (logo: string) => {
        if (logo === 'FAVE') {
            setShowFavorites((prev) => !prev);
        }
        setActiveFooterLogo(logo === activeFooterLogo ? null : logo);
    }

    // Filtering logic for the games to be displayed
    const filteredGames = useMemo(() => {
        let gamesToShow = games;

        // Filter by category
        if (category !== 'all') {
            gamesToShow = gamesToShow.filter((game) => game.category === category);
        }

        // Filter by favorites if needed
        if (showFavorites) {
            gamesToShow = gamesToShow.filter((game) => game.isFavorite);
        }

        // Filter by selected providers
        if (selectedProviders.length > 0) {
            gamesToShow = gamesToShow.filter((game) =>
                selectedProviders.includes(game.gameProvider)
            );
        }

        // Filter by search query (if provided)
        if (searchQuery) {
            gamesToShow = gamesToShow.filter((game) =>
                game.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        console.log(gamesToShow); // Debugging line to check if new games are included
        return gamesToShow;
    }, [games, category, showFavorites, selectedProviders, searchQuery]);



    return (<>

        <div className='gamescont'>
            {loading ? (
                <div>Loading...</div>
            ) : filteredGames.length === 0 ? (
                <div className='default'>No games found</div>
            ) : (
                <>
                    <div className="gamesimg">
                        {filteredGames.map((game, index) => (
                            <div key={index} className="gameimg">
                                <img src={game.img} alt={game.name} />
                                <button
                                    className={`star-button ${game.isFavorite ? 'favorited' : ''}`}
                                    onClick={() => handleFavoriteClick(game)}
                                >
                                    ★
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}



        </div>
        <div className="footer">
            <div className={`footer-logo ${activeFooterLogo === 'SPORTS' ? 'active' : ''}`}>
                <img
                    src={SportsLogo}
                    alt="Sports"

                    style={{ cursor: 'pointer' }}
                    onClick={() => handleFooterClick('SPORTS')}
                />
                <p>SPORTS</p>
            </div>

            <div className={`footer-logo ${activeFooterLogo === 'FAVE' ? 'active' : ''}`}>
                <img
                    src={FavoritesLogo}
                    alt="Favorites"

                    style={{ cursor: 'pointer' }}
                    onClick={() => handleFooterClick('FAVE')}
                />
                <p>FAVORITES</p>
            </div>

            <div className={`footer-logo ${activeFooterLogo === 'INVITE' ? 'active' : ''}`}>
                <img
                    src={InviteLogo}
                    alt="Invite"

                    style={{ cursor: 'pointer' }}
                    onClick={() => handleFooterClick('INVITE')}
                />
                <p>INVITE</p>
            </div>

            <div className={`footer-logo ${activeFooterLogo === 'CASINO' ? 'active' : ''}`}>
                <img
                    src={CasinoLiveLogo}
                    alt="Casino Live"

                    style={{ cursor: 'pointer' }}
                    onClick={() => handleFooterClick('CASINO')}
                />
                <p>CASINO</p>
            </div>

            <div className={`footer-logo ${activeFooterLogo === 'CASHIER' ? 'active' : ''}`}>
                <img
                    src={CashierLogo}
                    alt="Cashier"

                    style={{ cursor: 'pointer' }}
                    onClick={() => handleFooterClick('CASHIER')}
                />
                <p>CASHIER</p>
            </div>
        </div>
    </>);
};

export default Games;
