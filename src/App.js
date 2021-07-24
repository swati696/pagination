import React from "react";
import Pagination from "./Pagination";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pageOfItems: []
    };

  }
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((response) => {
        this.setState({ pageOfItems: [...response.data] });
      });
      
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>Pagination</h1>
            <table>
              <thead>
                <th>Email</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>avatar</th>
              </thead>
            
            <tbody>
              {this.state.pageOfItems.map((item) => (
                <tr key={item.key}>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td><img src={item.avatar} alt={item.first_name} /></td>
                </tr>
              ))}
            </tbody>
            </table>
            {<Pagination
              items={this.state.pageOfItems}
            />
            }   
          </div>
        </div>
      </div>
    );
  }
}
export default App;
 