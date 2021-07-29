import './App.css';
import Card from './components/Card'
import Search from './components/Search'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <main className="container">
        <Card/>
        <Search/>
      </main>
    </>
  );
}

export default App;
