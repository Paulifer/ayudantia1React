import React, { Component } from'react';

class UserForm extends Component{
    //cuando  haga click y se renderize, la informacion ingresada sera guardada aca
    render(){
        return(
            <form onSubmit=
            {this.props.onAddUser}>
                <input type="text" placeholder="Nombre" name="name"/>
                <input type="email" placeholder="Email" name="email" />
                <input type="submit" value="guardar"/>
            </form>
        );
    }
}
export default UserForm;