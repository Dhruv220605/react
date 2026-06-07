import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="Parent">
      <Card user="Envy" age={25} img="https://i.pinimg.com/736x/39/c7/1d/39c71d243cd8bfeda90143f36e51525f.jpg" />
      <Card user="Aizen" age={33} img="https://i.pinimg.com/736x/4e/4c/c4/4e4cc49c12403b436ce94cd2f5db3d27.jpg" />
      <Card user="Midoriya" age={30} img="https://i.pinimg.com/736x/fd/64/03/fd6403b53d50f3a3bb66e4b3a43f4c3e.jpg" />
      <Card user="Dandadan" age={35} img="https://i.pinimg.com/736x/ab/c7/e8/abc7e86dfc1b4b01b9197b9d2c01393c.jpg" />
    </div>
  )
}

export default App
