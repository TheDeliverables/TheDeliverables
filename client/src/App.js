import {BrowserRouter, Routes, Route} from 'react-router-dom'  

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Article from './pages/Article/Article';
import Orders from './pages/Orders/Orders';
import ProductKnowledgeBase from './pages/ProductKnowledgeBase/ProductKnowledgeBase';
import Videos from './pages/Videos/Videos';

import './App.scss';

function App() {
  return(
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Orders />} />
      <Route path="/helper" element={<ProductKnowledgeBase />} />
      <Route path="/helper/:productid/:videoid" element={<Videos />}  />
      <Route path="/helper/:productid/:articleid" element={<Article />}   />
    </Routes>
    <Footer />
    </BrowserRouter>
    
  )
}

export default App;
