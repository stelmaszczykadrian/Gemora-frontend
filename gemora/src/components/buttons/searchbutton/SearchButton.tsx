import React, {FC, MouseEvent} from 'react';
import {Button} from "react-bootstrap";
import MagnifierIcon from "../../icons/MagnifierIcon";
import './SearchButton.css';

interface SearchButtonProps {
    handleShow: (event: MouseEvent<HTMLButtonElement>) => void;
}

const SearchButton: FC<SearchButtonProps> = ({handleShow}) => (
    <Button
        variant="outline-light"
        className="search-button rounded-circle"
        onClick={handleShow}
    >
        <MagnifierIcon/>
    </Button>
);

export default SearchButton;