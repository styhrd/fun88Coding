import React, { useState } from 'react';
import searchlogo from '../assets/SvgIcons/search.svg';
import '../styles/searchbar.css';

// Import all the provider logos
import playtechlogo from '../assets/DeveloperLogo/playtech.webp';
import everyMatrixLogo from '../assets/DeveloperLogo/EveryMatrix.webp';
import evolutionLogo from '../assets/DeveloperLogo/evolution.webp';
import xpanzLogo from '../assets/DeveloperLogo/EXPANSE.webp';
import ezugiLogo from '../assets/DeveloperLogo/EZG.webp';
import gameartLogo from '../assets/DeveloperLogo/GAMEART.webp';
import habLogo from '../assets/DeveloperLogo/HAB.webp';
import hacksawLogo from '../assets/DeveloperLogo/HACKSAW.webp';
import inbetLogo from '../assets/DeveloperLogo/INBET.webp';
import mplayLogo from '../assets/DeveloperLogo/MPLAY.webp';
import netentLogo from '../assets/DeveloperLogo/NETENT (1).webp';
import pgsoftLogo from '../assets/DeveloperLogo/PGSOFT.webp';
import playngoLogo from '../assets/DeveloperLogo/PNG.webp';
import pragmaticPlayLogo from '../assets/DeveloperLogo/PRAGMATICPLAY.webp';
import psLogo from '../assets/DeveloperLogo/PS.webp';
import redtigerLogo from '../assets/DeveloperLogo/REDTIGER.webp';
import relaxLogo from '../assets/DeveloperLogo/RELAX.webp';
import filterlogo from '../assets/SvgIcons/3BAR.svg'

interface SearchBarProps {
    onSearch: (query: string) => void;
    onFilter: (selectedProviders: string[]) => void;  // New prop to handle provider filtering
}

// Map each provider to its corresponding image import
const providerImages: Record<string, string> = {
    'EveryMatrix': everyMatrixLogo,
    'evolution': evolutionLogo,
    'Xpanz': xpanzLogo,
    'ezugi': ezugiLogo,
    'gameart': gameartLogo,
    'hab': habLogo,
    'hacksaw': hacksawLogo,
    'inbet': inbetLogo,
    'mplay': mplayLogo,
    'netent': netentLogo,
    'pgsoft': pgsoftLogo,
    'playngo': playngoLogo,
    'PragmaticPlay': pragmaticPlayLogo,
    'ps': psLogo,
    'playtech': playtechlogo,
    'redtiger': redtigerLogo,
    'relax': relaxLogo,
};

const SearchBar = ({ onSearch, onFilter }: SearchBarProps) => {
    const [query, setQuery] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);  // Modal state
    const [selectedProviders, setSelectedProviders] = useState<string[]>([]); // Already initialized as empty array
    // Selected providers

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        onSearch(e.target.value);  // Pass the search query to parent
    };

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);  // Toggle modal visibility
    };

    const handleProviderSelect = (provider: string) => {
        const newSelectedProviders = selectedProviders.includes(provider)
            ? selectedProviders.filter((item) => item !== provider)  // Deselect if already selected
            : [...selectedProviders, provider];  // Select if not already selected

        setSelectedProviders(newSelectedProviders);
        onFilter(newSelectedProviders);  // Apply filter immediately when a provider is selected/deselected
    };

    return (
        <div className="searchcont">
            <div className="searchbar">
                <img src={searchlogo} alt="Search Icon" />
                <input
                    type="text"
                    placeholder="Search Games"
                    value={query}
                    onChange={handleChange}
                />
            </div>
            <div className="filter" onClick={toggleModal}>
                <svg width="20" height="20" viewBox="0 0 17 17" fill="#888888" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.63609 2.52258H15.3639C15.69 2.52258 15.9609 2.40676 16.1765 2.17511C16.3922 1.94346 16.5 1.67141 16.5 1.35895C16.5 1.04649 16.3869 0.774436 16.1607 0.542787C15.9346 0.311136 15.669 0.195312 15.3639 0.195312H1.63609C1.30999 0.195312 1.03912 0.311136 0.823471 0.542787C0.607824 0.774436 0.5 1.04649 0.5 1.35895C0.5 1.67141 0.613084 1.94346 0.839251 2.17511C1.06542 2.40676 1.33103 2.52258 1.63609 2.52258ZM1.63609 9.34279H15.3639C15.69 9.34279 15.9609 9.22696 16.1765 8.99531C16.3922 8.76366 16.5 8.49161 16.5 8.17915C16.5 7.86669 16.3869 7.59464 16.1607 7.36299C15.9346 7.13134 15.669 7.01551 15.3639 7.01551H1.63609C1.30999 7.01551 1.03912 7.13134 0.823471 7.36299C0.607824 7.59464 0.5 7.86669 0.5 8.17915C0.5 8.49161 0.613084 8.76366 0.839251 8.99531C1.06542 9.22696 1.33103 9.34279 1.63609 9.34279ZM1.63609 16.1953H9.2574C9.5835 16.1953 9.85437 16.0795 10.07 15.8478C10.2857 15.6162 10.3935 15.3441 10.3935 15.0317C10.3935 14.7192 10.2804 14.4472 10.0542 14.2155C9.82807 13.9839 9.56246 13.868 9.2574 13.868H1.63609C1.30999 13.868 1.03912 13.9839 0.823471 14.2155C0.607824 14.4472 0.5 14.7192 0.5 15.0317C0.5 15.3441 0.613084 15.6162 0.839251 15.8478C1.06542 16.0795 1.33103 16.1953 1.63609 16.1953Z" />
                </svg>
            </div>

            {isModalOpen && (
                <div className="filter-modal">
                    <div className="modal-header">

                        <div className='modalhead'>
                            <p>Game Providers</p>
                        </div>

                        <button onClick={toggleModal}>X</button>
                    </div>
                    <div className="modal-content">
                        {Object.keys(providerImages).map((provider) => (
                            <div
                                key={provider}
                                className={`provider-option ${selectedProviders.includes(provider) ? 'selected' : ''}`}
                                onClick={() => handleProviderSelect(provider)}
                            >
                                <img
                                    src={providerImages[provider]}  // Use the dynamic image source
                                    alt={provider}
                                    className="provider-image"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
