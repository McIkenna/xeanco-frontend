import React from 'react'
import {Link} from "react-router-dom"

const CreateFeatureButton = () => {
    return (
        <React.Fragment>
            <Link to="/addFeature" className="btn btn-dark">Create Freatures</Link>
        </React.Fragment>
    )
}

export default CreateFeatureButton
