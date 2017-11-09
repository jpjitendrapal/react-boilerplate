import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{
    render(){
        return (
            <div className="cls-name">Welcome..!</div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("App"));