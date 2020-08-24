import React, { Component } from "react";

class RecentPosts extends Component {
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

export default RecentPosts;
