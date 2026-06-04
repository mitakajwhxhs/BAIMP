import { Navigate, useLocation } from 'react-router-dom'

export function ProtectedRoute({ children }) {
  const location = useLocation()
  const isAuthenticated = localStorage.getItem('baimp-admin-secret-session') === 'true'

  if (!isAuthenticated) {
    return <Navigate to="/admin-secret-panel" replace state={{ from: location.pathname }} />
  }

  return children
}
