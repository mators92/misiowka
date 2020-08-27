import React from 'react';
import axios from 'axios';
import LoginService from './LoginService';
import config from "./config";

class Razem extends React.Component {

    state={
        suma: '0'
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: config.HOST_API+"/razem.php/?nr="+LoginService.getCurrentUser()
        }).then((response: any) => {
            if (response && response.status < 300) {
                console.log('pobrano razem')
                console.log(response.data)

                this.setState({
                    suma: response.data
                })

                // ... instrukcje co jeśli pomyślnie się wykona
            } else {
                console.log('error1 razem')
                // ... instrukcje co jeśli error
            }
        })
            .catch((error: any) => {
                console.log('error2 razem')
                // ... instrukcje co jeśli error
            })
    }

    render(){
        return (
            <div>
                {(this.state.suma[0].RAZEM===null)?
                    <h5>Razem: 0 zł</h5>
                    :
                    <h5>Razem: {this.state.suma[0].RAZEM} zł</h5>
                }
            </div>
        );
    }

};

export default Razem;