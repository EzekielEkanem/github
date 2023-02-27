import './App.css';
import Restaurant from './components/Restaurant'

const App = () => {

  return (
    <div className="App">
      <img src="../restaurant_pic/top image.jpeg" alt="top image" className='top_image' />
      <h1>Top Restaurants near Raymond Avenue</h1>
      <h2>See all your favourites go-to options for having a sumptuous meal
        at Raymond Avenue, Poughkeepsie, New York
      </h2>
      <Restaurant />
    </div>
  )
}

export default App
