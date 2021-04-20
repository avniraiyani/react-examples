import React, { Component } from 'react';
import './App.css';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Example1 from './components/Example1';
import Example6 from './components/Example6';
import Example7 from './components/Example7';
import Example8 from './components/Example8';
import Example9 from './components/Example9';
import MovieList from './components/MovieDB/MovieList';
import MovieDetail from './components/MovieDB/MovieDetail';
import Main from './components/UserApiCurd/Main';
import Create from './components/UserApiCurd/Create';
import CarDetail from './components/UserApiCurd/CarDetail';
import CarUpdate from './components/UserApiCurd/CarUpdate';

import SemanticMain from './components/SemanticElement/SemanticMain';
import SemanticCreate from './components/SemanticElement/SemanticCreate';
import SemanticCarDetail from './components/SemanticElement/SemanticCarDetail';
import SemanticCarUpdate from './components/SemanticElement/SemanticCarUpdate';
import Redux from './components/Redux/Redux';
import ArticleEdit from './components/Redux/ArticleEdit';
import FormBuilder from './components/FormBuilder';
import ContentBuilder from './components/ContentBuilder';
import SignaturePad from './components/SignaturePad';

class App extends Component {

      render(){


        return (
            <HashRouter>
                <div>
                <nav className="navbar navbar-expand-sm bg-light">
                     <ul className="navbar-nav">
                        <li className="nav-link"><NavLink to="/example1">Example1</NavLink></li>
                        <li className="nav-link"><NavLink to="/example6">Example6</NavLink></li>
                        <li className="nav-link"><NavLink to="/example7">Example7</NavLink></li>
                        <li className="nav-link"><NavLink to="/example8">Example8</NavLink></li>
                        <li className="nav-link"><NavLink to="/example9">Example9</NavLink></li>
                        <li className="nav-link"><NavLink to="/movie-list">Movie List</NavLink></li>
                        <li className="nav-link"><NavLink to="/user-curd">User Curd</NavLink> </li>
                        <li className="nav-link"><NavLink to="/semantic-user-curd">Semantic</NavLink> </li>
                        <li className="nav-link"><NavLink to="/redux">Redux</NavLink> </li>
                        <li className="nav-link"><NavLink to="/form">FormBuilder</NavLink> </li>
                        <li className="nav-link"><NavLink to="/content">ContentBuilder</NavLink> </li>
                        <li className="nav-link"><NavLink to="/sign">Signature</NavLink> </li>                           {/* <ul>
                                <li><NavLink to={'/create'}>Create</NavLink></li>
                                <li><NavLink to={'/list'}>List</NavLink></li>
                            </ul> */}



                    </ul>
                    </nav>
                    <div className="content">

                        <Route path="/example1" component={ Example1 }/>
                        <Route path="/example6" component={ Example6 }/>
                        <Route path="/example7" component={ Example7 }/>
                        <Route path="/example8" component={ Example8 }/>
                        <Route path="/example9" component={ Example9 }/>
                        <Route path="/movie-list" component={ MovieList }/>
                        <Route  path="/movie-detail/:value" component={ MovieDetail } />
                        <Route path="/create" component={ Create }/>
                        <Route path="/user-curd" component={ Main }/>
                        <Route  path="/car-detail/:carId" component={ CarDetail } />
                        <Route  path="/car-update/:carId" component={ CarUpdate } />
                        <Route path="/semantic-create" component={ SemanticCreate }/>
                        <Route path="/semantic-user-curd" component={ SemanticMain }/>
                        <Route  path="/semantic-car-detail/:carId" component={ SemanticCarDetail } />
                        <Route  path="/semantic-car-update/:carId" component={ SemanticCarUpdate } />
                        <Route  path="/redux" component={ Redux } />
                        <Route  path="/form" component={ FormBuilder } />
                        <Route  path="/content" component={ ContentBuilder } />
                        <Route  path="/article-edit/:articleId" component={ ArticleEdit } />
                        <Route  path="/sign" component={ SignaturePad } />

                    </div>
                </div>
          </HashRouter>
        );

    }
}

export default App;

