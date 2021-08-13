import React, { Component } from 'react'
import ProductTask  from './ProductTask'
import { connect } from 'react-redux'
import { getProductTask } from '../../actions/ProductActions'
import PropTypes from "prop-types"

export class ProductBoard extends Component {

    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getProductTask(id);
        //this.props.getFeatureTask();
    }
    render() {
        let {product_tasks} = this.props.product_task;
        return (
            <div>
                {
                product_tasks.map(product_task => ( <ProductTask  key={product_task.id} product_task={product_task} />))
                }
               
            </div>
        )
    }
}

ProductTask.propTypes = {
    product_task: PropTypes.object.isRequired,
    getProductTask: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    product_task: state.product_task
   })


export default connect(mapStateToProps, {getProductTask})(ProductBoard)
