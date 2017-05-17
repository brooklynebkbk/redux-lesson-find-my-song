import React, { Component } from 'react';
import { Link } from 'react-router';

class Main extends Component {
    render () {
        return (
            <div>
                <p>Main Music Component</p>
                <Link to="/song/work">Song Display</Link>
            </div>
        );
    }
}

export default Main;