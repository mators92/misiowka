import React from 'react';
import PopupIle from './PopupIle';
import axios from 'axios';

class TowaryLista extends React.Component {

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
        console.log('pobieram towary z bazy');

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

        console.log(axios({
            method: 'get',
            url: "https://misiowka.000webhostapp.com/baza.php"
        }))
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
            <li key={element.ID} onClick={() => this.wybrany(element)}>
                <h5>{element.NAZWA}</h5>
                <h5>{element.CENA} zł</h5>
            </li>
        ));

        return (
            <div id="towary">
                <h3>Lista towarów</h3>
                {(pobrano)?
                    <div>
                        <ul>{listatowarow}</ul>
                    </div>
                :
                    <h4>Ładowanie...</h4>
                }

                {(wybrano)?
                    <div>
                        <PopupIle zamknij={this.zamknijpopup} wybranytowar={wybranytowar}/>
                    </div>
                    :
                    <div></div>
                }
            </div>



        );
    }

};

export default TowaryLista;