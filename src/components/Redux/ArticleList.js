import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Button } from 'semantic-ui-react';
import { removeArticle } from "../../store/actions";
import { NavLink } from "react-router-dom";
const mapStateToProps = state => {
  return { articles: state.articles };
};

const mapDispatchToProps = {
  removeArticle
};

class ConnectedList extends Component {
  DeleteArticle(articleId)
  {
    this.props.removeArticle(articleId);
  }

    renderList() {
      return this.props.articles.map((article) => {

        return (
          <List.Item key={article.id}>
            <List.Icon>
              <Button onClick={()=>this.DeleteArticle(article.id)} icon="delete"></Button>
            </List.Icon>
            <List.Content>{article.title}</List.Content>
            <List.Icon>
            <NavLink  to={`/article-edit/${ article.id }`} ><Button  icon='edit' /></NavLink>
            </List.Icon>
          </List.Item>
        );
      });
    }
    render() {
      return (
        <List>
          {this.renderList()}
        </List>


      );
    }
  }


const ArticleList = connect(mapStateToProps,mapDispatchToProps)(ConnectedList);
export default ArticleList;

// function mapStateToProps(state) {
//   return {
//     articles: state.articles
//   };
// }
// class ArticleList extends Component {
//   renderList() {
//     console.log('tag', this.props.articles);
//     return this.props.articles.map((article) => {
//       console.log('article', article)
//       return (
//         <li className="list-item" key={article.id}>
//                 {article.title}
//          </li>
//       );
//     });
//   }
//   render() {
//     return (
//       <ul>
//         {this.renderList()}
//       </ul>


//     );
//   }
// }

// const List=connect(mapStateToProps)(ArticleList);
// export default List;

// const ConnectedList = ({ articles }) => (
//   <List>
//     {articles.map(article => (
//       <List.Item key={article.id}>
//         <Button onClick={()=>this.DeleteArticle(article.id)}></Button>
//         <List.Content>{article.title}</List.Content>
//       </List.Item>
//     ))}
// </List>
// );