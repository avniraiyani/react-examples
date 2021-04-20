import React, { Component } from "react";
import { connect } from "react-redux";
import { updateArticle } from "../../store/actions";
import { NavLink } from "react-router-dom";
import { Form, Button, Container } from 'semantic-ui-react';

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      id:props.match.params.articleId,
    };
    this.props.articles.find((article)=>{
      if(article.id==this.state.id)
      {
        this.state.title=article.title;
      }
    });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(name,value) {

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const title=this.state.title;
    const id=this.state.id;
    this.props.updateArticle({ title, id });
    this.setState({ title: "" });
    this.props.history.push(`/redux`);
  }
  render() {


    return (
      <Container>
          <NavLink to="/redux"><Button  icon='arrow alternate circle left'  /></NavLink>

      <Form onSubmit={this.handleSubmit}>
      <Form.Group>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          value={this.state.title}
          onChange={(e)=>this.handleChange('title',e.target.value)}
        />
      </Form.Group>
     <Form.Button>Update</Form.Button>
    </Form>
    </Container>
    );
  }
}

const mapStateToProps = state => {
  return { articles: state.articles };
};

const mapDispatchToProps = {
    updateArticle
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);