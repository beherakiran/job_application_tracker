import { Link, Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <nav className="flex gap-6 p-4 bg-gray-100">
        <Link to="/">Dashboard</Link>
        <Link to="/applications">Applications</Link>
        <Link to="/add-application">Add Application</Link>
        <Link to="/explore-jobs">Explore Jobs</Link>
      </nav>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout