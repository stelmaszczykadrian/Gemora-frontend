import React, { FC, MouseEvent } from 'react';
import {Button} from "react-bootstrap";


interface SearchButtonProps {
    handleShow: (event: MouseEvent<HTMLButtonElement>) => void;
}

const SearchButton: FC<SearchButtonProps> = ({ handleShow }) => (
    <Button
        style={{
            width: '3rem',
            height: '3rem',
            position: 'relative',
            marginLeft: 'auto',
        }}
        variant="outline-dark"
        className="rounded-circle"
        onClick={handleShow}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path
                d="M15.5 14h-.79l-.28-.27c1.26-1.51 2-3.39 2-5.46 0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8c2.07 0 3.95-.74 5.46-2l.27.28v.79l5 4.99 1.28-1.28-4.99-5zm-7 0c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
            />
            <path d="M0 0h24v24H0z" fill="none" />
        </svg>
    </Button>
);

export default SearchButton;