import React, { Component } from 'react'
import Chip from '../../atom/chip';
import './genreChips.css';



class GenreChips extends Component {


    render() {
        const { allChips, selectedChips, handleClick } = this.props;
        return (
            <div className={'genreChips'}>
                {
                    allChips.map(label => <Chip
                        label={label}
                        onClick={handleClick}
                        isSelected={selectedChips.indexOf(label) > -1}
                    />)
                }
            </div>
        )
    }
}
export default GenreChips