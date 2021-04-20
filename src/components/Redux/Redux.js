// src/js/components/App.js
import React from "react";
import ArticleList from "./ArticleList";
import ArticleCreateForm from "./ArticleCreateForm";
import { Container, Grid, Header } from 'semantic-ui-react';
const App = () => (
  <Container>
     <Grid columns={2} relaxed>
      <Grid.Column>
      <Header as='h2'>Articles</Header>
        <ArticleList />
      </Grid.Column>

      <Grid.Column>
        <Header as='h2'>Add a new article</Header>
        <ArticleCreateForm />
      </Grid.Column>


    </Grid>
  </Container>
);
export default App;