import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button
        type="button"
        data-testid="send-button"
        onClick={ onClick }
      >
        Adicionar filme
      </button>
    );
  }
}

export default Button;
