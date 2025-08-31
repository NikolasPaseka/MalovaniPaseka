import { Outlet, Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Home, FileText } from "lucide-react"

const Paintbrush = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"/>
    <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"/>
    <path d="M14.5 17.5 4.5 15"/>
  </svg>
)

export default function Layout() {
  const location = useLocation()
  
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors">
              <Home className="h-6 w-6" />
              <span className="font-semibold tracking-wide">Malování Paseka</span>
              <Paintbrush />
            </Link>
            
            {/* Navigation links */}
            <div className="flex items-center gap-4">
              <Button
                asChild
                variant={location.pathname === "/" ? "secondary" : "ghost"}
                size="sm"
                className={location.pathname === "/" ? "bg-white text-zinc-900" : "text-white hover:text-sky-400"}
              >
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Domů
                </Link>
              </Button>
              
              <Button
                asChild
                variant={location.pathname === "/cenik" ? "secondary" : "ghost"}
                size="sm"
                className={location.pathname === "/cenik" ? "bg-white text-zinc-900" : "text-white hover:text-sky-400"}
              >
                <Link to="/cenik">
                  <FileText className="mr-2 h-4 w-4" />
                  Ceník
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Page content */}
      <Outlet />
      
      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-8 px-4">
        <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Malování Paseka. Všechna práva vyhrazena.</p>
          <div className="flex gap-4">
            <Link to="/" className="text-sm text-zinc-400 hover:text-sky-400 transition-colors">
              Domů
            </Link>
            <Link to="/cenik" className="text-sm text-zinc-400 hover:text-sky-400 transition-colors">
              Ceník
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
