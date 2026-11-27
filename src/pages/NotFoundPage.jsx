import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return <div className="route-page section-shell not-found"><span className="section-number">404 / NOT FOUND</span><h1>Nothing on this page.</h1><p>Let’s head back to the portfolio.</p><Link to="/">Return home <ArrowLeft size={15} /></Link></div>
}
