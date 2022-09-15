import React from "react";
const PaginationButtonList = ({page, clickHandler}) =>{
    let pages = [1,2,3,];

    return (
        <div className="pagination-button-list">
            {pages.map((ele, id) =>{
                return(
                    <button className= {ele == page ? "active-btn" : ""} id = {`button-${ele}`} key={id} onClick ={()=>{
                        clickHandler(ele);
                    }}>
                        {ele}
                    </button>
                );
            })}
        </div>
    );
};

export {PaginationButtonList};