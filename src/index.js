import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css'; // 统一引入样式
import './global.css';
import App from './App';
import Home from './pages/index';
import Dashboard from './pages/dashboard/index';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory;
class Layout extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <App>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/dashboard" component={Dashboard} />
                        </Switch>
                    </App>
                </BrowserRouter>
            </Provider>
        );
    }
}
ReactDOM.render(<Layout />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
