import React from 'react';
import { Observable } from 'rxjs';
import { print } from '../Common/Utils/Print';

/**
 * 
 * Custom Observable:-> create custom observable in the rxjs
 * create is a method which create custom observable
 * it emit observer which emit with 3 different property
 * next :
 * error :
 * complete: 
 * 
 * subscribe have 3 types
 * next
 * 
 * error
 * 
 * complete
 */
class CustomObservableComponent extends React.Component{
    state = {
        classType: '',
        classTypeObs2: '',
    }
    componentDidMount()
    {
    const customObs$ =     Observable.create( observer => {
            setTimeout( () => {
                observer.next('React');
            }, 2000); 
            
            setTimeout( () => {
                observer.next('Angular');
            }, 3000); 

            setTimeout( () => {
                observer.next('Vue JS');
            }, 4000); 


            setTimeout( () => {
                observer.complete();
            }, 6000); 
    });

    customObs$.subscribe({
            next : (nxt) =>  print("elContainer",nxt) ,
            error : (err) => console.log(err),
            complete: () => {
                this.setState( {
                    classType:'success',
                })
            }
    })

    const customObs2$ =     Observable.create( observer => {
        setTimeout( () => {
            observer.next('React');
        }, 2000); 
        
        setTimeout( () => {
            observer.next('Angular');
        }, 3000); 

        setTimeout( () => {
            observer.error('error found');
        }, 3500); 

        setTimeout( () => {
            observer.next('Vue JS');
        }, 4000); 


        setTimeout( () => {
            observer.complete();
        }, 6000); 
});

customObs2$.subscribe({
        next : (nxt) =>  print("elContainer2",nxt) ,
        error : (err) => {
            print("elContainer2",err)
            this.setState( {
                classTypeObs2:'error',
            })
        } ,
        complete: () => {
            this.setState( {
                classTypeObs2:'success',
            })
        }
    });

}


    render() {
        return (
            <div className="row">
                <div className="col-sm-4">
                    <strong> Custom Observable </strong>
                    <hr />
                    <div className="">
                        <p className="border rounded bg-light py-2 px-3"> 
                            <strong> Data: </strong> [ 'React','Vue', 'Angular'] </p>
                            <hr />
                        <ul id="elContainer" className={`ulContainer ${this.state.classType}`}>
                        </ul>
                    </div>
                </div>


                <div className="col-sm-4">
                    <strong> Custom Observable 2 (with Error) </strong>
                    <hr />
                    <div className="">
                        <p className="border rounded bg-light py-2 px-3"> 
                            <strong> Data: </strong> [ 'React', 'Vue', 'Laravel', 'Angular'] </p>
                            <hr />
                        <ul id="elContainer2" className={`ulContainer ${this.state.classTypeObs2}`}>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default CustomObservableComponent;