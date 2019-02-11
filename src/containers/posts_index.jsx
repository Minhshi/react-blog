import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setPosts } from "../actions";

class PostsIndex extends React.Component {
  componentWillMount() {
    this.props.setPosts();
  }

  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <div className="posts-item">
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="posts-container">
        <div className="posts-title">
          <h2>Posts</h2>
          <Link className="btn btn-danger" to="/posts/new">
            <p>New Post</p>
          </Link>
        </div>
        <div className="posts-content">{this.renderPosts()}</div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setPosts: setPosts }, dispatch);
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsIndex);
