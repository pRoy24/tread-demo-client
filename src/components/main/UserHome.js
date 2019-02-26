import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {isNonEmptyArray} from '../../utils/ObjectUtils';
import InfiniteScroll from 'react-infinite-scroller';
import ImageTile from '../wall/ImageTile';
import WallMasonry from '../wall/WallMasonry';
const CLIENT_URI = process.env.REACT_APP_FRONTEND;
let brakePoints = [350, 500, 750];


export default class UserHome extends Component {
    constructor(props) {
    	super(props);
    	this.loadMoreItems = this.loadMoreItems.bind(this);
    	this.state= {hasMore: true}
    }
    componentWillMount() {
        this.props.getUserWall(1);
    }
    
    loadMoreItems() {
    	const {board: {nextPage}} = this.props;

    	if (nextPage !== -1) {
    		this.props.getUserWall(nextPage);
    	} else {
    		this.setState({hasMore: false});
    	}
    }
    render() {
        const {board: {userWall}} = this.props;
        let imageTiles = [];
        if (isNonEmptyArray(userWall)) {
          imageTiles = userWall.map(function(item,idx){
          	console.log(item);
            return <ImageTile src={item.imageLink} text={<p>{CLIENT_URI}/link/${item.urlHash}</p>}/>
          }) ;
        }
        if (imageTiles.length === 0) {
        	return <span/>;
        }
		return (
			<div className="masonry-container">
				<InfiniteScroll
				    pageStart={1}
				    loadMore={this.loadMoreItems}
				    hasMore={this.state.hasMore}
				    loader={<div className="loader" key={0}>Loading ...</div>}
				>
					<WallMasonry brakePoints={brakePoints}>
                        {imageTiles}
					</WallMasonry>
				</InfiniteScroll>
			</div>
		)
    }
}

