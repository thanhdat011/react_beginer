import logo from './logo.svg'
import './App.css'
import Clock from './Clock'
import BareInput from './BareInput'
import Layout from './Layout'
import BareButton from './BareButton'

function App() {
  return (
    <div className='App'>
      <Layout>
        <h1>Hello</h1>
        <BareInput type='text' className='test' value='100' onChange={() => {}} />
      </Layout>
      <BareButton />
    </div>
  )
}

export default App
