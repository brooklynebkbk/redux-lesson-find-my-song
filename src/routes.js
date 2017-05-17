import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import SongDisplay from './components/songDisplay';
import Main from './components/main.jsx';
import NotFound from './components/404';

export default (
<Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="/song/:name" component={SongDisplay} />
    <Route path="*" component={NotFound} />
</Route>
)