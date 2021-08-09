import React, { Component } from 'react'
import { getFeatureTask } from '../../actions/FeatureActions'
import {connect} from "react-redux";
import PropTypes from "prop-types"

export class FeatureTaskItem extends Component {

    componentDidMount(){
        const {id} = this.props.match.params;
         this.props.getFeatureTask(id);
         //this.props.getFeatureTask();
     }
    render() {

        const {feature_task} = this.props.featureTask;
        const featureTaskImage = `data:image/jpeg;base64,${feature_task.image}`
      
        return (
            <div className="container-fluid">
            <h1>{feature_task.headline}</h1>
            <img src={featureTaskImage} alt="..."/>
                
      <p>{feature_task.summary}</p>
    </div>

        )
    }
}

FeatureTaskItem.propTypes = {
    featureTask: PropTypes.object.isRequired,
   getFeatureTask: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
 featureTask: state.featureTask
})

export default connect( mapStateToProps,{getFeatureTask})(FeatureTaskItem)
