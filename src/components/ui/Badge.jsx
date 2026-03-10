import React from 'react'

const Badge = () => {
  return (
    <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm">
          <span className="bg-black text-white text-xs md:text-sm px-4 py-1 rounded-full font-semibold">
            New
          </span>
          <span className="text-xs md:text-sm text-gray-600">
            Revolutionize your design workflow
          </span>
        </div>
  )
}

export default Badge