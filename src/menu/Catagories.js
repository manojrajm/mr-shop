import React from "react";

const Catagories = ({ newCategories, filterItems }) => {
    return (
        

        <div className="btn-container">
            {newCategories.map((category, index) => {

                return <button className="filter-btn" onClick={() => filterItems(category)} key={index}>{category}</button>
            })}

        </div>



    )
}

export default Catagories;