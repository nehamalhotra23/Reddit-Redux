import React from 'react';
// import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';


function NewPostForm(props){
  let _name = null;
  let _title = null;
  let _description = null;
  
  function handleNewPostFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_POST',
      id: v4(),
      name: _name.value,
      title: _title.value,
      description: _description.value,
    };
    dispatch(action);
    _name.value = '';
    _title.value = '';
    _description.value = '';
  }
  
  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='title'
          placeholder='title'
          ref={(input) => {_title = input;}}/>
        <textarea
          id='description'
          placeholder='Post body.'
          ref={(textarea) => {_description = textarea;}}/>
        <button type='submit'>Post</button>
      </form>
    </div>
  );
}
NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func,
  dispatch: PropTypes.func
};
export default connect()(NewPostForm);