import React from 'react'
import clx from 'classnames';

function Chip(props) {
    const { label, isSelected, onClick } = props;
    return (
        <span className={clx('chip', { 'active': isSelected })} onClick={() => onClick(label)}>
            {label}
        </span>
    )
}
export default Chip;