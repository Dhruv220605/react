import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img:'https://i.pinimg.com/736x/39/20/21/39202174545c29bfbdb0bb981ed6e766.jpg',
      intro:'Satisfied',
      color:'blue',
      tag:'1'
    },
    {
      img:'https://i.pinimg.com/1200x/57/be/84/57be849433fc4628a2b82122fd2284d8.jpg',
      intro:'Underserved',
      color:'green',
      tag:'2'
    },
    {
      img:'https://i.pinimg.com/736x/09/04/88/090488cd968fc9b2f36565c891ff3602.jpg',
      intro:'Underbanked',
      color:'yellow',
      tag:'3'
    },
    {
      img:'https://i.pinimg.com/736x/39/20/21/39202174545c29bfbdb0bb981ed6e766.jpg',
      intro:'Satisfied',
      color:'grey',
      tag:'1'
    }
  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
