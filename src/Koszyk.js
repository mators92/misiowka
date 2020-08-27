import React from 'react';
import axios from 'axios';
import Razem from './Razem';
import LoginService from './LoginService';
import config from "./config";

class Koszyk extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            wybrano: false,
            pobrano: false,
            towary:[],
            wybranytowar:[]
        };
        this.wybrany = this.wybrany.bind(this);
    }

    componentDidMount() {
        console.log('pobieram koszyk z bazy');

        /*
        fetch("https://misiowka.000webhostapp.com/baza.php")
            .then(response => response.json())
            .then(dane => {
                this.setState({
                    pobrano:true,
                    towary:dane
                })

            })

         */

        axios({
            method: 'get',
            url: config.HOST_API+"/koszyki.php/?nr="+LoginService.getCurrentUser()
        }).then((response: any) => {
            if (response && response.status < 300) {
                console.log('pobrano koszyk')
                console.log(response.data)
                console.log(response.data.length)

                this.setState({
                    pobrano:true,
                    towary:response.data
                })

                // ... instrukcje co jeśli pomyślnie się wykona
            } else {
                console.log('error1 koszyk')
                // ... instrukcje co jeśli error
            }
        })
            .catch((error: any) => {
                console.log('error2 koszyk')
                // ... instrukcje co jeśli error
            })
    }

    wybrany = towar =>{
        console.log(towar);
        this.setState({wybrano:true, wybranytowar: towar})
    }


    render(){
        const { pobrano, towary, wybrano, wybranytowar} = this.state;
        const listatowarow=towary.map((element)=>(
            <li onClick={() => this.wybrany(element)}>
                <div className="element"><div className="naz"><h2>{element.NAZWA}</h2></div> <div className="censzt"><h5>{element.ILE} szt</h5> <h5>{element.CENA} zł</h5></div></div>
                <hr/>
            </li>
        ));

        return (
            <div id='kosz'>
                <div className="kosznag"> <h3>Koszyk</h3> <Razem/></div>
                {(pobrano)?
                    <div>
                        {(towary.length===0 )?
                            <h4>Twój koszyk jest pusty...</h4>
                            :
                            <ul>{listatowarow}</ul>
                        }
                    </div>
                    :
                    <h4>Ładowanie...</h4>
                }
            </div>
        );
    }
};

export default Koszyk;