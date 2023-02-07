import logo from './logo.svg';
import './App.css';
import Navigation from './components/navbar';
import HeroSection from './components/hero-section';
import Cards from './components/card';
import data from './data';
function App() {
  const card=data.map(item=>{
    return(
    <Cards 
    key={item.id}
    {...item}

 />
    )
  })

  return (
    <div>
    <Navigation />
    <HeroSection />
    <section className='cards-list'>
      {card}
    </section>
    </div>
  );
}

export default App;
