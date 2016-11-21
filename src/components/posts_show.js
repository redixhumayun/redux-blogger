import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Spinner from 'react-spinkit';
import {Link} from 'react-router';

import {fetchIndPost} from '../actions/index.js';
import {deletePost} from '../actions/index.js';

class PostsShow extends Component {
	static contextTypes = {
		router: React.PropTypes.object
	}

	componentWillMount() {
		this.props.fetchIndPost(this.props.params.id);
	}

	handleDelete() {
		console.log('function was called');
		console.log(this);
		this.props.deletePost(this.props.params.id).then(() => {
			this.context.router.push('/')
		});
	}

	render() {
		const {post} = this.props;

		return post !== null ? 
		<div className='col-sm-8 offset-sm-2 well text-center'>
			<Link to='/'>Back To List</Link>
			<h3>{post.title}</h3>
			<h6>Categories: {post.categories}</h6>
			<p>{post.content}</p>
			<button type='button' className='btn btn-danger' onClick={this.handleDelete.bind(this)}>Delete Post</button>
		</div> : 
		<div className='col-sm-8 offset-sm-2 well'><Spinner spinnerName='double-bounce' /></div>
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({fetchIndPost, deletePost}, dispatch);
}

const mapStateToProps = (state) => {
	return {
		post: state.posts.post
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);