import "./ArticleCard.scss"

import harnessImg from '../../assets/images/helper_Images/pamphlet_HarnessPDF.png'

function ArticleCard(props) {
    console.log(props.image)
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
                <button>View {props.type} onClick={onClickHandler}</button>
            </div>
        </>
    )
}

export default ArticleCard;
