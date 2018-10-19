import React, { Component } from 'react';

class HandleError extends Component {
    componentDidCatch(error,info) {
        this.setState({
            HandleError: true,
        })
        //envia este error a un servicio como Sentry
    }
    render(){
        if(this.HandleError) {
            return(
                <p> ha ocurrido un error</p>
            )

        }
        return this.props.children
              
    }
}

export default HandleError;