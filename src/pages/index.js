import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Index extends Component {
    render() {
        return <Redirect to="/dashboard/workplace" />;
    }
}

export default Index;
