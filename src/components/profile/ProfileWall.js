import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import {isNonEmptyArray} from '../../utils/ObjectUtils';
import InfiniteScroll from 'react-infinite-scroller';

let brakePoints = [350, 500, 750];

class ProfileWall extends Component {
    constructor(props) {
    	super(props);
    	this.loadMoreItems = this.loadMoreItems.bind(this);
    }
    componentWillMount() {
      const {match:{params}} = this.props;
        if (params && params.userName) {
        this.props.getProfileWall(params.userName, 1);
      }
    }
    
    
    loadMoreItems() {
    	const {board: {nextPage}, match:{params}} = this.props;
    	if (nextPage !== -1) {
            if (params && params.userName) {
              this.props.getProfileWall(params.userName, 1);
            }
    	}
    }
    
    render() {
        const {board: {profileWall}} = this.props;
        let imageTiles = [];
        if (isNonEmptyArray(profileWall)) {
          imageTiles = profileWall.map(function(item,idx){
              console.log(item);
         //     console.log(item.imageLink);
            return <Tile src={item.imageLink}/>
          }) ;
        }
      //  console.log(imageTiles);
        
        if (imageTiles.length === 0) {
        	return <span/>;
        }
		return (
			<div className="container">
				<div className="masonry-container">
				<InfiniteScroll
				    pageStart={1}
				    loadMore={this.loadMoreItems}
				    hasMore={true || false}
				    loader={<div className="loader" key={0}>Loading ...</div>}
				>
					<Masonry brakePoints={brakePoints}>
                        {imageTiles}
					</Masonry>
                </InfiniteScroll>
				</div>
			</div>
		)
    }
}


const Tile = ({src}) => {
  return (
    <div className="tile">
			<img src={src} />
		</div>
  );
};

class Masonry extends React.Component{
	constructor(props){
		super(props);
		this.state = {columns: 1};
		this.onResize = this.onResize.bind(this);
	}
	componentDidMount(){
		this.onResize();
		window.addEventListener('resize', this.onResize)	
	}
	
	getColumns(w){
		return this.props.brakePoints.reduceRight( (p, c, i) => {
			return c < w ? p : i;
		}, this.props.brakePoints.length) + 1;
	}
	
	onResize(){
		const columns = this.getColumns(this.refs.Masonry.offsetWidth);
		if(columns !== this.state.columns){
			this.setState({columns: columns});	
		}
		
	}
	
	mapChildren(){
		let col = [];
		const numC = this.state.columns;
		for(let i = 0; i < numC; i++){
			col.push([]);
		}
		return this.props.children.reduce((p,c,i) => {
			p[i%numC].push(c);
			return p;
		}, col);
	}
	
	render(){
		return (
			<div className="masonry" ref="Masonry">
				{this.mapChildren().map((col, ci) => {
					return (
						<div className="column" key={ci} >
							{col.map((child, i) => {
								return <div key={i} >{child}</div>
							})}
						</div>
					)
				})}
			</div>
		)
	}
}







export default withRouter(ProfileWall);