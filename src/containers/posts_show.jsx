import React from "react";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setPost } from "../actions";

class PostsShow extends React.Component {
  componentWillMount() {
    if (!this.props.post) {
      this.props.setPost(this.props.match.params.id)
    }
  }

  render() {
    if (!this.props.post) {
      return <p>Loading...</p>
    }
    return (
      <div>
        <div className="post-item">
          <h4>{this.props.post.title}</h4>
          <p>{this.props.post.content}</p>
        </div>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  const post = state.posts.find(p => p.id === idFromUrl);
  return { post };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setPost: setPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);
