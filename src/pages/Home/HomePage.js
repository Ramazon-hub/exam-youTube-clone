import "./HomePage.scss";
import Dollie from '../../imgs/Gussie.png';
import FoodDrink from '../../imgs/FoodDrink.png'

import Sidebar from "../../components/Sidebar/Sidebar";
// import { LeftArrow,RigthArrow } from "../../assets/SVGs/Svgs";
import RenderVideos from "../../components/RenderVideos/RenderVideos";
import BigVideos from "../../components/BigVideos/BigVideos";
import Arrows from "../../components/Arrows/Arrows";
import { Link } from "react-router-dom";
const HomePage = () => {
   
    return(
    <div className="home">
        <Sidebar/>
        <div className="home-video">
            <div className="recomended">
                        <Link to="/channel" className="recomended-user">
                            <img src={Dollie} alt="img" width="30px" height="30px"/>
                            <h3 className="recomended-user__name">Dollie Blair</h3>
                        </Link>
                    <Arrows/>
             </div>

                <RenderVideos/>

                <div className="recomended">
                    <div className="recomended-user">
                        <h3 className="recomended-user__name">Recomended</h3>
                    </div>
                    <Arrows/>
                </div>

            <BigVideos/>

                <div className="recomended">
                        <Link to="/channel" className="recomended-user">
                            <img src={FoodDrink} alt="img" width="30px" height="30px"/>
                            <h3 className="recomended-user__name">Food & Drink</h3>
                            <p className="recomended__foryou">Recommended channel for you</p>
                        </Link>
                        <span className="subsc">Subscribe 2.3m</span>
                    <Arrows/>
            </div>
            <RenderVideos/>
        </div>
    </div>
  );
};

export default HomePage;
