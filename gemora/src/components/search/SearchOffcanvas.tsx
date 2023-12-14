import React, {useState} from 'react';
import {Offcanvas, FormControl} from 'react-bootstrap';
import './SearchOffcanvas.css';

interface SearchOffcanvasProps {
    show: boolean;
    onHide: () => void;
}

const SearchOffcanvas: React.FC<SearchOffcanvasProps> = ({show, onHide}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const navigateToSearchResult = () => {
        window.location.href = (`/searched-products?search=${searchTerm}`)
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Offcanvas show={show} onHide={onHide} placement="top" style={{height: '20vh'}}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title/>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="search-container">
                    <FormControl type="text" placeholder="Search products by name" className="search-input"
                                 value={searchTerm}
                                 onChange={handleInputChange}/>
                    <button type="button" onClick={navigateToSearchResult} className="search-offcanvas-button">Search
                    </button>

                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default SearchOffcanvas;