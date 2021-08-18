import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import PropTypes from "prop-types"
import { deleteIntro } from '../../actions/IntroActions';

export class IntroItem extends Component {
    onDelete = id =>{
        this.props.deleteIntro(id)
 }
    render() {
        const {intro} = this.props;
        const introImage = `data:image/jpeg;base64,${intro.image}`
        return (
            <div className="container-fluid">
            <div className="jumbotron">
            <img src={introImage} alt="..."/>
            <h1 className="display-4">{intro.introName}</h1>
            <p className="lead">{intro.introDescription}</p>
          </div>
          <Link to={`/updateIntro/${intro.id}`} className="btn btn-outline-secondary me-2" disabled>Update</Link>
        <button className="btn btn-danger" onClick={this.onDelete.bind(this, intro.id)}>Delete</button>
          </div>
        )
    }
}

IntroItem.propTypes = {
    deleteIntro: PropTypes.func.isRequired,

}

export default connect(null, {deleteIntro})(IntroItem)
