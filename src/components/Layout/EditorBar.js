import React, { Component } from 'react'
import CreateFeatureButton from '../Feature/CreateFeatureButton'

export class EditorBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
            <form className="container-fluid justify-content-start">
                <CreateFeatureButton  className="btn btn-outline-secondary me-2" />
            <button className="btn btn-outline-success me-2" type="button">Main button</button>
            <button className="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
        </form>
        </nav>
        )
    }
}

export default EditorBar
