import React, { useState, useEffect } from 'react'
import './ProductKnowledgeBase.scss'
import axios from "axios"
import ArticleCard from '../../components/ArticleCard/ArticleCard';


export default function ProductKnowledgeBase() {


  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await axios.get(
                'http://localhost:8080/helper/'
            );
            console.log("PRODUCTS",response)

        } catch (error) {
            console.error('Failed to fetch information', error);
        }
    };

    fetchProducts();

}, []);


  useEffect(() => {
    const fetchAll = async () => {
        try {
            const response = await axios.get(
                'http://localhost:8080/helper/1/'
            );
            console.log("ALL:",response)

        } catch (error) {
            console.error('Failed to fetch information', error);
        }
    };

    fetchAll();

}, []);


useEffect(() => {
  const fecthVideo = async () => {
      try {
          const response = await axios.get(
              'http://localhost:8080/helper/1/videos/1'
          );
          console.log("VIDEOS",response)

      } catch (error) {
          console.error('Failed to fetch video', error);
      }
  };

  fecthVideo();

}, []);

useEffect(() => {
  const fetchArticle = async () => {
      try {
          const response = await axios.get(
              'http://localhost:8080/helper/1/articles/1'
          );
          console.log("ARTICLES",response)

      } catch (error) {
          console.error('Failed to fetch article', error);
      }
  };

  fetchArticle();

}, []);

  return (
    <main>
      <section className='product'>
        <section className='product__container'>
          <h1 className='product__heading'>
            Product Knowledge Base
          </h1>
          <ArticleCard />
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
