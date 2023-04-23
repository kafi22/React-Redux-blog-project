import React from 'react'
import './App.css'
import Indexroutes from './Routs/Indexroutes'
import { QueryClient, QueryClientProvider } from 'react-query'




function App() {

  const queryclint = new QueryClient()

  return (
  
    <QueryClientProvider client={queryclint}>
      <Indexroutes />
     </QueryClientProvider>

   
  )
}

export default App
