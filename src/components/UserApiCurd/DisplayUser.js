import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class DispalyUser extends Component {
  render() {
    console.log('tag', this.props.users);
    let elements = this.props.users.map((user) => {

        return (
            <tr key={user.carId}>
          <td>
            {user.carId}
          </td>
          <td>
            {user.name}
          </td>
          <td>
            {user.engine}
          </td>
          <td>
          <NavLink  to={`/car-detail/${ user.carId }`} className="btn btn-outline-primary mr-2">Details</NavLink>
          <NavLink  to={`/car-update/${ user.carId }`} className="btn btn-outline-primary mr-2">Edit</NavLink>
          <button onClick={() =>this.props.methodDelete(user.carId)} className="btn btn-outline-primary ">Delete</button>
          </td>
        </tr>
        )
        })


        return <tbody>{elements}</tbody>



  }
}

export default DispalyUser;