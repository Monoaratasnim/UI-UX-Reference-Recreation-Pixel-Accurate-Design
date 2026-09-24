import { Navigate, Route, Routes } from 'react-router-dom'
import RideTripDetails from './components/RideTripDetails.jsx'
import ArtShowcase from './components/ArtShowcase.jsx'
import TravelLanding from './components/TravelLanding.jsx'
import FinanceLanding from './components/FinanceLanding.jsx'
import RealEstateLanding from './components/RealEstateLanding.jsx'
import PricingPlans from './components/PricingPlans.jsx'
import DeveloperPortfolioLanding from './components/DeveloperPortfolioLanding.jsx'

function App() {
  return (
    <Routes>
      <Route path="/ride-trip-details" element={<RideTripDetails />} />
      <Route path="/art-showcase" element={<ArtShowcase />} />
      <Route path="/travel-landing" element={<TravelLanding />} />
      <Route path="/finance-landing" element={<FinanceLanding />} />
      <Route path="/real-estate-landing" element={<RealEstateLanding />} />
      <Route path="/pricing-plans" element={<PricingPlans />} />
      <Route path="/developer-portfolio" element={<DeveloperPortfolioLanding />} />
      <Route path="*" element={<Navigate to="/travel-landing" replace />} />
    </Routes>
  )
}

export default App