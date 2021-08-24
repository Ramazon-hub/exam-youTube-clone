import './RenderVideos.scss'
import useRender from '../../hooks/useRender';
import Video from "../Video/Video";
function RenderVideos(){
   const [Videos] = useRender()
    return(
        <>
            {
                Videos.length>0 && <ul className="videos-list">
                  {
                     Videos.filter(e=>{
                         return e.albumId === 4;
                     }).map((el)=>(
                         <Video key={el.id} img={el.url} id={el.id} />
                     ))
                  }
                </ul>
            }
        </>
    )
}
export default RenderVideos