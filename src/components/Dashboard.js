import React, { Component } from 'react'
import FeatureItem from './Feature/FeatureItem'
import {connect} from "react-redux";
import { getFeatures} from '../actions/FeatureActions';
import { getProducts } from '../actions/ProductActions';
import { getAbouts } from '../actions/AboutActions';
import PropTypes from "prop-types"
import SearchBox from './Layout/SearchBox';
import ProductItem from './Product/ProductItem';
import IntroItem from './Intro/IntroItem';
import { getIntros, deleteIntro, getIntro } from '../actions/IntroActions';

export class Dashboard extends Component {

    constructor(){
        super()
        this.state = {
            searchValue: ""
        }
    }

componentDidMount(){
   // const {id} = this.props.match.params;
    this.props.getFeatures();
    this.props.getProducts();
    this.props.getAbouts();
    this.props.getIntros();
    //this.props.getFeatureTask();
}

    render() {
        let {features} = this.props.feature;
        let {products} = this.props.product;
        let {intros} = this.props.intro;
       const filteredFeature = features.filter(feature => {
           const searchProp = this.state.searchValue.toLocaleLowerCase();
            if(feature.featureHeading.toLowerCase().includes(searchProp) || 
            feature.featureSubHeading.toLowerCase().includes(searchProp) ||
            feature.featureDescription.toLowerCase().includes(searchProp)){
                return feature
            }        
        })

        const filteredProduct = products.filter(product => {
            const searchProduct = this.state.searchValue.toLocaleLowerCase();
             if(product.productName.toLowerCase().includes(searchProduct) || 
             product.productSummary.toLowerCase().includes(searchProduct)
             ){
                 return product
             }
            })

        const onChangeHandler = e => {
            const value = e.target.value
            this.setState ({
                searchValue:value
            })           
        }
        return (
            <div>
                <div className="container-fluid">
                <SearchBox 
                value={this.state.searchValue}
                onChange={onChangeHandler}
                />
                <h1>Dashboard</h1>
               {intros.map(intro => (<IntroItem  key={intro.id} intro={intro}/>))} 
               {filteredFeature.map(feature => (<FeatureItem key={feature.featureIdentifier} feature={feature} />))}

               {filteredProduct.map(prod => (<ProductItem key={prod.productIdentifier} product={prod}/>))}
                </div>
           
            </div>
        )
    }
}

Dashboard.propTypes = {
    feature : PropTypes.object.isRequired,
    getFeatures: PropTypes.func.isRequired,
    getProducts: PropTypes.func.isRequired,
    product : PropTypes.object.isRequired,
    intro: PropTypes.object.isRequired

   // featureTask: PropTypes.object.isRequired,
   // getFeatureTask: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    feature: state.feature,
    product: state.product,
    intro: state.intro
 
   // featureTask: state.featureTask
})
export default connect(mapStateToProps, {getFeatures, getProducts, getAbouts, getIntros})(Dashboard)
