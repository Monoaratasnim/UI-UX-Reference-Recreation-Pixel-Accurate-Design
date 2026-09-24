import { Navigate, Route, Routes } from 'react-router-dom'
import RideTripDetails from './components/RideTripDetails.jsx'
import ArtShowcase from './components/ArtShowcase.jsx'
import TravelLanding from './components/TravelLanding.jsx'
import FinanceLanding from './components/FinanceLanding.jsx'

function App() {
  return (
    <Routes>
      <Route path="/ride-trip-details" element={<RideTripDetails />} />
      <Route path="/art-showcase" element={<ArtShowcase />} />
      <Route path="/travel-landing" element={<TravelLanding />} />
      <Route path="/finance-landing" element={<FinanceLanding />} />
      <Route path="*" element={<Navigate to="/travel-landing" replace />} />
    </Routes>
  )
}

export default App