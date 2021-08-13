import React, { Component } from 'react'
import styles from "./product.module.css"
import {Link} from "react-router-dom"
import { deleteProduct } from '../../actions/ProductActions'
import {connect} from "react-redux"
import PropTypes from "prop-types"
export class ProductItem extends Component {
    onDelete = id =>{
        this.props.deleteProduct(id)
 }

    render() {
        const {product} = this.props;
        const productImage = `data:image/jpeg;base64,${product.productImg}`
        return (
            <section className={styles.dark}>
	<div className="container py-4">
    
		<h1 className="h1 text-center" id="pageHeaderTitle"></h1>
		<article className={styles.postcard}>
			<Link className={styles.postcard__img_link} to={`/productBoard/${product.productIdentifier}`}>
				<img className={styles.postcard__img} src={productImage} alt="Image Title" />
			</Link>
			<div className={styles.postcard__text}>
			<Link to={`/productBoard/${product.productIdentifier}`}  ><h1 className={styles.postcard__title} >{product.productName}</h1>   
            </Link>
				<div className={styles.postcard__subtitle}>
					
				</div>
				<div className={styles.postcard__bar}></div>
				<div className={styles.postcard__preview_txt}>{product.productSummary}</div>
				<ul className={styles.postcard__tagbox}>
					<li className={styles.tag__item}><i className="fas fa-tag mr-2"></i>Podcast</li>
					<li className={styles.tag__item}><i className="fas fa-clock mr-2"></i>55 mins.</li>
				</ul>
           
                <Link to={`/addProductTask/${product.productIdentifier}`} className="btn btn-outline-secondary me-2" disabled>Add Task</Link>
               <Link to={`//${product.productIdentifier}`} className="btn btn-outline-secondary me-2" disabled>Update</Link>
               <button className="btn btn-danger" onClick={this.onDelete.bind(this, product.productIdentifier)}>Delete</button>
			</div>
		</article>
     
	</div>
</section>
        )
    }
}

ProductItem.propTypes = {
    deleteProduct: PropTypes.func.isRequired
}

export default connect(null, {deleteProduct})(ProductItem)
