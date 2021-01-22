import React from 'react'

const Search = ({ searchQuery, setSearchQuery, jenis}) => (
    <form
        action="/"
        method="get"
        autoComplete="off"
    >
        {/* <label htmlFor="header-search">
            <span className="visually-hidden">
                Search blog posts
            </span>
        </label> */}
        <input
            className="form-control mt-4 heightSearch"
            defaultValue={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder={(jenis==="infographic")?"Search Posters Here":"Search Datasets Here"}
            name="s"
        />
        {/* <button type="submit">Search</button> */}
    </form>
)

export default Search