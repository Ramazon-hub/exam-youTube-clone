import './BigVideos.scss';
import useRender from '../../hooks/useRender';
import { Link } from 'react-router-dom';
function BigVideos(){
   const [Videos] = useRender()
    return(
        <>
        {
            Videos.length>0 && <ul className="videos-list">
                {
                    Videos.filter(e=>{
                        return e.albumId === 1;
                    }).map((el)=>(
                       <li className="videos-list__item" key={el.id}>
                           <Link to={`/video/${el.id}`} className="videos-list__link" >
                               <img src={el.url} className="bigVideo-list__img" alt="img" />
                               <h4 className="videos-list__link__title">Dude You Re Getting A Telescope</h4>
                                <div className="videos-list__item__about">
                                    <span className="videos-list__link__text">80k views  ·  3 days ago</span>
                                    <span className="videos-list__link__text">Dollie Blair</span>
                                </div>
                           </Link>
                       </li>
                    ))
                
                }
            </ul>
        }
        
        </>

    )
}
export default BigVideos