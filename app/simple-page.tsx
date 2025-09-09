"use client"

import { useState } from "react"

export default function SimplePage() {
  const [message, setMessage] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">AI Mentor System</h1>

        <div className="space-y-4">
          <div className="text-center">
            <p className="text-gray-600">Your comprehensive AI mentor is ready!</p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Features Available:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Voice chat with cost optimization</li>
              <li>• Work scheduling for Philadelphia area</li>
              <li>• Study management for AI courses</li>
              <li>• Smart note-taking system</li>
              <li>• PC remote access</li>
            </ul>
          </div>

          <button
            onClick={() => setMessage("System is working!")}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Test System
          </button>

          {message && <div className="text-center text-green-600 font-medium">{message}</div>}
        </div>
      </div>
    </div>
  )
}
