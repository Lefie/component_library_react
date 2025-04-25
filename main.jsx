import { createRoot } from 'react-dom/client'

function App() {

    return (
    <>
        <div className='components-container'>
            <h1>Components List</h1>
            <div className="components-list">
                <a href="#"><div className='item'>Badges</div></a>
                <a href="#"><div className='item'>Banner</div></a>
                <a href="#"><div className='item'>Cards</div></a>
            </div>
        </div>
    </>
    )
}

createRoot(document.getElementById('root')).render(
   <App />
)
