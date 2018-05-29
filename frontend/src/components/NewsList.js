import { Image } from 'react-bootstrap';
import React, { Component } from 'react';
import { connect } from 'react-redux';


class NewsList extends Component {
	
	render() {
		let news = ''
    	if (this.props.news.length > 0) {
    		news = this.props.news.map((item, index) => (
    			<div className="newsList__item" key={index}>
    				<div className="newsList__image">
    					<Image src={item.urlToImage} alt="" responsive />
    				</div>
    				<a href={item.url}>{item.title}</a>
    				<p className="newsList__description">{item.description}</p>
    				<span>Published at {item.publishedAt} by {item.author}</span>
    			</div>
    		));
    	}

		return (
			<div className="newsList">
				{news}
			</div>
		);
    }

}

const mapStateToProps = state => ({
  news: state.news,
});

export default connect(mapStateToProps)(NewsList);
