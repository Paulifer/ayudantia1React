import React, {Component} from'react';
import UserForm from'./UserForm';
import UserList from'./UserList';

class Data extends Component {
    constructor() { 
        super();
        this.state = {
            users:[
                {id:1, name: "Marcia", email:"marcia@marcia.cl"},
                {id:2, name:"Pepito", email:"pepito@pepito.cl"}
            ]
        };
    }
    agregarNuevoUsuario (event){
        event.preventDefault();
        let user ={
            name: event.target.name.value,
            email: event.target.email.value
        }
        this.setState({
            users: this.state.users.concat([user])
       })
    }
    render(){
        return(
        <div>
            <p>Añade mas Usuarios</p>
            <UserList users= {this.state.users}/>
            <UserForm onAddUser={this.agregarNuevoUsuario.bind(this)} />
        </div>
    )
    }
    
}

export default Data;