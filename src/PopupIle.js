import React from 'react';
import axios from 'axios';
import LoginService from './LoginService';
import config from "./config";

class PopupIle extends React.Component {

    state={
        ile:1
    }

    dodaj=()=>{
        console.log('dodaj');

        const url= config.HOST_API+"/insert.php/?nr="+LoginService.getCurrentUser()+"&id="+this.props.wybranytowar.ID+"&ile="+this.state.ile;

        fetch(url)
            .then(response => response)
            .then(dane => {
                this.setState({
                    ile:1,
                });
                this.props.zamknij();
                console.log(dane.status);

            })

    }

    ilosc = e => {
        this.setState({ile: e.target.value})
    }

    render(){
        return (
            <div id="myModal" className="modal">

                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={this.props.zamknij}>&times;</span>
                        <h2>{this.props.wybranytowar.NAZWA}</h2>
                    </div>
                    <div className="modal-body">
                        <p>Podaj ilość: </p>
                        <input type="number" name="balloons" step="1" min="1" defaultValue = {this.state.ile} onChange={this.ilosc} required/>
                    </div>
                    <div className="modal-footer">
                        <h3 onClick={this.dodaj}>DODAJ</h3>
                    </div>
                </div>

            </div>
        );
    }

};



export default PopupIle;