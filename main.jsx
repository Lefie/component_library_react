import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Badges from './components/Badges';
import BadgesDisplay from './components_display/BadgesDisplay';

function Home() {

    return (
        <>
         <div className='components-container'>
                <h1>Components List</h1>
                <div className="components-list">
                    <Link to="/badges"><div className='item'>Badges</div></Link>
                    <a href="#"><div className='item'>Banner</div></a>
                    <a href="#"><div className='item'>Cards</div></a>
                </div>
                
         </div>
        </>
    )

}

function App() {



    return (
    <BrowserRouter>
        <>
            <div className="component-preview">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/badges" element={<BadgesDisplay />} />
            </Routes>
          </div>
        </>
    </BrowserRouter>
    )
}


createRoot(document.getElementById('root')).render(
   <App />
)
