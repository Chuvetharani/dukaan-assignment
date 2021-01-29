import Head from './components/Head'
import './components/Head.css'
import './components/Bestsellers.css'
import './App.css';
import Bestsellers from './components/Bestsellers';
import List from './components/List'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div className="App">
      <Head />
      <Bestsellers/>
      <List/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
