import logo from './logo.svg'
import './App.css'
import Clock from './Clock'
import BareInput from './BareInput'
import Layout from './Layout'
import BareButton from './BareButton'
import LoginControl from './LoginControl'
import CorrectlyState from './CorrectlyState'
import ProductList from './ProductList/ProductList'
import Form from './Form/Form'
import UncontrolComponent from './Form/UncontrolComponent'
import Calculator from './Calculator/Calculator'
import FilterableProductTable from './ThinkingInReact/FilterableProductTable'

function App() {
  return (
    <div className='App'>
      {/* <Layout>
        <h1>Hello</h1>
        <BareInput type='text' className='test' value='100' onChange={() => {}} />
      </Layout>
      <BareButton /> */}
      {/* <LoginControl hidden={false} /> */}
      {/* <CorrectlyState /> */}
      {/* <ProductList /> */}
      {/* <Form /> */}
      {/* <UncontrolComponent /> */}
      {/* <Calculator /> */}
      <FilterableProductTable />
    </div>
  )
}

export default App
