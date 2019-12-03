import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Post(props) {
  const postInformation = 
    <div>
      <h3>{props.name}</h3>
      <h3>{props.title}</h3>
      <h3>{props.description}</h3>
      <h6>{props.timePost} </h6>
    </div>;
  return  (
    <div>
      {postInformation}
    </div>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  timePost: PropTypes.instanceOf(Moment).isRequired,
  postId: PropTypes.string.isRequired
};

export default Post;