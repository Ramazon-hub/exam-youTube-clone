import { Link } from 'react-router-dom';
import useRender from '../../hooks/useRender';
import './ForVideopage.scss';
function ForVideopage(){
    const [Videos] = useRender()
    return(
        <>
          {
            Videos.length>0 && <ul className="videoPage-list">
                {
                    Videos.filter(e=>{
                        return e.albumId === 10
                    }).map(e=>(
                        <Link to={`/video/${e.id}`} className="videoPage-list__link">
                            <li className="videoPage-list__item">
                                <img src={e.url} alt="img"  className="videoPage-list__img"/>
                                <h3 className="videoPage__title">Baby Monitor Technology</h3>
                                <div className="videoPage__about">
                                    <span className="videoPage__about__text">80k views  ·  3 days ago</span>
                                    <span className="videoPage__about__text">Dollie Blair</span>
                                </div>
                            </li>
                        </Link>
                    ))
                }
            </ul>

        }
        </>

    )
}
export default ForVideopage