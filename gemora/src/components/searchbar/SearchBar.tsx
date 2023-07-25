import React from 'react';
import {Form, FormControl} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = React.useState<string>('');

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <Form className="form-inline">
            <div style={{position: 'relative'}}>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    value={searchQuery}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                />
                <span
                    className="btn btn-outline-primary"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer'
                    }}
                    onClick={handleSearch}
                >
                    <FontAwesomeIcon icon={faSearch}/>
                </span>
            </div>
        </Form>
    );
};

export default SearchBar;