import React from 'react';
import './Breadcrumbs.css';

function Breadcrumbs({ productName }: { productName: string }) {
    const pathNames = window.location.pathname.split('/').filter((x) => x);

    const renderBreadcrumbs = () => {
        const breadcrumbs = [];

        for (let index = 0; index < pathNames.length; index++) {
            const pathname = pathNames[index];
            const url = `/${pathNames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathNames.length - 1;



            if (isLast) {
                breadcrumbs.push(
                    <span className="pathname" key={url}>
                        {productName}
                    </span>
                );
            } else {
                breadcrumbs.push(
                    <span className="pathname" key={url}>
                        <a href={url}>{pathname}</a>
                        <span> / </span>
                    </span>
                );
            }
        }

        return breadcrumbs;
    };

    return (
        <div className="image">
            <div className="breadcrumbs">
                <ul className="breadcrumbs-list">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="/store">Store</a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="/categories">Categories</a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="/rings">Rings</a>
                    </li>
                    <li>/</li>
                    {renderBreadcrumbs()}
                </ul>
            </div>
        </div>
    );
}

export default Breadcrumbs;
