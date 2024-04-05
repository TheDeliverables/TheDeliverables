import React, { useState, useEffect } from 'react'
import './ProductKnowledgeBase.scss'
import axios from "axios"


export default function ProductKnowledgeBase() {


  useEffect(() => {
    const fetchAll = async () => {
        try {
            const response = await axios.get(
                'http://localhost:8080/helper/1/'
            );
            console.log(response)

        } catch (error) {
            console.error('Failed to fetch information', error);
        }
    };

    fetchAll();

}, []);


useEffect(() => {
  const fechVideo = async () => {
      try {
          const response = await axios.get(
              'http://localhost:8080/helper/1/videos/1'
          );
          console.log(response)

      } catch (error) {
          console.error('Failed to fetch video', error);
      }
  };

  fechVideo();

}, []);


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
