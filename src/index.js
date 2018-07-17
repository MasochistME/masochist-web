import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './styles/css/index.css'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import store from './redux/store'

class Root extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <App />
            </Provider>
        )
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById('root'))
registerServiceWorker()
