import logo from './logo.svg'
import './App.css'
import Clock from './Clock'
import BareInput from './BareInput'
import Layout from './Layout'

function App() {
  return (
    <div className='App'>
      <Layout>
        <h1>Hello</h1>
      </Layout>
      <BareInput type='text' className='test' value='100' onChange={() => {}} />
    </div>
  )
}

export default App
