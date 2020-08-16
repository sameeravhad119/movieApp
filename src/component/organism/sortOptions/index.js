import React, { Component } from 'react'

class SortOptions extends Component {
    render() {
        const { options, sortBy, setSortOption } = this.props;

        return (

            options.map(label =>
                <div>
                    <input type={'checkbox'} id={label} name={'sort'}
                        checked={label === sortBy}
                        onClick={() => setSortOption(label)} />

                    <label for={label}>{label}</label>
                </div>
            )

        )
    }
}
export default SortOptions;