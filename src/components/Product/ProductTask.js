import React, { Component } from 'react'


export class ProductTask extends Component {

    render() {
      const {product_task} = this.props;
      const productTaskImage = `data:image/jpeg;base64,${product_task.productTskImg}`
      
        return (

            <div className="container py-4">
                <div className="card mb-3" style={{width: "540px"}}>
  <div className="row no-gutters">
    <div>
      <div className="col-md-4">
      </div>
      <div className="col-md-8">
        <div className="card-body">
        <img className="card-img-top" src={productTaskImage} alt="Card image cap"/>
          <h5 className="card-title">{product_task.productTskName}</h5>
          <p className="card-text">{product_task.productTskSummary}</p><br />
          <p className="card-text">{product_task.productTskDetails}</p>
        </div>
      </div>
</div>
  </div>
  </div>
</div>
           
        )
    }
}



export default ProductTask
