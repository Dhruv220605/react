import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
  {
    img: 'https://i.pinimg.com/736x/3c/a4/89/3ca489c256176f86dc3dbd0d17171f6f.jpg',
    intro: 'Omen',
    color: '#1E1943',
    tag: 'Controller, teleportation and vision denial specialist'
  },
  {
    img: 'https://i.pinimg.com/1200x/bc/45/32/bc453278cb228a97749f0f1c32809d45.jpg',
    intro: 'Reyna',
    color: '#331C47',
    tag: 'Duelist, high frag potential, thrives on kills'
  },
  {
    img: 'https://i.pinimg.com/736x/39/55/ac/3955ac01e8bd5fb4f4170ad2abef65df.jpg',
    intro: 'Phoenix',
    color: '#F25825',
    tag: 'Duelist, fire abilities, self-healing and aggressive entry'
  },
  {
    img: 'https://i.pinimg.com/1200x/f5/5b/17/f55b17e7db2dfabc74880588796407b9.jpg',
    intro: 'Sova',
    color: '#18214C',
    tag: 'Initiator, recon expert, reveals enemy positions'
  },
  {
    img: 'https://i.pinimg.com/736x/10/e3/e4/10e3e419b97f86dd3ad7c1d959187776.jpg',
    intro: 'Sage',
    color: '#078764',
    tag: 'Sentinel, healer, can revive teammates and control areas'
  },
  {
    img: 'https://i.pinimg.com/736x/87/26/bf/8726bff986046d431717b8715a52f0d7.jpg',
    intro: 'Raze',
    color: '#ED3726',
    tag: 'Duelist, explosive damage and area control'
  },
  {
    img: 'https://i.pinimg.com/1200x/f9/71/1a/f9711ab6e84537feaf94c6d7aa01dd8b.jpg',
    intro: 'Killjoy',
    color: '#003616',
    tag: 'Sentinel, uses gadgets and turrets for defense'
  },
  {
    img: 'https://i.pinimg.com/1200x/5a/25/80/5a25808edfad818fd3a30614f91525c7.jpg',
    intro: 'Cypher',
    color: '#323137',
    tag: 'Sentinel, surveillance and trap-based gameplay'
  },
  {
    img: 'https://i.pinimg.com/736x/50/ae/e5/50aee530f0ca9e24dba186c690907923.jpg',
    intro: 'Viper',
    color: '#14472B',
    tag: 'Controller, toxic screens and area denial expert'
  },
  {
    img: 'https://i.pinimg.com/736x/e2/02/26/e202262221a8160825e488867a6ec199.jpg',
    intro: 'Jett',
    color: '#354258',
    tag: 'Duelist, fast mobility, dash and smokes specialist'
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
