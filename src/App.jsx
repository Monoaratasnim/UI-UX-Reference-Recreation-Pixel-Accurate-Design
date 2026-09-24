import { Navigate, Route, Routes } from 'react-router-dom'
import RideTripDetails from './components/RideTripDetails.jsx'
import ArtShowcase from './components/ArtShowcase.jsx'

function App() {
  return (
    <Routes>
      <Route path="/ride-trip-details" element={<RideTripDetails />} />
      <Route path="/art-showcase" element={<ArtShowcase />} />
      <Route path="*" element={<Navigate to="/ride-trip-details" replace />} />
    </Routes>
  )}

export default App