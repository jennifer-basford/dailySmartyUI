import React, { Component } from "react";

import { connect } from "react-redux";

import * as actions from "../actions";

class RecentPosts extends Component {
  componentDidMount() {
    this.props.fetchRecentPosts();
  }

  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts-wrapper">
          <div className="recent-posts-heading">Recent Posts</div>
          <ul className="recent-posts_posts">
            <li>recent pst 0</li>
            <li>recent pst 1</li>
            <li>recent pst 2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(RecentPosts);
