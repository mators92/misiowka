import React from 'react';
import axios from 'axios';


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
            url: "https://misiowka.000webhostapp.com/koszyk.php"
        }).then((response: any) => {
            if (response && response.status < 300) {
                console.log('pobrano koszyk')
                console.log(response.data)

                this.setState({
                    pobrano:true,
                    towary:response.data
                })

                // ... instrukcje co jeśli pomyślnie się wykona
            } else {
                console.log('error1')
                // ... instrukcje co jeśli error
            }
        })
            .catch((error: any) => {
                console.log('error2')
                // ... instrukcje co jeśli error
            })
    }

    wybrany = towar =>{
        console.log(towar.ID);
        this.setState({wybrano:true, wybranytowar: towar})
    }
    zamknijpopup =()=>{
        this.setState({wybrano:false})
    }


    render(){
        const { pobrano, towary, wybrano, wybranytowar} = this.state;
        const listatowarow=towary.map((element)=>(
            <li onClick={() => this.wybrany(element)}>
                <div><h2>{element.NAZWA}</h2> <h5>{element.ILE} szt</h5></div>
                <h5>{element.CENA} zł</h5>
                <hr/>
            </li>
        ));

        return (
            <div id='kosz'>
                {(pobrano)?
                    <div>
                        <h3>Koszyk</h3>
                        <ul>{listatowarow}</ul>
                    </div>
                    :
                    <h4>Ładowanie...</h4>
                }
            </div>
        );
    }
};

export default Koszyk;