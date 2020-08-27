import axios from 'axios';
//import {API_KEY} from "../hidden";

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
//axios.defaults.headers.get['Content-Type'] = 'application/json';
//axios.defaults.headers['x-api-key'] = API_KEY();
//http://misiowka.5v.pl/
//http://misiowka.netserwer.pl/
export default {
    HOST_API: "http://localhost/"
}