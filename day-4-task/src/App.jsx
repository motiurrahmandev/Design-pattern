import { useState } from 'react'
import Toggle from './components/Toggle'

function App() {
  

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Toggle>
        {(isOpen, toggle) => (
          <div className="p-4">
            <button
              onClick={toggle}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              {isOpen ? 'Close' : 'Open'} Menu
            </button>
            {isOpen && (
              <div className="mt-4 p-4 border border-gray-300 rounded shadow">
                <p>This is the toggleable content!</p>

                <ul>
                  <li className=" hover:bg-gray-300">Item 1</li>
                  <li className=" hover:bg-gray-300">Item 2</li>
                  <li className=" hover:bg-gray-300">Item 3</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </Toggle>
    </div>
  )
}

export default App
