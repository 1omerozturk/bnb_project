import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useToken from './hooks/useToken'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import { useSelector } from 'react-redux'
import Nft from './pages/Nft'
import Admin from './pages/Admin'

function App() {
  const [token] = useToken()

  const { modal } = useSelector((state) => state.modal)
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        {token?.token && <Navbar />}
        {modal && <Modal />}
        <Routes>
          <Route
            path="/"
            element={!token?.token ? <Navigate to={'/auth'} /> : <Home />}
          />
          <Route path="/auth" element={!token?.token ? <Auth /> : <Home />} />

          <Route path="/nft" element={<Nft />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App
