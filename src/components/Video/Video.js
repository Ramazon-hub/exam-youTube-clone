import { Link } from 'react-router-dom'
import './Video.scss'
function Video({img,id}){
    return(
        <>
        <li className="videos-list__item">
            <Link to={`/video/${id}`} className="videos-list__link">
                <img src={img} alt="img" className="videos-list__item__img"/>
                <h4 className="videos-list__link__title">A Brief History Of Creation</h4>
                <div className="videos-list__item__about">
                    <span className="videos-list__link__text">80k views  ·  3 days ago</span>
                    <span className="videos-list__link__text">Dollie Blair</span>
                </div>
            </Link>
        </li>

        </>
    )
}
export default Video