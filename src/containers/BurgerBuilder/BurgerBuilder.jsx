import React from 'react';
import Wrapper from '../../hoc/Wrappers';
import Burger from './../../components/Burger/Burger';
import BuildControles from './../../components/Burger/BurgerControles/BuildControles/BurgerControles';
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';
import axios from "../../axios-order"
import { baseUrl } from './../../constants';
import Spinner from './../../components/UI/Spinner/spinner';
//import WithErrorhandler from './../../hoc/withErrorhandler/withErrorhandler';



const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat:0.3,
    bacon:0.7
}
class BurgerBuilder extends React.Component {
    state = { 
        ingredients:{
           salad:0,
           bacon:0,
           cheese:0,
           meat:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing: false,
        loading:false,
        error:false
        
     }
     componentDidMount(){
        axios.get("https://my-project-c66a8.firebaseio.com/ingredients.json")
      .then(response => {
         this.setState({ingredients:response.data});
      })
      .catch(error =>{
         this.setState({error:true})
      } )
     }
     purchaseHandler = () => {
        this.setState({purchasing:true});

     }
      updatePurchaseState (ingredients){
         const sum =Object.keys(ingredients)
            .map(igKey =>{
               return ingredients[igKey]
            })
            .reduce((sum, el)=>{
               return sum + el
            },0);
         this.setState({purchasable: sum>0})   
         console.log(sum)
      }
     addedIngredients = (type) => {
        const {ingredients, totalPrice} = this.state;
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...ingredients};
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
     }

     removedIngredients = (type) => {
      const oldCount = this.state.ingredients[type];
      if(oldCount <= 0){
         return;
      }
      const updatedCount = oldCount - 1;
      const updatedIngredients = {...this.state.ingredients};
      updatedIngredients[type] = updatedCount;
      const priceDeduction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeduction;
      this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
      this.updatePurchaseState(updatedIngredients);
     }
     purchaseCancelHandler = () => {
        this.setState({purchasing:false})
     }
     purchaseContinueHandler = () => {
        this.setState({loading:true});
        const orders = {
           ingredients :this.state.ingredients,
           price: this.state.totalPrice,
           customer:{
                name:"Rajesh Kodati",
                address:{
                   street:"Rtc Road",
                   zipCode:"506015",
                   country:"India"
                },
                email:"test@test.com",     
           },
           deliveryMethod:"fastest"
        }
        axios.post(`${baseUrl}/orders.json`, orders)
        .then(response => {
         this.setState({loading:false, purchasing:false})
        })
        .catch(error =>{
         this.setState({loading:false, purchasing:false})
        });
     }
    render() { 
       const disabledInfo = {...this.state.ingredients};
        for(let key in disabledInfo){
           disabledInfo[key] = disabledInfo[key] <=0
         
        }
        let orderSummery = null;
       
        let burger = this.state.error ? <p>Ingredient Can't be Load</p> : <Spinner/>;
        if(this.state.ingredients){
         burger =  (
            <>  
                <Burger ingredients={this.state.ingredients}/>
                <BuildControles
                      ingredientAdded={this.addedIngredients}
                      ingredientRemoved={this.removedIngredients}
                      disabled={disabledInfo}
                      purchasable={this.state.purchasable}
                      order={this.purchaseHandler}
                   price={this.state.totalPrice}/>
             </>     
          );
           orderSummery= <OrderSummary
            ingredients={this.state.ingredients}
            continue={this.purchaseContinueHandler}
            cancel={this.purchaseCancelHandler}
            price={this.state.totalPrice}/>
        }
        if(this.state.loading){
         orderSummery = <Spinner/>  
      }
        
        return ( 
            <Wrapper>
               <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                  {orderSummery}
               </Modal>
               {burger}
            </Wrapper>
         );
    }
}
 
export default BurgerBuilder;