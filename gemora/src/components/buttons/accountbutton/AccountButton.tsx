import React, {FC, MouseEvent} from 'react';
import {Button} from "react-bootstrap";
import AccountIcon from "../../icons/AccountIcon";
import './AccountButton.css';

interface ProfileButtonProps {
    handleShow: (event: MouseEvent<HTMLButtonElement>) => void;
}

const AccountButton: FC<ProfileButtonProps> = ({handleShow}) => (
    <Button
        variant="outline-light"
        className="account-button rounded-circle"
        onClick={handleShow}
    >
        <AccountIcon/>
    </Button>
);

export default AccountButton;