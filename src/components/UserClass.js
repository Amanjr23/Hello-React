import React from "react"; 

class UserClass extends React.Component{
    // A class based component is a class which extent react.component 
    // and it has a render method which return some piece of jsx 
    constructor(props){
        super(props);

        this.state={
            count : 0,
            // count2 :1,
        };
        console.log(props)
    }
    
    render(){
        const{name,location} = this.props;
        const{count} = this.state;

        return(
        <div className="user_card">
            <h1>Count: {count}</h1>
            <button onClick={()=>
                {
                    this.setState({
                        count: this.state.count+1,
                    });
                }}
            >
                Count increase
            </button>
            <h2>Name: {name}</h2>
            <h3>Location : {location}</h3>
            <h4>Contact : @callkrrHalkat23</h4>
        </div>
        );
    }
}

export default UserClass;