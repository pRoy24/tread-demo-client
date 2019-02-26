import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Row, Col, Container} from 'react-bootstrap';
import {isNonEmptyArray} from '../../utils/ObjectUtils';
import InfiniteScroll from 'react-infinite-scroller';
import ImageTile from '../wall/ImageTile';
import WallMasonry from '../wall/WallMasonry';

let brakePoints = [350, 500, 750];

class ProfileWall extends Component {
    constructor(props) {
    	super(props);
    	this.state= {hasMore: true, showLinks: false};    	
    	this.loadMoreItems = this.loadMoreItems.bind(this);
    }
    componentWillMount() {
      const {match:{params}} = this.props;
        if (params && params.userName) {
        this.props.getProfileWall(params.userName, 1);
      }
		const self = this;
		setTimeout(function(){
			self.setState({'showLinks': true});
		}, 1000);      
    }
    
    componentWillUnmount() {
    	this.props.resetProfileWall();
    }
    
    loadMoreItems() {
    	const {board: {nextPage}, match:{params}} = this.props;
    	if (nextPage !== -1) {
            if (params && params.userName) {
              this.props.getProfileWall(params.userName, nextPage);
            }
    	} else {
    	   this.setState({hasMore: false});  
    	}
    }
    
    render() {
        const {board: {profileWall}} = this.props;
        let imageTiles = [];
        const self = this;
        if (isNonEmptyArray(profileWall)) {
          imageTiles = profileWall.map(function(item,idx){
            return <ImageTile src={item.imageLink} link={item.urlHash} allowDelete={false} key={item.urlHash+idx}
            showLinks={self.state.showLinks}/>
          }) ;
        }

        if (imageTiles.length === 0) {
        	return <span/>;
        }

		return (
			<Container className="landing-container">
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
			</Container>
		)
    }
}


export default withRouter(ProfileWall);