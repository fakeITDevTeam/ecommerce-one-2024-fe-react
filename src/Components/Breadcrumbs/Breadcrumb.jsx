import React from 'react'
import './Breadcrumb.css'
import breadcrumb_arrow_icon from '../Assets/breadcrum_arrow.png'

export const Breadcrumb = (props) => {
  const {product} = props;
  return (
    <div className='breadcrumb'>
      HOME <img src={breadcrumb_arrow_icon} alt="" /> SHOP <img src={breadcrumb_arrow_icon} alt="" /> {product.category} <img src={breadcrumb_arrow_icon} alt="" /> {product.name}
    </div>
  )
}
