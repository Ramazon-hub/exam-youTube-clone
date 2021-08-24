import './Header.scss';
import userPic from '../../imgs/UserPic.png'
import { Combined, Qongiroq, VideoIco, YoutubeIco } from '../../assets/SVGs/Svgs';

function Header(){
    return(
        <div className="header">
            <div className="menu">
                <div className="menu__line"></div>
                <div className="menu__line"></div>
                <div className="menu__line"></div>

            </div>
            <YoutubeIco/>
            <form className="header-form">
                <input type="text" className="header-form__input" placeholder="Search"/>
            </form>
            <ul className="header-icons-list">
                <li className="header-icons-list__item">
                <VideoIco />
                </li>
                <li className="header-icons-list__item">
                <Combined />
                </li>
                <li className="header-icons-list__item">
                <Qongiroq/>
                </li>
                <li className="header-icons-list__item">
                <img src={userPic} alt="img"/>
                </li>


            </ul>
    </div>
    )
}
export default Header