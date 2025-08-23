import {useRoutes} from 'react-router-dom'
import Creators from './Pages/Creators'
import Menu from './Components/Menu'
import Add from './Pages/Add'
import './App.css'

export default function App() {

  const element = useRoutes([
    {
      path: '/',
      element: <Creators />
    },
    {
      path: '/add',
      element: <Add />
    }

  ])
  
  return (
    <div className = 'App'>
      <Menu />
      {element}
    </div>
  )
} 

