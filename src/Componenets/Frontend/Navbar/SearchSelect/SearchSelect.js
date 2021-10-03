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
                    placeholder="Search something"
                />
            </div>
            {/* <div style={{ margin: "0 auto", width: 300, marginTop: 100 }}>
                <SelectSearch
                    multiple={true}
                    printOptions={"on-focus"}
                    closeOnSelect={false}
                    options={options}
                    value={multipleValues}
                    onChange={setMultipleValues}
                    search
                    filterOptions={fuzzySearch}
                    placeholder="Search something"
                />
            </div> */}
        </>
    );
};
export default SearchSelect;
