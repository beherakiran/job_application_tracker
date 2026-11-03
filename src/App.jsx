import { Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import Dashboard from './pages/Dashboard'
import Applications from './pages/Applications'
import AddApplication from './pages/AddApplication'
import ApplicationDetails from './pages/ApplicationDetails'
import ExploreJobs from './pages/ExploreJobs'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/add-application" element={<AddApplication />} />
        <Route path="/application/:id" element={<ApplicationDetails />} />
        <Route path="/explore-jobs" element={<ExploreJobs />} />
      </Route>
    </Routes>
  )
}

export default App