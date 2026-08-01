import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from '@apps/APPS-Components/theme-provider'
import { Footer } from '@apps/APPS-Components/footer'
import Home from './Home'
import Work from './Work'
import Vision from './Vision'
import Readme from './Readme'
import Timeline from './Timeline'
import Privacy from '@/VOL-07-PAPERWORK/FILE-Legal/Privacy'
import Terms from '@/VOL-07-PAPERWORK/FILE-Legal/Terms'
import Support from '@/VOL-07-PAPERWORK/FILE-Legal/Support'
import NotFound from './NotFound'

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="machin3-theme">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Navigate to="/work" replace />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/readme" element={<Readme />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}
