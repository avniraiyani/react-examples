import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Table, Button } from 'semantic-ui-react';
class SemanticDispalyUser extends Component {
  render() {
    console.log('tag', this.props.users);
    let elements = this.props.users.map((user) => {

        return (
            <Table.Row key={user.carId}>
          <Table.Cell>
            {user.carId}
          </Table.Cell>
          <Table.Cell>
            {user.name}
          </Table.Cell>
          <Table.Cell>
            {user.engine}
          </Table.Cell>
          <Table.Cell>
          <NavLink  to={`/semantic-car-detail/${ user.carId }`} ><Button  icon='book'  /></NavLink>
          <NavLink  to={`/semantic-car-update/${ user.carId }`} ><Button  icon='edit' /></NavLink>
          <Button onClick={() =>this.props.methodDelete(user.carId)} icon='delete' ></Button>
          </Table.Cell>
        </Table.Row>
        )
        })


        return <Table.Body>{elements}</Table.Body>




  }
}

export default SemanticDispalyUser;
