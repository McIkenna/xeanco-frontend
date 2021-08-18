import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types"
import { getAbouts } from '../../actions/AboutActions';
import { deleteAbout } from '../../actions/AboutActions';

export class About extends Component {
    onDelete = id =>{
        this.props.deleteAbout(id)
 }
    componentDidMount(){
         this.props.getAbouts();
         //this.props.getFeatureTask();
     }

    render() {
        const {abouts} = this.props.about;
        return (
    <div className="contianer-fluid">
   {abouts.map((about) => (
         <div className="contianer-fluid" key={about.id}>
         <div className="card">
         <div className="card-header">{about.aboutName}</div>
       <div className="card-body">
         <h4 className="card-title">{about.aboutHeading}</h4>
         <h5 className="card-title">{about.aboutSubHeading}</h5>
         <p className="card-text">{about.aboutDescription}</p>
       </div>
       </div>
       <button className="btn btn-danger" onClick={this.onDelete.bind(this, about.id)}>Delete</button>
        <Link to={`/updateAbout/${about.id}`} className="btn btn-outline-secondary me-2" disabled>Update</Link>
       </div>
   ))}
</div>
        )
    }
}

About.propTypes = {
    deleteAbout: PropTypes.func.isRequired,
    getAbouts: PropTypes.func.isRequired,
    about : PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    about : state.about
})
export default connect(mapStateToProps, {getAbouts, deleteAbout})(About)
