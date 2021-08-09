import React, { Component } from 'react'
import FeatureItem from './Feature/FeatureItem'
import {connect} from "react-redux";
import { getFeatures} from '../actions/FeatureActions';
import PropTypes from "prop-types"
import SearchBox from './Layout/SearchBox';
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
    //this.props.getFeatureTask();
}

    render() {
        let {features} = this.props.feature
       const filteredFeature = features.filter(feature => {
           const searchProp = this.state.searchValue.toLocaleLowerCase();
            if(feature.featureHeading.toLowerCase().includes(searchProp) || 
            feature.featureSubHeading.toLowerCase().includes(searchProp) ||
            feature.featureDescription.toLowerCase().includes(searchProp)){
                return feature
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
               {filteredFeature.map(feature => (<FeatureItem key={feature.featureIdentifier} feature={feature} />))}
                </div>
           
            </div>
        )
    }
}

Dashboard.propTypes = {
    feature : PropTypes.object.isRequired,
    getFeatures: PropTypes.func.isRequired,
   // featureTask: PropTypes.object.isRequired,
   // getFeatureTask: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    feature: state.feature,
   // featureTask: state.featureTask
})
export default connect(mapStateToProps, {getFeatures})(Dashboard)
