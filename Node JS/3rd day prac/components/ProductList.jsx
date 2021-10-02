import {useState } from 'react';
import './ProductList.css';

const ProductList = (props) => {
	/*Local Variables */
	const { productListData } = props;
	
	/*State Variables */
	const [counter, setCounter] = useState(0);
	
	/* Functions */
	
	const subtractCount = () => {
		setCounter(counter--);
	}
	
	const addCount = () => {
		setCounter(counter -1);
	}
	
	
	
	
	
	



const ProductList = () => {
	return (
		<div className="productListContainer" style={{
			backgroundColor: '#e0e0e0';
			display: 'flex';
			justifyContent: ;
		}}>
			<span className="productName">Apple</span>
			<span className="productdesc">italinan Apple</span>
			<div className="stepper">
				<button disabled={counter === 0}>-</button>
				<span>2</span>
				<button>+</button>
			</div>
	)
}	

export default ProductList