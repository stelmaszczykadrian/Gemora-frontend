import React, {ChangeEvent} from "react";
import './ProductsFilter.css'
import {SortType} from "../../constants/constants";

interface ProductsFilterProps {
    selectedValue: string;
    handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}


export const SortOptions = [
    { value: SortType.NEWEST, label: "Newest" },
    { value: SortType.ASCENDING, label: "Price Low - High" },
    { value: SortType.DESCENDING, label: "Price High - Low" },
];
function ProductsFilter(props: ProductsFilterProps) {


    return(
        <div>
            <div className="filter-container">
                <div className="filter">
                    <span className="filter-text">Sort Products:</span>
                    <select value={props.selectedValue} onChange={props.handleChange} className="filter-select">
                        {SortOptions.map((option, index) => (
                            <option key={index} value={option.value}>{option.label}</option>
                        ))};
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ProductsFilter;