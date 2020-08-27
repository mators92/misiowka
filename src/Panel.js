import React from 'react';
import TowaryLista from './TowaryLista';
import Koszyk from './Koszyk';
import Menu from './Menu';
import Stopka from './Stopka';
import LoginService from './LoginService';
import {withRouter} from "react-router";

class Panel extends React.Component {

    componentDidMount() {
        if(LoginService.checkIfUserIsLogged())
        {
            console.log('zalogowany')
            console.log(LoginService.getCurrentUser());
        }
        else
        {
            console.log('nie zalogowany')
            this.props.history.push('/');
            //return <Redirect to="/" />;
        }
    }

    render(){
        return (
            <div>
                <Menu/>
                <TowaryLista/>
                <Koszyk/>
                <div style={{clear:"both"}}></div>
                <Stopka/>
            </div>
        );
    }

};

export default Panel;