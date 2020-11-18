import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard'; // importo il component con il percorso, trovera in auto l'estensione .js
import CommentDetail from './CommentDetail'; // importo il component con il percorso, trovera in auto l'estensione .js
import faker from 'faker'; // importo i file necessari


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>WARNING!</h4>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam"
                    timeAgo="Today 2:00PM"
                    content="Primo post"
                    photo={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                     author="Tom"
                     timeAgo="Today 2:00PM"
                     content="Secondo post"
                     photo={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                     author="Jack"
                     timeAgo="Today 2:00PM"
                     content="Terzo post"
                     photo={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(
    <App />, // primo arg
    document.querySelector('#root') // sec arg
)