import React from 'react';
import NewPostForm from './NewPostForm';
import PropTypes from 'prop-types';

class NewPostControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    
  }
  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewPostForm onNewPostCreation={this.props.onNewPostCreation}/>;
    } else {
      alert('alert');
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}
  
NewPostControl.propTypes = {
  onNewPostCreation: PropTypes.func,
  dispatch: PropTypes.func
};
  
export default NewPostControl;
  