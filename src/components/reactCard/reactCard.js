import React, { Component } from 'react';
//import { Card, Row, Col } from 'react-materialize';
import './reactCard.css';

class ReactCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            onEditName: false,
            onEditDescription: false
        }
    }

    editName = () => {
        let onEditName = true;

        this.setState({
            onEditName: onEditName
        });
    };

    editDescription = () => {
        let onEditDescription = true;

        this.setState({
            onEditDescription: onEditDescription
        });
    }

    nameAccepted = ()=> {
        let onEditName = false;

        this.setState({
            onEditName: onEditName
        });
    }

    getBtnEditName = () => {
        let onEditName = this.state.onEditName;

        return(
            !onEditName ? 
                <a onClick={this.editName} className="btn-floating btn-large waves-effect waves-light teal lighten-1">
                    <i className="material-icons">mode_edit</i>
                </a> 
                : null
        )
    };

    getBtnEditDescription = () => {
        let onEditDescription = this.state.onEditDescription;

        return(
            !onEditDescription ? 
                <a onClick={this.editDescription} className="btn-floating btn-large waves-effect waves-light teal lighten-1">
                    <i className="material-icons">mode_edit</i>
                </a> 
                : null
        )
    };

    getInputName = () => {
        let onEditName = this.state.onEditName;

        return(
            onEditName ? 
                <input maxLength="30" placeholder="Change name" onChange={this.props.changeNameHandler} className='input-name orange lighten-5 grey-text text-darken-4 flow-text' type="text"/>
                : null
        )
    }

    getBtnOkName = () => {
        let onEditName = this.state.onEditName;

        return(
            onEditName ? 
                <a onClick={this.nameAccepted} className="btn-floating btn-large waves-effect waves-light green">
                    <i className="material-icons">done</i>
                </a> 
                : null
        )
    }

    getInputDescription = () => {
        let onEditDescription = this.state.onEditDescription;

        return(
            onEditDescription ? 
                <input maxLength="50" placeholder="Change short description" onChange={this.props.changeDescriptionHandler} className='input-description orange lighten-5 grey-text text-darken-4 flow-text' type="text"/>
                : null
        )
    }

    getBtnOkDescription = () => {
        let onEditDescription = this.state.onEditDescription;

        return(
            onEditDescription ? 
                <a onClick={this.descriptionAccepted} className="btn-floating btn-large waves-effect waves-light green">
                    <i className="material-icons">done</i>
                </a> 
                : null
        )
    }

    descriptionAccepted = ()=> {
        let onEditDescription = false;

        this.setState({
            onEditDescription: onEditDescription
        });
    };

    render(){        
        const name = this.props.name;    
        const description = this.props.description;    

        return(
            <div className="card blue-grey darken-1">
                <div className="container-btn-delete">
                    <a onClick={this.props.removeCardHandler} className="btn-floating btn-large waves-effect waves-light red">
                        <i className="material-icons">delete_forever</i>
                    </a> 
                </div>
                <div className="card-content white-text">
                    <div className="container-name">
                        <p className="card-title">{name}</p>
                        {this.getBtnEditName()}
                    </div>
                    <div className="container-input-name">
                        {this.getInputName()}
                        {this.getBtnOkName()}
                    </div>
                    <div className="container-description">
                        <p className="description">{description}</p>
                        {this.getBtnEditDescription()}
                    </div>
                    <div className="container-input-description">
                        {this.getInputDescription()}
                        {this.getBtnOkDescription()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ReactCard;