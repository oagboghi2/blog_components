import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:50PM" comments="Looking good"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:00AM" comments="Learned a lot"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 3:00PM" comments="Nice blog post"/>
            </ApprovalCard>
        </div>
        
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));