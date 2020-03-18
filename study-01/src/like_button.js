'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Youl iked comment ' + this.props.comment;
    }

    return (
      <button onClick={() => this.setState({ liked: true })}>Like</button>
    )

    /* e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    ); */
  }
}
const domContainers = document.querySelectorAll('.like_button_container');
domContainers.forEach(domContainer => {
  const comment = domContainer.dataset.commentid;
  ReactDOM.render(e(LikeButton, { comment: comment }), domContainer)
});