import './Arrows.scss';
import { LeftArrow,RigthArrow } from "../../assets/SVGs/Svgs";

function Arrows(){
    return(
        <>
            <div className="recomended-arrows">
                        <div className="recomended-arrows__item"><LeftArrow/></div>
                        <div className="recomended-arrows__item"><RigthArrow/></div>
            </div>
        </>
    )
}
export default Arrows