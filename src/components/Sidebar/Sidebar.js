import './Sidebar.scss';
import Gussie from '../../imgs/Gussie.png'
import bella from '../../imgs/bella.png'
import eunice from '../../imgs/eunice.png'
import emma from '../../imgs/emma.png'
import leah from '../../imgs/leah.png'
import margaret1 from '../../imgs/margaret1.png'


import { NavLink } from 'react-router-dom';
import { ChevronDawnIco, FavouriteIco, FireIco, GamesIco, HistoryIco, HomeIco, LibraryIco, LikeIco, MusicIco, Sozlamalar, SubscriptionsIco, WatchIco } from '../../assets/SVGs/Svgs';
function Sidebar(){
    return(
        <div className="sidebar">
            <ul className="sidebar-list">
                <li className="sidebar-list__item">
                    <NavLink to="/"  activeClassName="link">
                        <HomeIco/>
                        <span className="sidebar-list__text red">Home</span>
                    </NavLink>
                        
                </li>
                <li className="sidebar-list__item">
                    <NavLink to="/" className="link">
                        <FireIco/>
                        <span className="sidebar-list__text">Trending</span>
                    </NavLink>
                </li>
                <li className="sidebar-list__item">
                    <NavLink to="/" className="link">
                        <SubscriptionsIco/>
                        <span className="sidebar-list__text">Subscriptions</span>
                    </NavLink>
                </li>
                <li className="sidebar-list__item">
                    <NavLink to="/" className="link">
                        <LibraryIco/>
                        <span className="sidebar-list__text">Library</span>
                    </NavLink>
                </li>
                <li className="sidebar-list__item">
                    <NavLink to="/" className="link">
                        <HistoryIco/>
                        <span className="sidebar-list__text">History</span>
                    </NavLink>
                </li>
                <li className="sidebar-list__item">
                    <NavLink to="/" className="link">
                        <WatchIco/>
                        <span className="sidebar-list__text">Watch later</span>
                    </NavLink>
                </li>
                <li className="sidebar-list__item">
                    <NavLink to="/" className="link">
                        <FavouriteIco/>
                        <span className="sidebar-list__text">Favourites</span>
                    </NavLink>
                </li>
                <li className="sidebar-list__item">
                    <NavLink to="/" className="link">
                        <LikeIco/>
                        <span className="sidebar-list__text">Liked videos</span>
                    </NavLink>
                </li>
                <li className="sidebar-list__item">
                    <NavLink to="/" className="link">
                        <MusicIco/>
                        <span className="sidebar-list__text">Music</span>
                    </NavLink>
                </li>
                <li className="sidebar-list__item">
                    <NavLink to="/" className="link">
                        <GamesIco/>
                        <span className="sidebar-list__text">Games</span>
                    </NavLink>
                </li>
                <li className="sidebar-list__item">
                    <NavLink to="/" className="link">
                        <ChevronDawnIco/>
                        <span className="sidebar-list__text">Show more</span>
                    </NavLink>
                </li>  
            </ul>

             <h3 className="subscriptions">Subscriptions</h3>

            <ul className="sidebar-list"> 
                <li className="sidebar-list__item">
                    <img src={Gussie} alt="img"/>
                    <NavLink to="/channel" className="sidebar-list__navlink" activeClassName="active-navlink">Gussie Singleton</NavLink>
                </li>
                <li className="sidebar-list__item">
                    <img src={margaret1} alt="img"/>
                    <NavLink to="/channel" className="sidebar-list__navlink" activeClassName="active-navlink">Nora Francis</NavLink>
                </li>
                <li className="sidebar-list__item">
                    <img src={bella} alt="img"/>
                    <NavLink to="/channel" className="sidebar-list__navlink" activeClassName="active-navlink">Belle Briggs</NavLink>
                </li>
                <li className="sidebar-list__item">
                    <img src={eunice} alt="img"/>
                    <NavLink to="/channel" className="sidebar-list__navlink" activeClassName="active-navlink">Eunice Cortez</NavLink>
                </li>
                <li className="sidebar-list__item">
                    <img src={emma} alt="img"/>
                    <NavLink to="/channel" className="sidebar-list__navlink" activeClassName="active-navlink">Emma Hanson</NavLink>
                </li>
                <li className="sidebar-list__item">
                    <img src={leah} alt="img"/>
                    <NavLink to="/channel" className="sidebar-list__navlink" activeClassName="active-navlink">Leah Berry</NavLink>
                </li>
                <li className="sidebar-list__item sidebar-list__item--last">
                    <Sozlamalar/>
                <span className="sidebar-list__text">Settings</span>

                </li>
            </ul>
        </div>
    )
}
export default Sidebar