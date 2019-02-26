import React, {Component} from 'react';
import './wall.scss';

export default class ImageTile extends Component {
	render() {
		const {src,text} = this.props;
		return (
		    <div className="tile">
			<img src={src} />
			{text}
		</div>	
			)
	}
}


