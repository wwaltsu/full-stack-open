import React from 'react'

const Filtteri = ({ filtered, setFiltered}) => {
    const handleFilterChange = (event) =>
        setFiltered(event.target.value);

    return(
            <div>
                filter shown with:
                <input
                    value={filtered}
                    onChange={handleFilterChange}/>
            </div>
    )
};

export default Filtteri