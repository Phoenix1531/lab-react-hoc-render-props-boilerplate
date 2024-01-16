import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import Renderprops from './components/Renderprops';
import LikePostHoc from './components/LikePostHoc';
import HOC from './components/HOC';
import LikeImageHoc from './components/LikeImageHOC';

const HocLikeImage = HOC(LikeImageHoc);
const HocLikePost = HOC(LikePostHoc);

function App() {
  return (
    <div>
      <div className='main'>
        <h1>Some Blog</h1>
        <br />
        {/* Like image and Like Post using render props */}
        <h2>With Render Props </h2>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <Renderprops render={(increase, count) => {
            return <LikeImage handleimgcount={increase} imagecount={count} />
          }} />
          <Renderprops render={(increase, count) => {
            return <LikePost handlepostcount={increase} postcount={count} />
          }} />
        </div>


        {/* Like image and Like Post using higher order components  */}
        <h2>With HOC</h2>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <HocLikeImage />
          <HocLikePost />
        </div>
      </div>
    </div>
  );
}

export default App;