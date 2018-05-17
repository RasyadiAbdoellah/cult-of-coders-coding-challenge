import React, {Component} from 'react';
import Register from '../users/Register';
import Login from '../users/Login'

class Home extends Component {
    render() {
        return (
            <main>
                Welcome! Sign up to use
                <Register />

                Already have an account? Log in below
                <Login />
            </main>
        )
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
