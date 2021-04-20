import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";
import DetailObj from './DetailObj';
export default class MovieDetail extends Component {

    constructor(props) {
      super(props);

      this.state = {
          movieDetail: [],
          id: props.match.params.value
      };

    }
    componentDidMount = async () => {
        try {
            let movieUrl = 'http://api.themoviedb.org/3/movie/';

            let api_key = 'api_key=ff743742b3b6c89feb59dfc138b4c12f';
            const response = await axios.get(movieUrl+this.state.id  +"?"+ api_key)
            this.setState({ movieDetail: response.data });
        } catch (error) {
            console.log(error);
        }
    }
    render() {
      return (
        <div className="container">
        <div className="row">
        <div className="col-md-2">
        <NavLink to="/movie-list" className="btn btn-outline-secondary position-absolute fixed-top m-2 ml-5">Back</NavLink>
        </div>
        </div>

        <DetailObj movieDetail={this.state.movieDetail}></DetailObj>
    </div>


      );
    }
  }
