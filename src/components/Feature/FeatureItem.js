import React, { Component } from 'react'
import classes from "./feature.module.css"
import { Link } from 'react-router-dom';
import { deleteFeature } from '../../actions/FeatureActions';
import { connect } from 'react-redux';
import PropTypes from "prop-types"
export class FeatureItem extends Component {
    onDelete = id =>{
           this.props.deleteFeature(id)
    }
    render() {

        const {feature} = this.props;
        const featureImage = `data:image/jpeg;base64,${feature.featureImage}`

        return (
            <div className={classes.container}>
        <div className={classes.content}>
            <div className={classes.card}>
            <div className={classes.leftSide} data-aos="fade-right">
        <img src={featureImage} alt="..."/>
        </div>
            <div className={classes.rightSide} data-aos="fade-left">
              <div className={classes.title}>
              <h1 className={classes.label}>{feature.featureHeading}</h1>
                <h5>{feature.featureSubHeading}</h5>
                <p>{feature.featureDescription}</p>
              </div>
              <div className={classes.box}>
                <div
               >
                  <div className={classes.bar}></div>
                </div>
               <Link to={`/featureTask/${feature.featureIdentifier}`} className="btn btn-outline-secondary me-2" >View</Link>
               <Link to={`/updateFeature/${feature.featureIdentifier}`} className="btn btn-outline-secondary me-2" disabled>Update</Link>
               <button className="btn btn-danger" onClick={this.onDelete.bind(this, feature.featureIdentifier)}>Delete</button>
              </div>
            </div>          
          </div>
    </div>
    </div>
        )
    }
}

FeatureItem.propTypes = {
    deleteFeature: PropTypes.func.isRequired
}


export default connect(null, {deleteFeature})(FeatureItem)
