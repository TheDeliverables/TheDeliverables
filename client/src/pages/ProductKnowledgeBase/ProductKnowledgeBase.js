import React, { useState, useEffect } from 'react'
import './ProductKnowledgeBase.scss'
import axios from "axios"
import ArticleCard from '../../components/ArticleCard/ArticleCard';


export default function ProductKnowledgeBase() {


  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/helper/1/'
        );
        console.log(response.data)

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
        console.log(response.data)

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
        console.log(response.data)

      } catch (error) {
        console.error('Failed to fetch video', error);
      }
    };

    fetchArticle();

  }, []);

  return (
    <main>
      <section className='product'>
          <h1 className='product__heading'> Product Knowledge Base </h1>

        <section className='product__container'>
          <h1 className='product__container-heading'>Product Pamphlets</h1>
          <section className='product__container-cards' >
            <ArticleCard />
            <ArticleCard />
          </section>
        </section>

        <section className='product__container'>
          <h1 className='product__container-heading'>How-To Videos</h1>
          <section className='product__container-cards' >
            <ArticleCard />
            <ArticleCard />
          </section>
        </section>

        <section className='product__container'>
          <h1 className='product__container-heading'>Article</h1>
          <section className='product__container-cards' >
            <ArticleCard />
            <ArticleCard />
          </section>
        </section>

      </section>
    </main>
  )
}
