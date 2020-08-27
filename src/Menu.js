import React from 'react';
import {withRouter} from "react-router";
import LoginService from './LoginService';

class Menu extends React.Component {

    wyloguj = () => {
        LoginService.logout();
        this.props.history.push('/');
    }

    render(){
        return (
            <div id="menu">
                <a className="naglowek">Witaj {localStorage.getItem('imie')}</a>
                <a className="buttonwyloguj" onClick={this.wyloguj}>Wyloguj</a>
            </div>
        );
    }

};


export default withRouter(props => <Menu {...props}/>);