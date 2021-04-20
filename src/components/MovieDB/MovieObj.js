import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class MovieObj extends Component {
  render() {
    let elements = this.props.movie.map((movie) => {

    return (
        <div className="col-md-3" key={movie.id}>
            <div className="row">

        <div className="col-md-12" style={{height: "150px"}}>
            <div>
            <img src={'http://image.tmdb.org/t/p/w500'+movie.poster_path} className="w-100" style={{height:"150px" }}/>
        </div>
        </div>

        <div className="col-md-12 mt-2" style={{height: "50px"}}>
            <p className="lead" style={{ fontSize: "1.3rem"}}>{movie.title }</p>
        </div>
        <div className="col-md-12 mt-2">
            <p>Release Date: {movie.release_date }</p>
        </div>
        <div className="col-md-12 mt-2 mb-2">
            <NavLink className="btn btn-primary w-100"  to={`/movie-detail/${ movie.id }`}>Details</NavLink>
        </div>

    </div>
        </div>
    )
    })


    return <div className="row">{elements}</div>
}
}

export default MovieObj;