import React, { Children } from 'react';

class Button extends React.Component {

    render() {
        return (
            <button type="button" className="btn" {this.props.isSelected === true}> {this.props.children}</button>

        )

    }
}

export default Button;


