import './ChannelPage.scss';
import { Link } from 'react-router-dom';
import Arrows from '../../components/Arrows/Arrows';
//imgs
import channelbg from '../../imgs/channelbg.png'
import channelbg2x from '../../imgs/channelbg@2x.png'
import margaret from '../../imgs/margaret.png'
import SearchIco from '../../imgs/Search.png'
import chennelImg from '../../imgs/channelimg.png'
import flora from '../../imgs/flora.png'
import violet from '../../imgs/violet.png'
import phillip from '../../imgs/phillip.png'
//components
import Sidebar from '../../components/Sidebar/Sidebar';
import RenderVideos from '../../components/RenderVideos/RenderVideos';
function ChannelPage(){
    return(
            <div className="channel">
                <Sidebar/>
                <div className="channel-main">
                    <img src={channelbg} srcSet={`${channelbg} 1x,${channelbg2x} 2x`} alt="img" className="channel-main__bg" width="95%" />
                    <div className="recomended channel-main__user">
                        <Link to="/channel" className="recomended-user ">
                            <img src={margaret} alt="img" width="50px" height="50px"/>
                            <div>
                                <h3 className="recomended-user__name">Margaret Phelps</h3>
                                <p className="recomended-user__followers">245K subscribed</p>
                            </div>
                        </Link>
                        <span className="subsc">Subscribe 2.3m</span>

                    </div>
                    <div className="channel-content">
                        <div className="channel-content__left">
                            <ul className="navlink-list">
                                <li className="navlink-list__item">
                                    <Link to="/channel" className="navlink-list__link first">
                                        Home
                                    </Link>
                                </li>
                                <li className="navlink-list__item">
                                    <Link to="/channel" className="navlink-list__link">
                                        Video
                                    </Link>
                                </li> 
                                <li className="navlink-list__item">
                                    <Link to="/channel" className="navlink-list__link">
                                        Playlists
                                    </Link>
                                </li>
                                <li className="navlink-list__item">
                                    <Link to="/channel" className="navlink-list__link">
                                        Channels
                                    </Link>
                                </li>
                                <li className="navlink-list__item">
                                    <Link to="/channel" className="navlink-list__link">
                                        Discussions
                                    </Link>
                                </li>
                                <li className="navlink-list__item">
                                    <Link to="/channel" className="navlink-list__link">
                                        About
                                    </Link>
                                </li>
                                <li className="navlink-list__item">
                                    <Link to="/channel" className="navlink-list__link">
                                        <img src={SearchIco} alt="img" className="SearchIco"/>
                                    </Link>
                                </li>

                            </ul>
                            <Link to="/video" className="video-link">
                                <div className="video-content">
                                    <img  src={chennelImg} alt="img" className="video-content__img"/>
                                <div className="video-content__about">
                                    <h2 className="video-content__title">Choosing The Best Audio Player Software For Your Computer</h2>
                                    <p className="video-content__text">Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. </p>
                                    <p className="video-content__text video-content--followers">11k views  ·  6 months ago</p>
                                </div>

                                </div>
                             </Link>

                        </div>
                        <div className="channel-content__right">
                            <p className="channel-content__recomended">Recommended channel</p>
                            <ul className="blog-list">
                                <li className="blog-list__item">
                                    <Link to="/channel" className="blog-list__link">
                                        <img src={flora} alt="img" className="blog-list__img" />
                                        <p className="blog-list__user">Flora Benson</p>
                                    </Link>
                                </li>
                                <li className="blog-list__item">
                                    <Link to="/channel" className="blog-list__link">
                                        <img src={violet} alt="img"  className="blog-list__img" />
                                        <p className="blog-list__user">Violet Cobb</p>
                                    </Link>
                                </li>
                                <li className="blog-list__item">
                                    <Link to="/channel" className="blog-list__link">
                                        <img src={phillip} alt="img"  className="blog-list__img" />
                                        <p className="blog-list__user">Phillip Mullins</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="recomended channel-user-margaret">
                    <div className="recomended-user">
                        <h3 className="recomended-user__name">Margaret Phelps videos</h3>
                    </div>
                    <Arrows/>
                    </div>
                    <RenderVideos/>
                </div>
            </div>
    )
}
export default ChannelPage