import React, { Component } from 'react';
import axios from 'axios';

import MovieObj from './MovieObj';
export default class MovieList extends Component {

    constructor(props) {
      super(props);
      this.state = {
          movies: [],
          page:0,
      };
    }
    componentDidMount = async () => {
      this.getMovie();
    }
    displayMovie() {
        if (this.state.movies)
            return <MovieObj movie={this.state.movies} ></MovieObj>
    }
    getMovie=async()=>
    {
        this.state.page++;
        try {
            let movieUrl = 'http://api.themoviedb.org/3/movie/popular?page='+this.state.page;

            let api_key = 'api_key=ff743742b3b6c89feb59dfc138b4c12f';
            const response = await axios.get(movieUrl  +"&"+ api_key)
            // this.setState({ movies: [...this.state.movies,response.data.results] });
            this.setState({ movies: this.state.movies.concat(response.data.results)});
            // console.log('movies', this.state.movies);
        } catch (error) {
            console.log(error);
        }
    }
    render() {
      return (
        <div className="container">

            {this.displayMovie()}
            <button  className="btn btn-success w-100" onClick={()=>this.getMovie()}>Load More</button>

        </div>
      );
    }
  }