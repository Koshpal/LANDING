import React from 'react'
export default function HowItWorks(){
  return (
    <div>
      <h3 className="text-2xl font-semibold text-center">How Koshpal Works</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-xl shadow">Create</div>
        <div className="bg-white p-6 rounded-xl shadow">Engage</div>
        <div className="bg-white p-6 rounded-xl shadow">Analyze</div>
      </div>
    </div>
  )
}


