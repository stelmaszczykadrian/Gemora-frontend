import React from 'react';
import HeadingWithLines from "../headingwithlines/HeadingWithLines";

interface PageHeaderProps {
    pageName: string;
    pageTitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ pageName, pageTitle }) => {
    return (
        <div style={{ textAlign: 'center', fontSize: '19px', marginBottom: '1rem' }}>
            <HeadingWithLines name={pageName} />
            <div>{pageTitle}</div>
        </div>
    );
};

export default PageHeader;