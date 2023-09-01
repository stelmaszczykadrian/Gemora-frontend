import React, {ChangeEvent} from "react";
import './ProductsFilter.css'

interface ProductsFilterProps {
    selectedValue: string;
    handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

function ProductsFilter(props: ProductsFilterProps) {


    return(
        <div>
            <div className="filter-container">
                <div className="filter">
                    <span className="filter-text">Sort Products:</span>
                    <select value={props.selectedValue} onChange={props.handleChange} className="filter-select">
                        <option value="newest">Newest</option>
                        <option value="ascending">Price Low - High</option>
                        <option value="descending">Price High - Low</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ProductsFilter;