import './VideoPage.scss'
import foodDrink from '../../imgs/FoodDrink.png'
import ForVideopage from '../../components/ForVideopage/ForVideopage'
function VideoPage(){
    const onOf = ()=>{
        const btn = document.querySelector(".theme__play");
        btn.classList.toggle("on")
    }
    return(
        <div className="videoPage"> 
            <div className="videoPage__left">
                <div className="big-video">
                    <iframe width={560} height={315} src="https://www.youtube.com/embed/w7ejDZ8SWv8?start=7" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <h1 className="big-video__title">Dude You Re Getting A Telescope</h1>
                    <div className="big-video__statistik">
                        <span className="big-video__views">123k views</span>
                        <p className="big-video__like">123k</p>
                        <p className="big-video__dislike">435k</p>
                        <p className="big-video__share">435k</p>
                        <div className="points">
                            <div className="points__item"></div>
                            <div className="points__item"></div>
                            <div className="points__item"></div>
                        </div>
                    </div>

                </div>
                <div className="about-channel">
                    <img src={foodDrink} alt="img" className="about-channel__img"/>
                    <div className="about-channel__div">
                        <h3 className="about-channel__title">Food & Drink</h3>
                        <p className="about-channel__date">Published on 14 Jun 2019</p>
                        <p className="about-channel__text">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
                        <p className="about-channel__more">Show more</p>
                    </div>
                    <span className="subsc">Subscribe 2.3m</span>

                </div>


            </div>
            <div className="videoPage__right">
                <div className="autoplay">
                    <h1 className="videopage__next">Next</h1>
                    <div className="autoplay__box" >
                    <p className="autoplay__text">Autoplay</p>
                        <div className="theme__playground" onClick={onOf} >
                            <div className="theme__play" ></div>
                        </div>
                    </div>

                </div>
               <ForVideopage/>
            </div>
        </div>
    )
}
export default VideoPage