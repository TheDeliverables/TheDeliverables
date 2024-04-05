import React from 'react'
import './ProductKnowledgeBase.scss'

export default function ProductKnowledgeBase() {
  return (
    <main>
      <section className='product'>
        <section className='product__container'>
          <h1 className='product__heading'>
            Product Knowledge Base
          </h1>
        </section>
        <section className='product__container'>
          <h3 className='product__text'>
           Product Pamphlets
          </h3>
          <div className='product__card'></div>
        </section>
        <section className='product__container'>
          <h3 className='product__text'>
            How-To Videos
          </h3>
          <div className='product__card'></div>
        </section>
        <section className='product__container'>
          <h3 className='product__text'>
            Articles
          </h3>
          <div className='product__card'></div>
        </section>  
      </section>
      
    </main>
  )
}
