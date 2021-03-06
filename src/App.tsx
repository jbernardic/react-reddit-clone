import Navbar from './components/Navbar';
import Trending from './components/Trending';
import Posts from './components/Posts';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  window.scrollTo(0, 0);
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />
    <Navbar/>
    <div className="content">
      <Trending/>
      <div className="grid">
        <Posts/>
        <Sidebar/>
      </div>
    </div>
    </>
  );
}

export default App;
