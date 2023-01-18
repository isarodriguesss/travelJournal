import './App.css'
import data from "./data"
import Navbar from './components/Navbar'
import Card from './components/Card'

export default function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <section className='card--list'>
        {cards}
      </section>
    </div>
  )
}
