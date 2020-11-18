import React from 'react';

const ApprovalCard = (props) => { // var in ingresso PROPS
    // console.log(props.children); // passo le props del figlio
    return (
        <div className="ui card">
            <div className="content">
                {props.children}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
        
    );
};

export default ApprovalCard; // disponibile a resto del progetto