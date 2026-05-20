import { Link } from "react-router";
import { User } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-xl font-semibold tracking-wider">STUDIO</span>
          <span className="text-xl font-light tracking-wider text-gray-400">MATERIUM</span>
        </Link>
        
        <div className="flex items-center gap-8 text-sm">
          <Link to="/categories" className="hover:text-gray-300 transition-colors">
            Men
          </Link>
          <span className="text-gray-600">|</span>
          <Link to="/categories" className="hover:text-gray-300 transition-colors">
            Women
          </Link>
          <span className="text-gray-600">|</span>
          <Link to="/categories" className="hover:text-gray-300 transition-colors">
            Kids
          </Link>
        </div>
        
        <button className="hover:text-gray-300 transition-colors">
          <User className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
