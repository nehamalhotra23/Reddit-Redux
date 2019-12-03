import React from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import PropTypes from 'prop-types';
import {Switch, Route, withRouter} from 'react-router-dom';
import NavBar from './NavBar';
import Error404 from './Error404';
import PostList from './PostList';
import NewPostControl from './NewPostControl';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      postList: {}
    };
    this.handleNewPost = this.handleNewPost.bind(this);
    this.handleUpVoteClick = this.handleUpVoteClick.bind(this);
    this.handleDownVoteClick = this.handleDownVoteClick.bind(this);
  }

  handleNewPost(newPost){
    let temp = this.state.postList.slice();
    temp.push(newPost);
    this.setState({postList: temp});
  }

  handleUpVoteClick(id){
    var copy = this.state.postList;
    copy[id].votes = copy[id].votes + 1;
    this.setState({postList: copy});
  }  
  handleDownVoteClick(id){
    var copy = this.state.postList;
    copy[id].votes = copy[id].votes - 1;
    this.setState({postList: copy});
  }  
  render() {
    return(
      <div>
        <NavBar/>
        <Header/>
        <Switch>
          <Route exact path="/" render={()=><PostList postList={this.state.postList}  onLike={this.handleUpVoteClick} onDisLike={this.handleDownVoteClick}/>}/>
          <Route path="/newpost" component={NewPostControl} />
          <Route component={Error404} />
        </Switch>

      </div>
    );
  }
}

App.propTypes = {
  postList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    postList: state
  };
};


export default withRouter(connect(mapStateToProps)(App));