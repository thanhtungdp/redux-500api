import React,{Component} from 'react';
import {Link} from 'react-router';
import Header from '../components/partials/Header';

export default class AppMaster extends Component{
    render(){
        return (
            <div>
                <Header/>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}