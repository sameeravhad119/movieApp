import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movies from './component/movies';

export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route path={'/'} exact>
                    <Movies />
                </Route>
            </Switch>
        )
    }
}
