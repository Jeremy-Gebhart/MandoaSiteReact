import React from 'react';

const LinkButton = (props) => {
    return (
        <a onClick={props.clickEvent}>
            {props.linkText}
        </a>
    );
}

export default LinkButton;