import React from 'react';
import axios from 'axios';
import LoginService from './LoginService';
import config from "./config";

class LoginForm extends React.Component {

    state: {
        numer: '',
        haslo: ''
    }

    componentDidMount() {
        if(LoginService.checkIfUserIsLogged())
        {
            this.props.history.push('/panel');
        }
    }

    klik = () => {

        axios({
            method: 'get',
            url: config.HOST_API+"/login.php/?nr="+this.state.numer+"&pas="+this.state.haslo
        }).then((response: any) => {
            if (response && response.status < 300) {
                console.log('sprawdzam login')
                console.log(response.data)

                if(response.data.length===0)
                {
                    console.log('zle dane');
                }
                else
                {
                    //this.props.history.push('/panel');
                    LoginService.login(this.state.numer, response.data[0].IMIE, response.data[0].NAZWISKO);
                    this.props.history.push('/panel');
                }

                // ... instrukcje co jeśli pomyślnie się wykona
            } else {
                console.log('error1 login')
                // ... instrukcje co jeśli error
            }
        })
            .catch((error: any) => {
                console.log('error2 login')
                // ... instrukcje co jeśli error
            })

    }

    nrw = (e) =>{
        this.setState(
            {numer: e.target.value}
        )
    }
    pasw = (e) =>{
        this.setState(
            {haslo: e.target.value}
        )
    }

    render(){
        return (
            <div className="login-page">
                <h1>Dar natury</h1>
                <div className="form">
                    <form className="login-form">
                        <input onChange={this.nrw} type="text" name="nr" placeholder="Numer telefonu"/>
                        <input onChange={this.pasw} type="password" name="pas" placeholder="Hasło"/>
                        <button onClick={this.klik}>ZALOGUJ</button>
                    </form>
                </div>
            </div>
        );
    }

};

export default LoginForm;