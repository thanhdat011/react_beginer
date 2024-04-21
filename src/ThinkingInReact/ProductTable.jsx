import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export class ProductTable extends Component {
  render() {
    const { productList, searchText, inStock } = this.props
    let lastCategory = null
    const rows = []
    productList.forEach((productItem) => {
      if (inStock && !productItem.stocked) {
        return
      }
      if (productItem.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
        return
      }

      if (productItem.category != lastCategory) {
        rows.push(<ProductCategoryRow key={productItem.category} category={productItem.category} />)
      }
      rows.push(<ProductRow key={productItem.name} product={productItem} />)
      lastCategory = productItem.category
    })

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
          {/* <ProductCategoryRow />
          <ProductRow /> */}
        </tbody>
      </table>
    )
  }
}

export default ProductTable
