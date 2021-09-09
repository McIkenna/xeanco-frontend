import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { deleteClient } from '../../actions/ClientActions';
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import styles from "./Client.module.css"
export class ClientItem extends Component {
    onDelete = id =>{
        this.props.deleteClient(id)
 }
    render() {
        const {client} = this.props;
        const clientImage = `data:image/jpeg;base64,${client.clientImg}`
        return (
    <div>
    <img className={styles.card_img_top} src={clientImage} alt="Card image cap"/>
    <p className={styles.card_text}>{client.clientName}</p>
    <Link to={`/updateClient/${client.id}`} className="btn btn-outline-secondary me-2" disabled>Update</Link>
    <button className="btn btn-danger" onClick={this.onDelete.bind(this, client.id)}>Delete</button>
  </div>
   
        
        )
    }
}
ClientItem.propTypes = {
    deleteClient: PropTypes.func.isRequired
}
export default connect(null, {deleteClient})(ClientItem)
