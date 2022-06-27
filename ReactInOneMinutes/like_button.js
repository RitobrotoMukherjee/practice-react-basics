'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return e (
        'p',
        { onClick: () => this.setState({ liked: false }) },
        'You Liked it. Now Click it to dislike.'
      );
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Click to Like it'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));