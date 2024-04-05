import "./ArticleCard.scss"
import axios from "axios"
import React, { useState, useEffect } from 'react'

import harnessImg from '../../assets/images/helper_Images/pamphlet_HarnessPDF.png'

function ArticleCard(props) {
    const [products, setProducts] = useState([])
    const [videos, setVideos] = useState([])
    const [articles, setArticles] = useState([])
    const [details, setProductsDetails] = useState([])

    useEffect(() => {
        const fecthVideo = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8080/helper/1/videos/' + props.id
                );
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
                    'http://localhost:8080/helper/1/articles/' + props.id
                );
                setArticles(response.data)
      
            } catch (error) {
                console.error('Failed to fetch artlces', error);
            }
        };
      
        fetchArticle();
      
      }, []);



    function onClickHandler(){
        
    }
    return (
        <>
            <div className="card" >
                <img src={props.image} />
                <div className="card__textContent" >
                    <p>{props.itemName}</p>
                    <p>{props.description}</p>
                </div>
                <button onClick={onClickHandler} id={props.type}>View {props.type}</button>
            </div>
        </>
    )
}

export default ArticleCard;
