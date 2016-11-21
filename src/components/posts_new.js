import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';

import {createPost} from '../actions/index.js';

class PostsNew extends Component {

	constructor(props) {
		super(props);
		this.state = {title: '', categories: '', content: ''};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangeTitle = this.handleChangeTitle.bind(this);
		this.handleChangeCategories = this.handleChangeCategories.bind(this);
		this.handleChangeContent = this.handleChangeContent.bind(this);
	}

	static contextTypes = {
		router: React.PropTypes.object
	};

	handleSubmit(e) {
		e.preventDefault();
		this.props.createPost(this.state).then(() => {
			this.context.router.push('/');
		});
	}

	handleChangeTitle(e) {
		this.setState({title: e.target.value});
	}

	handleChangeCategories(e) {
		this.setState({categories: e.target.value});
	}

	handleChangeContent(e) {
		this.setState({content: e.target.value});
	}

	render() {
		return(
			<div className='col-sm-8 offset-sm-1'>
				<form onSubmit={this.handleSubmit}>
					<h3>Create A New Post</h3>
					<div className='form-group'>
						<label>Title</label>
						<input type='text' className='form-control' placeholder='Title' onChange={this.handleChangeTitle}/>
					</div>
					<div className='form-group'>
						<label>Categories</label>
						<input type='text' className='form-control' placeholder='Categories' 
						onChange={this.handleChangeCategories}/>
					</div>
					<div className='form-group'>
						<label>Content</label>
						<textarea className='form-control' placeholder='Content' onChange={this.handleChangeContent}/>
					</div>
					<button type='submit' className='btn btn-primary'>Submit</button>
					<Link to='/' className='btn btn-danger' style={{marginLeft: '5px'}}>Cancel</Link>
				</form>
			</div>
		)
	}
}


const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({createPost}, dispatch)
}

export default connect(null, mapDispatchToProps)(PostsNew);








