import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux'
import Store from './Store/index.jsx'
// import '@mantine/core/styles.css';

const queryClient = new QueryClient({
  defaultOptions : {
    queries : {
      retry : 0,
      refetchOnWindowFocus : false
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter hashType='slash' >
    <QueryClientProvider client={queryClient}  >
    <Provider store={Store}>

    <MantineProvider>
        <App />
        </MantineProvider>
        </Provider>
    </QueryClientProvider>
    <ToastContainer autoClose={3000} limit={0}/>
  </HashRouter>
)
