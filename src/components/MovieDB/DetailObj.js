import React, { Component } from 'react';
class DetailObj extends Component {
  render() {
    let movieDetail = this.props.movieDetail;
    // console.log('movieDetail', movieDetail);
    return(
<div className="row">
<div className="col-md-12">

<div className='row mr-0 ml-1 position-absolute' style={{top:"200px"}}>


    <div className="col-md-2 ">
        <img src={'http://image.tmdb.org/t/p/w500' + movieDetail.poster_path} style={{height:"350px"}} className="img-fluid " />
    </div>

    <div className="col-md-9 mt-2 ">
        <div className="row">
            <div className="col-md-12 m-1">
                <div className="lead font-weight-bold changeColor" >{movieDetail.title }</div>
                <div className="changeColor">{movieDetail.tagline }</div>
            </div>
            <div className="col-md-12 m-1">
                <p className="font-weight-normal changeColor"> Language: {movieDetail.original_language }
                </p>
            </div>

            <div className="col-md-12 m-1">
                <p className="font-weight-normal changeColor"> Release Date: {movieDetail.release_date }
                </p>
            </div>
            <div className="col-md-12 m-1">
                <div className="row">
                    <div className="col-md-2">
                        <p className="font-weight-normal"> {movieDetail.vote_count } Votes
                        </p>
                    </div>
                    <div className="col-md-2">
                        <p className="font-weight-normal"> {movieDetail.vote_average } Vote Average
                        </p>
                    </div>
                </div>

            </div>
            <div className="col-md-12 m-1">
                <p className="h4 mb-3">Summary</p>
                <p className="font-weight-normal"> {movieDetail.overview}
                </p>
            </div>

                </div>
            </div>
        </div>


    </div>
</div>
    );
}
}
export default DetailObj;