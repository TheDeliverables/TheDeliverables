import "./ArticleCard.scss"
import axios from "axios"
import React, { useState, useEffect } from 'react'
import Display from "../../components/Display/Display";

import harnessImg from '../../assets/images/helper_Images/pamphlet_HarnessPDF.png'

function ArticleCard(props) {
    const [products, setProducts] = useState([])
    const [videos, setVideoDetails] = useState([])
    const [articles, setArticleDetails] = useState([])
    const [details, setProductsDetails] = useState([])
    const [productDetails, setProductsDetailsDetails] = useState([])
    const [isShowingNew, setIsShowingNew] = useState(false)

    const [clickType, setclickType] = useState([])
    const [item, setitem] = useState([])


    useEffect(() => {
        const fecthVideo = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8080/helper/1/videos/' + props.id
                );
                setVideoDetails(response.data)
      
            } catch (error) {
                console.error('Failed to fetch video', error);
            }
        };
      
        fecthVideo();
      
      }, []);



      useEffect(() => {
        const fetchAll = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8080/helper/' + props.id
                );
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
        const fetchArticle = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:8080/helper/1/articles/' + props.id
                );
                setArticleDetails(response.data)
      
            } catch (error) {
                console.error('Failed to fetch artlces', error);
            }
        };
      
        fetchArticle();
      
      }, []);



    

    function handleClick(event){
        const id = event.target.id;
        setclickType(id)
        if(id === "video"){
            console.log("video")
            setitem(videos)
        }
        if(id === "pamplet"){
            console.log("pamplet")
            setitem(products)
        }
        if(id === "article"){
            console.log("article")
            setitem(articles)
        }
        console.log("here",item,clickType)
        setIsShowingNew(prevIsDeleting => !prevIsDeleting)
    }
    return (
        <>
              {isShowingNew &&
                 <Display type={clickType} item={item}/>
                }
            <div className="card" >
                <img src={props.image} />
                <div className="card__textContent" >
                    <p>{props.itemName}</p>
                    <p>{props.description}</p>
                </div>
                <button onClick={handleClick} id={props.type}>View {props.type}</button>
            </div>
        </>
    )
}

export default ArticleCard;
