import "./App.scss";
import { Switch,Route } from 'react-router-dom'
//components
import Header from "./components/Header/Header";
//pages
import HomePage from "./pages/Home/HomePage";
import ChannelPage from "./pages/Channel/ChannelPage";
import VideoPage from "./pages/Video/VideoPage";

function App() {
  return (
   <div className="app-wrapper">
     <Header/>
     {/* <Sidebar/> */}
     <Switch>
       <Route path="/" component={HomePage} exact/>
       <Route path="/channel" component={ChannelPage} />
       <Route path="/video" component={VideoPage} />


     </Switch>


   </div>
     
  );
}

export default App;
