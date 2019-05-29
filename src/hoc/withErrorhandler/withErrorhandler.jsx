import React from "react";
import Modal from './../../components/UI/Modal/Modal';
import Wrapper from './../Wrappers';

const WithErrorhandler = (WrapComponent, axios) => {

        return class extends React.Component{
            state = {
                error:null
            }
            componentWillMount(){
                axios.interceptor.request.use(req => {
                    this.setState({error:null})
                });

                axios.interceptor.response.use(null, error => {
                    this.setState({error:error})
                });
            }
            errorConfirmHandler = () => {
                this.setState({error:null});
            }
            render(){
                return(
                    <Wrapper>
                    <Modal show={this.state.error}
                    modalClosed={this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapComponent {...this.props}/>
                 </Wrapper>
                )
            }

        }
}
export default WithErrorhandler