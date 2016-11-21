import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index.js';
import {Link} from 'react-router';

class PostsIndex extends Component {

	componentWillMount() {
		this.props.fetchPosts();
	}

	renderList() {
		return this.props.posts.map(post => {
			return(
				<li className='list-group-item' key={post.id}>
					<Link to={`posts/${post.id}`}>
						<strong>{post.title}</strong>
						<span className='pull-xs-right' style={{float: 'right'}}>{post.categories}</span>
					</Link>
					
				</li>
			)
		})
	}

	render() {
		return(
			<div className='col-sm-8 offset-sm-2 well' style={{marginTop: '50px'}}>
				<div className='text-xs-right'>
					<button type='button' className='btn btn-secondary'>
						<Link to='/posts/new'>New Post</Link>
					</button>
				</div>	
				<h3>Posts</h3>
				<ul className='list-group'>{this.renderList()}</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.posts.all
	}
}


export default connect(mapStateToProps, {fetchPosts})(PostsIndex);