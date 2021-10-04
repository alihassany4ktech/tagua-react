import React, { useState } from "react";
import SelectSearch, { fuzzySearch } from "react-select-search";
import "./SearchSelect.css";

const SearchSelect = () => {
    const [value, setValue] = useState(""); 
    const options = [
        {
            name: "Annie Cruz ",
            value: "annie.cruz", 
        },
        {
            name: "Eli Shelton", 
            value: "eli.shelton", 
        },
        {
            name: "Loretta Rogers",
            value: "loretta.rogers", 
        },
        {
            name: "Lloyd Fisher",
            value: "lloyd.fisher", 
        },
        {
            name: "Tiffany Gonzales",
            value: "tiffany.gonzales", 
        }
    ];
    return (
        <> 
            <div>
                <SelectSearch
                    options={options}
                    value={value}
                    onChange={setValue}
                    search
                    filterOptions={fuzzySearch}
                    placeholder="Select Your Holster by Gun"
                />
            </div>
           
        </>
    );
};
export default SearchSelect;
