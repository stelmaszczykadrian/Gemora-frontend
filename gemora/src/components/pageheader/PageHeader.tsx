import React from 'react';
import HeadingWithLines from "../headingwithlines/HeadingWithLines";
import './PageHeader.css';

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