import React, { Component } from 'react';

const FormHOC = (WrappedComponent, stateObject) => {
  return class FormHOC extends Component {
    constructor(props) {
      super(props);

      this.handleOnChange = this.handleOnChange.bind(this);
      this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }


    handleOnChange(event){
        let object = this.props.data
        object[event.target.name] = event.target.value
        this.props.handleOnChange(object, stateObject)
    }

    handleOnSubmit(event){
        event.preventDefault();
        this.props.handleOnSubmit(this.props.data, stateObject)
    }

    render() {
      const formProps = {
        handleOnChange: this.handleOnChange,
        handleOnSubmit: this.handleOnSubmit
      }
      return <WrappedComponent form={formProps} {...this.props} />;
    }
  }
}

export default FormHOC;