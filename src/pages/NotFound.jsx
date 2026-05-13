import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-3xl w-full text-center py-20">
        {/* Illustration - simple inline SVG to resemble the three-figure 404 art */}
        {/* Use the provided image in the public folder (served at /404.png by Vite) */}
        <div className="mx-auto w-full max-w-xl">
          <img src="/404.png" alt="404 illustration" className="w-full h-auto rounded-md shadow-sm" />
        </div>
        <div className="mt-8">
          <Link to="/" style={{'color':"#fff"}} className="inline-block px-6 py-3 bg-[#334EAC] hover:bg-indigo-700 text-white rounded-full font-medium">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
