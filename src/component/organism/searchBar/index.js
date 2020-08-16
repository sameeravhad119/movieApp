import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        const { searchText, onChange, clickOnSearch } = this.props;
        return (
            <div>
                <input type={'text'} value={searchText} onChange={onChange} />
            </div>
        )
    }
}
export default SearchBar;