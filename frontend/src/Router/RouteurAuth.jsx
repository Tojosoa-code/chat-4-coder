import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Auth/Login'
import Register from '../Pages/Auth/Register'
import Error from '../Page404/Error'

export default function RouteurAuth() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register/>} />
        <Route path='*' element={<Error />}/>
      </Routes>
    </>
  )
}
