import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./App.css";

import { Container } from '@material-ui/core';

import { Navbar, Home, Auth } from './components';

function App() {
    const [user, setUser] = useState(null);

    return (
        <div>
            <Router>
                <Container  maxWidth = 'lg'>
                    <Navbar user={user} setUser={setUser} />
                    <Switch>
                        <Route path='/' exact> 
                            <Home user={user} /> 
                        </Route>
                        <Route path='/auth' exact>
                            <Auth />
                        </Route>
                    </Switch> 
                </Container>
            </Router>
        </div>
    )
}
export default App;
