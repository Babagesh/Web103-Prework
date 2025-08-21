import {useRoutes} from 'react-router-dom'
import Creators from './Components/Creators'
import Menu from './Components/Menu'
import './App.css'

export default function App() {

  const element = useRoutes([
    {
      path: '/',
      element: <Creators />
    }

  ])
  
  return (
    <div className = 'App'>
      <Menu />
      {element}
      hello
    </div>
  )
} 

