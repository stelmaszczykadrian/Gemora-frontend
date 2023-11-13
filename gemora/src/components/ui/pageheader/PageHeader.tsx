import React from 'react';
import './PageHeader.css';
import HeadingWithLines from "../headingwithlines/HeadingWithLines";

interface PageHeaderProps {
    pageName: string;
    pageTitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ pageName, pageTitle }) => {
    return (
        <div className="page-header">
            <HeadingWithLines name={pageName} />
            <div>{pageTitle}</div>
        </div>
    );
};

export default PageHeader;