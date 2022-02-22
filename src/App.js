import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import "./App.css";

import { Container } from '@material-ui/core';

import { Navbar, Home, Auth, PostDetails } from './components';

function App() {
    const [user, setUser] = useState(null);

    return (
        <div>
            <Router>
                <Container  maxWidth = 'xl'>
                    <Navbar user={user} setUser={setUser} />
                    <Switch>
                        <Route path='/' exact> 
                            {/* <Home user={user} />  */}
                            {
                                () => <Redirect to='/posts' />
                            }
                        </Route>
                        <Route path='/posts' exact>
                            <Home user={user} />
                        </Route>
                        <Route path='/posts/search' exact>
                            <Home user={user} />
                        </Route>
                        <Route path='/posts/:id'>
                            <PostDetails />
                        </Route>
                        <Route path='/auth' exact>
                        {
                            !user ? <Auth /> : <Redirect to='/posts'/>
                        }
                        </Route>
                    </Switch> 
                </Container>
            </Router>
        </div>
    )
}
export default App;
