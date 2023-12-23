// import React from 'react';

function Alert(props) {
    return (
        <div>
            <div className={`alert alert-success`} role="alert">
                {props.alert.msg}
            </div>
        </div>
    );
}

export default Alert;