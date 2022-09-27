import React, { Component } from 'react';
import { ErrorIndicator } from '../ErrorIndicator';
import './ErrorBoundary.css';


export default class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info){

    this.setState({
      hasError: true
    })
  }


  render(){

    const { hasError } = this.state;


    if( hasError ) {
      return (
        <ErrorIndicator/>
      )
    }

    return(
      this.props.children
    )
  }
}
