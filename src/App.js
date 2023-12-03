import CashWithdrawal from './components/CashWithdrawal'

import './App.css'

const denominationsList = [
  {
    id: 1,
    value: 50,
    uniqueNo: 1,
  },
  {
    id: 2,
    value: 100,
    uniqueNo: 2,
  },
  {
    id: 3,
    value: 200,
    uniqueNo: 3,
  },
  {
    id: 4,
    value: 500,
    uniqueNo: 4,
  },
]

const App = () => <CashWithdrawal denominationsList={denominationsList} />

export default App
