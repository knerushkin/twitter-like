import React, { Component } from "react";
import style from "./posts.scss";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchPosts, fetchPost } from "../actions/index";

import Post from "./Post";
class Posts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    console.log("Posts: ", this.props.posts);
    return this.props.posts.map((post, num) => {
      return (
        <Post
          onClick={() => this.props.fetchPost(post.id)}
          key={post.id}
          num={num}
          post={post}
        />
      );
    });
  }

  render() {
    return <div className={style.posts}>{this.renderPosts()}</div>;
  }
}

function mapStateToProps({ posts }) {
  console.log(posts);
  return { posts };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts, fetchPost }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
