import React , {  Component } from 'react';
import { ReplaySubject } from 'rxjs';
import { rs} from './replaySubject';
class ReplaySubjectComponent extends Component {
    state = {
        products:[],
        cartList: []
    }
    componentDidMount() {
        rs.subscribe(val => {
           const {products} =  this.state;
           products.push(val);
           this.setState({
               products
           })
        });

    }
    test = ( ) => {
        rs.subscribe(val => {
            const {cartList} =  this.state;
           cartList.push(val);
            this.setState({
                cartList
            })
        })
    }
    render () {
       const {products, cartList} = this.state;
        return (
            <div className="row">
                <h3> Replay Subject ( cart example) </h3>  
                <div className="col-sm-4">
                        <input type="text" id="pro"/>
                        <button onClick={() => { rs.next(document.getElementById('pro').value )  }} > Add in Cart </button>
                        <button onClick={() => this.test() } >View Cart</button>
                </div>
                <div className="col-sm-4">
                     {products && products.map(pro => <p> {pro}</p>)}

                     <h4> Carts </h4>
                     {cartList && cartList.map(cart => <p> {cart}</p>)}

                     
              </div>
            </div>
            
            
        )
    }
}
export default ReplaySubjectComponent;