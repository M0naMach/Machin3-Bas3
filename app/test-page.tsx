export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">AI Mentor System Test</h1>
        <p className="text-gray-600 mb-6">Your comprehensive AI mentor is ready with all features:</p>
        <ul className="text-left text-sm text-gray-700 space-y-2 mb-6">
          <li>✅ Authentication System</li>
          <li>✅ Voice Chat Interface</li>
          <li>✅ Work Scheduler</li>
          <li>✅ Study Management</li>
          <li>✅ Smart Notes</li>
          <li>✅ PC Remote Access</li>
        </ul>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Demo Login:</strong>
            <br />
            Email: demo@example.com
            <br />
            Password: demo
          </p>
        </div>
      </div>
    </div>
  )
}
