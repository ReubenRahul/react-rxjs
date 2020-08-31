import React, { useState, useEffect, Component } from 'react';
import { from, of, concat } from 'rxjs';
import { print } from '../Common/Utils/Print';
/**
 * Here we will get example of 3 types
 *  from -: create observable from 3 types
 * 1: array 2: iterabale(generator) 3: promise
 */
class ConcatComponent extends Component {
    state = {
        sports: [],
        busniess: [],
        

    }
    handleSportNews = (news) => {
        const { sports } = this.state;
        sports.push(news);
        this.setState({
            sports
        })
    }
    handleBusniessNews = (news) => {
        const { busniess } = this.state;
        busniess.push(news);
        this.setState({
            busniess
        })
    }
    newsPaperHandler = () => {
        const { sports, busniess} = this.state;
        const sports$ = from( sports);
        const busniess$ = from (busniess);

        concat(sports$, busniess$).subscribe(news => print("elContainer", news))
    }
    render() {
        const { sports, busniess} = this.state;
        return (
            <div className="">
                <div className="card"><div className="card-header"> NewsPapaer </div>   </div>
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-sm-4">
                        <div className="">
                            <h5> Sports</h5>
                            <input type="text" id="sport_news" />
                            <button className="btn btn-sm btn-primary" onClick={() =>this.handleSportNews(document.getElementById('sport_news').value )}> Store </button>

                            {sports && sports.map(sport => <p> {sport} </p>)}

                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="">
                            <h5> Busniess</h5>

                            <input type="text" id="busniess_news" />
                            <button className="btn btn-sm btn-primary"  onClick={() =>this.handleBusniessNews(document.getElementById('busniess_news').value )}> Store </button>
                            {busniess && busniess.map(bus => <p> {bus} </p>)}

                        </div>
                    <button className ="btn btn-sm btn-primary" onClick={this.newsPaperHandler}> Generate NewsPaper</button>
                    </div>
                    <ul id="elContainer"> Full News
                       
                    </ul>

                </div>
            </div>
        )
    }

}


export default ConcatComponent;
