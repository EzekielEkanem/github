import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>Chrismas Vacation in Abuja</h1>
      <h2>Welcome to Abuja, Daniel! Check out this calendar to see your 
        schedule for your chrismas' vacation.
      </h2>
      <Calendar />
    </div>
  )
}

export default App