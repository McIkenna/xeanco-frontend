import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LinkButton from '../LinkButton'

export class EditorBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
            <form className="container-fluid justify-content-start">
                <LinkButton to="/addFeature" title="Create Feature" className="btn btn-outline-secondary me-2" />
                <LinkButton to="/addProduct" title="Create Product" className="btn btn-outline-primary me-2" />
                <LinkButton to="/addAbout" title="Create About" className="btn btn-outline-primary me-2" />
                <LinkButton to="/addIntro" title="Create Intro" className="btn btn-outline-primary me-2" />
            <button className="btn btn-outline-success me-2" type="button">Main button</button>
            <button className="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
        </form>
        </nav>
        )
    }
}

export default EditorBar
