import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    "About",
    "Blog",
    "Changelog",
    "Contact",
    "Power-Ups"
  ]

  return (
    <header className="w-full border-b bg-white fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="w-6 h-6 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-md"></div>
          Draftr
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-600">
          {navLinks.map((link) => (
            <a key={link} href="#" className="hover:text-black">
              {link}
            </a>
          ))}
        </nav>

        {/* Login Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2 rounded-full bg-black text-white shadow-lg hover:opacity-90">
            Login now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-white z-70 p-6">

          {/* Top Bar */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="w-6 h-6 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-md"></div>
              Draftr
            </div>

            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white"
            >
              <X />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col gap-6 text-lg text-gray-700">
            {navLinks.map((link) => (
              <a key={link} href="#">
                {link}
              </a>
            ))}
          </div>

        </div>
      )}
    </header>
  )
}