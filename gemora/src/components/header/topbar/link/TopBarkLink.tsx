import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";
import './TopBarLink.css';

interface TopBarLinkProps {
    to: string;
    icon: string;
    text: string;
}

const TopBarLink: React.FC<TopBarLinkProps> = ({to, icon, text}) => (
    <Col xs={4} className="custom-borderRight">
        <Link to={to} className="customLink">
            <img src={icon} alt={`${text} Icon`} className="custom-margin-right"/>
            <span className="d-none d-md-inline span-color">
        {text}
      </span>
        </Link>
    </Col>
);

export default TopBarLink;