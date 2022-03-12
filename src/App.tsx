import './App.css'
import logo from './logo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello to <a className='App-link' href='https://dev.to/this-is-learning/series/16773' target="_blank">{`VsCode Tips & Tricks!`}</a></p>

        <small>Powered by <a className='App-link' href='https://github.com/Puppo' target="_blank">Puppo</a> with <a className='App-link' href='https://dev.to/this-is-learning' target="_blank">This is Learning</a></small>
      </header>
    </div>
  )
}

export default App
