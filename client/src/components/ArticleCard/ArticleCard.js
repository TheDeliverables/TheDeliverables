import "./ArticleCard.scss"

import harnessImg from '../../assets/images/helper_Images/pamphlet_HarnessPDF.png'

function ArticleCard() {
    return (
        <>
            <div className="card" >
                <img src={harnessImg} />
                <div className="card__textContent" >
                    <p>"Pamphlet Title"</p>
                    <p>Pamphlet Sub Title</p>
                </div>
                <button>View PROP_TYPE</button>
            </div>
        </>
    )
}

export default ArticleCard;
