import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPost } from "../actions";
import { withRouter } from "react-router-dom";

const Button = withRouter(({ history, id }) => (
  <button
    onClick={() => {
      history.push("/");
    }}
    type="button"
  >
    Go back to posts
  </button>
));


class PostDetails extends Component {
    

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const { selected } = this.props;
    console.log("selected");
    console.log(selected);

    if(!selected) {
        return <div>Loading...</div>
    }

    return (
      <div>
        <Button />
        <h1>Details</h1>
        <h2>UserId: {selected.userId}</h2>
        <h2>Id: {selected.id}</h2>
        <h3>Title: {selected.title}</h3>
        <h4>Body: {selected.body}</h4>
      </div>
    );
  }
}

function mapStateToProps({ selected }) {
  return { selected };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
