import {useRoutes} from 'react-router-dom'
import Creators from './Pages/Creators'
import Menu from './Components/Menu'
import Add from './Pages/Add'
import Edit from './Pages/Edit'
import CreatorDetails from './Pages/CreatorDetails'
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
    },
    {
      path: '/edit/:id',
      element: <Edit />
    },
    {
      path:'/:id',
      element: <CreatorDetails />
    }
  ])
  
  return (
    <div className = 'App'>
      <Menu />
      {element}
    </div>
  )
} 

