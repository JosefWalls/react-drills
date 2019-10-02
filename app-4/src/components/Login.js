import React, {Component} from 'react'


class Login extends Component {
    constructor(){
        super()


        this.state = {
            userName: "",
            passWord: ""
        }

        this.alertDetails = this.alertDetails.bind(this)
    }


    userName (value){
     this.setState({userName: value})
    }

    passWord (value){
        this.setState({passWord: value})
    }

    alertDetails (event){
        alert("Hello " + this.state.userName + "! Your meaningless password is " + this.state.passWord + ". We will be selling your details to grimace from seaseme street. Watcha gonna do fam.")
        alert("Thats what i thought")
    }
    render(){
        return(
            <div>
               <input onChange={ (e) => this.userName(e.target.value)} />
               <input onChange={ (e) => this.passWord(e.target.value)} />
               <button onClick={this.alertDetails}>Login</button>
            </div>
        )
    }
}


export default Login;