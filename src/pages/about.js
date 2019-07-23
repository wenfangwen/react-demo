import React from 'react';
import { Route } from 'react-router-dom';
import Index from './index';
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map(number => <li key={number.toString()}>{number}</li>);
    return <ul>{listItems}</ul>;
}
class About extends React.Component {
    render() {
        const numbers = [1, 2, 3, 4, 5];
        return (
            <>
                <div>关于我们</div>
                <h3>这是一个二级页面</h3>
                <NumberList numbers={numbers} />
                <Route path={`${this.props.match.url}/ss`} component={Index} />
            </>
        );
    }
}
export default About;
