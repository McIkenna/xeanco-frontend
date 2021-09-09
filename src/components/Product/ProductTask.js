import React, { Component } from 'react'
import style from "./product.module.css"


export class ProductTask extends Component {

    render() {
      const {product_task} = this.props;
      const productTaskImage = `data:image/jpeg;base64,${product_task.productTskImg}`
      
        return (
          <div className={style.card_container} >
          <div className={style.card} style={{maxWidth: "100%"}} >
          <div className={style.card_inner}>
            <div className={style.leftSide}>
        <img src={productTaskImage} alt="...."/>
          </div>
          <div className={style.rightSide}>
      <div className={style.card_body}>
          <h4 className={style.card_title}>{product_task.productTskName}</h4>
          <p className={style.card_paragraph}>{product_task.productTskSummary}</p><br />
          
        </div>
      </div>
      
</div>
</div>

</div>
           
        )
    }
}



export default ProductTask
