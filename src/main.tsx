import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes , BrowserRouter} from "react-router";

import './index.css'
// import App from './App.tsx'
import Footer from './layout/Footer.tsx'
import Header from './layout/Header.tsx'
import About from './pages/About.tsx'
import Post from './pages/Post.tsx'
import NotFound from './pages/NotFound.tsx'
import PostDetail from './pages/PostDetail.tsx';
import Home from './pages/Home.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} >
          <Route path=':id' element={<PostDetail />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)
