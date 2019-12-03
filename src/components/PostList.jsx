import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  return (
    <div>
      <hr/>
      {Object.keys(props.postList).map(function(postId) {
        var post = props.postList[postId];
        return <Post name={post.name}
          title={post.title}
          description={post.description}
          key={postId}
          postId={postId}/>;
      })}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,

};
export default PostList;