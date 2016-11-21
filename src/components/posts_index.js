import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index.js';
import {Link} from 'react-router';

class PostsIndex extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		return(
			<div>
				List of blog Posts
				<button type='button' className='btn btn-secondary'><Link to='/posts/new'>New Post</Link></button>
			</div>
		)
	}
}


export default connect(null, {fetchPosts})(PostsIndex);