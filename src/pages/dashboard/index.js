import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Workplace from './workplace';
import Analysis from './analysis';
class Index extends Component {
    render() {
        return (
            <>
                <Route path={`${this.props.match.url}/workplace`} component={Workplace} />
                <Route path={`${this.props.match.url}/analysis`} component={Analysis} />
            </>
        );
    }
}

export default Index;
