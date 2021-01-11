import React, { Component } from 'react';
import { interval, merge, fromEvent, of  } from 'rxjs';
import { take, map , mergeAll} from 'rxjs/operators';
import { print } from '../Common/Utils/Print';
class MergeComponent extends Component {
    state = {
        sports: [],
        busniess: [],
    }

    componentDidMount() {

//click on a button and we will start interval

const click$ = fromEvent(document.getElementById("btn"), "click");
// click$.subscribe( cl => interval(1000).pipe(take(2)).subscribe( val => console.log(val)) );
// higher order observable --> the observable which emites observable
const interval$ = interval(1000);


const clickToInterval$ = click$.pipe(map( ev => {
    return  interval$;
}) ) ;

clickToInterval$.pipe(mergeAll() ).subscribe(val => console.log(val));



    //   const clicks = fromEvent(document, 'click');
    //   const higherOrder = clicks.pipe( 
    //          map( (ev) =>{ console.log(ev); return interval(1000) 
    //          .pipe(take(2)  )
    //    } ) )  ;
    //   const firstOrder = higherOrder.pipe( mergeAll() );
    //   firstOrder.subscribe(x => console.log(x))

    //      const myPromise =  val => new Promise( resolve => setTimeout(() => {
    //             resolve( `Result: ${val}`)
    //         }, 2000));
    //         const source = of(1,2,3);
    // const source$ = source.pipe( map ( val => myPromise( val )), mergeAll() );
    // source$.subscribe(console.log);
    }

    //mergeAll --> 1stream of data -->  
        // -->2nd stream of data 
        // 3 rd stream of data

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
    socialMediaNewsHandler = () => {
        // const { sports, busniess} = this.state;
        const sports$ = interval(1000).pipe(map(data => {
            return 'Sport News'+data;
        }),take(3) );
        const busniess$ =  interval(2000).pipe(map(data => {
            return 'busniess News'+data;
        }),take(2));

        merge(sports$, busniess$).subscribe(news => print("elContainer", news))
    }

//having root element
    render() {
        const { sports, busniess} = this.state;
        return [
            <div className="">
                <div className="card"><div className="card-header"> NewsPapaer </div>   </div>
                <br />
                <button id = "btn">Click Here</button>
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
                    <button className ="btn btn-sm btn-primary" onClick={this.socialMediaNewsHandler}> Generate Social Media News</button>
                    </div>
                    <ul id="elContainer"> Full News
                       
                    </ul>

                </div>
            </div>
          
        ]
    }
}

export default MergeComponent;