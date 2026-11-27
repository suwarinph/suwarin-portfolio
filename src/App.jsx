import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import CaseStudyPage from './pages/CaseStudyPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return <><ScrollToTop /><Routes><Route element={<SiteLayout />}><Route index element={<HomePage />} /><Route path="projects" element={<ProjectsPage />} /><Route path="projects/:slug" element={<CaseStudyPage />} /><Route path="*" element={<NotFoundPage />} /></Route></Routes></>
}
