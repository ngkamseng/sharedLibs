import axios from "axios";

export class HttpServices {
  getURL() {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}