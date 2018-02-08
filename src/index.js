import React from 'react';
import ReactDOM from 'react-dom';

//create component and this component should produce some html.
const app = function () {
    return <div> Hi </div>;
}


//Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(app);