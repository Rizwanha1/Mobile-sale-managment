import React from 'react';
import './notFoundPage.css';
import { Link } from 'react-router-dom';
const Notfoundpage = () => {
    return (
        <div>
            <div style={{ marginTop: '280px' }}>
                <div className="jc-elevator">
                    <div id="myBtn" className="jc-floor">
                        <h3>404</h3>
                    </div>
                    <div id="doors" className="jc-doors">
                        <div>Ops... <br />Wrong floor</div>
                        <div><Link to='/'>Go back to Home</Link></div>
                    </div>
                    <div className="jc-switch">
                        <a></a>
                        <a></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notfoundpage;
