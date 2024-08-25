import { Route, Routes } from 'react-router-dom'
import './App.css'
import SideBar from './Componets/SideBar/SideBar'
import Order from './Componets/Order/Order'
import Inventory from './Componets/Inventory/Inventory'
import Catalog from './Componets/Catalog/Catalog'
import Home from './Componets/Home/Home'
import EditeData from './Componets/EditeData/EditeData'

function App() {


  return (
    <>
      <SideBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/upload' element={<Catalog />} />
        <Route path='/editeData' element={<EditeData />} />
      </Routes>
    </>
  )
}

export default App
