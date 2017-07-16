import React, { Component } from 'react';
import FormHOC from '../../HOC/FormHOC';

class Todo extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let { data} = this.props
        return(
            <div className="container-fluid">
                <h3>Todo Create</h3>
                <form onSubmit={this.props.form.handleOnSubmit}>
                    <input type="text" name="title" value={data.title} className="form-control" placeholder="Title..." onChange={this.props.form.handleOnChange} />
                    <br/>
                    <input type="text" name="description" value={data.description} className="form-control" placeholder="Description..." onChange={this.props.form.handleOnChange} />
                    <br/>
                    <button className="btn btn-primary">Create</button>
                </form>
            </div>
        )
    }
}

export default FormHOC(Todo, 'todo');

