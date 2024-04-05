import React, { useState, useEffect } from 'react'
import './ProductKnowledgeBase.scss'
import axios from "axios"
import ArticleCard from "../../components/ArticleCard/ArticleCard";


export default function ProductKnowledgeBase() {
  const [products, setProducts] = useState([])
  const [videos, setVideos] = useState([])
  const [articles, setArticles] = useState([])
  const [details, setProductsDetails] = useState([])
  const [productDetails, setProductsDetailsDetails] = useState([])
  const [videoDetails, setVideoDetails] = useState([])
  const [articleDetails, setArticleDetails] = useState([])



  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await axios.get(
                'http://localhost:8080/helper/'
            );
            console.log("PRODUCTS",response)
            setProducts(response.data)

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
            setProductsDetails(response.data)
            setProductsDetailsDetails(response.data[0])
            setVideoDetails(response.data[1])
            setArticleDetails(response.data[2])

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
          setVideos(response.data)

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
          setArticles(response.data)

      } catch (error) {
          console.error('Failed to fetch artlces', error);
      }
  };

  fetchArticle();

}, []);
  console.log("product details",productDetails)
  console.log("video details",videoDetails)
  console.log("article details",articleDetails)


  return (
    <main>
      <section className='product'>
          <h1 className='product__heading'> Product Knowledge Base </h1>

        <section className='product__container'>
          <h1 className='product__container-heading'>Product Pamphlets</h1>
          <section className='product__container-cards' >
              {productDetails.map((product) => (
                  <ArticleCard type="pamplet" image={product.imageURL} itemName={product.itemName} description={product.description} id={product.id} />
              ))}
          </section>
        </section>

        <section className='product__container'>
          <h1 className='product__container-heading'>How-To Videos</h1>
          <section className='product__container-cards' >
                {videoDetails.map((product) => (
                  <ArticleCard type="video" image={product.videoURL} itemName={product.title} description={product.shortDescription} id={product.id} />
              ))}
          </section>
        </section>

        <section className='product__container'>
          <h1 className='product__container-heading'>Article</h1>
          <section className='product__container-cards' >
               {articleDetails.map((product) => (
                  <ArticleCard type="article" image={product.imageURL} itemName={product.articleTitle} description={product.author} id={product.id} />
              ))}
          </section>
        </section>

      </section>
    </main>
  )
}