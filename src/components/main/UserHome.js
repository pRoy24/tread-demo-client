import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {isNonEmptyArray} from '../../utils/ObjectUtils';
import InfiniteScroll from 'react-infinite-scroller';


let brakePoints = [350, 500, 750];


export default class UserHome extends Component {
    constructor(props) {
    	super(props);
    	this.loadMoreItems = this.loadMoreItems.bind(this);
    }
    componentWillMount() {
        this.props.getUserWall(1);
    }
    
    loadMoreItems() {
    	const {board: {nextPage}} = this.props;
    	console.log(nextPage);
    	if (nextPage !== -1) {
    		this.props.getUserWall(nextPage);
    	}
    }
    render() {
        const {board: {userWall}} = this.props;
        let imageTiles = [];
        if (isNonEmptyArray(userWall)) {
          imageTiles = userWall.map(function(item,idx){
            return <Tile src={item.imageLink}/>
          }) ;
        }
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

