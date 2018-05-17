import React, {Component} from 'react';
import Register from '../users/Register';
import Login from '../users/Login'

class Home extends Component {
    render() {
        return (
            <main>
                <h1 className="main-heading">Welcome!</h1>
                <div className="content-wrapper">
                    <div className="form-wrapper">
                        New to the site? Create an account!
                        <Register />
                    </div>

                    <div className="divider"/>

                    <div className="form-wrapper">
                        Already have an account? Log in now!
                        <Login />
                    </div>
                </div>
            </main>
        )
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
