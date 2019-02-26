import React, {Component} from 'react';
import './wall.scss';
import {CopyToClipboard} from 'react-copy-to-clipboard';
const CLIENT_URI = process.env.REACT_APP_FRONTEND;

export default class ImageTile extends Component {
	render() {
		const {src,link, allowDelete} = this.props;
		let linkText = <span/>;
		let deleteProduct = <span/>;
		if (allowDelete) {
			deleteProduct = <div className="delete-link" onClick={this.props.deletePin}>Delete&nbsp;<i className="fa fa-trash"/></div>;
		}
		if (link) {
			const uri = `${CLIENT_URI}/link/${link}`;
			
			linkText = <div className='image-link-overlay'>
			<div className="product-link">
			  <a href={`${CLIENT_URI}/link/${link}`} target="_blank">
			  Visit URL
			  </a>
			</div>

			  <CopyToClipboard text={uri} onCopy={() => this.setState({copied: true})}>
			  	<div className="share-link">
			      Copy Link <i className="fa fa-copy"/>
			      </div>
			  </CopyToClipboard>
		
			{deleteProduct}	
			</div>
		}
		return (
		    <div className="tile">
			<img src={src} />
			{linkText}	
		</div>	
			)
	}
}


