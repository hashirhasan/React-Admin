import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid'
export class Adduser extends Component{
  
    state={
            name:'',
            username:'',
            address:'',
            phone_no:'',
            email:'',
            website:'',
    }

onchangename=(e)=>{
    this.setState({name:e.target.value})
}
onchangeusername=(e)=>{
    this.setState({username:e.target.value})
}
onchangeemail=(e)=>{
    this.setState({email:e.target.value})
}
onchangeaddress=(e)=>{
    this.setState({address:e.target.value})
}
onchangephone_no=(e)=>{
    this.setState({phone_no:e.target.value})
}
onchangewebsite=(e)=>{
    this.setState({website:e.target.value})
}

onSubmit=(e)=>{
    e.preventDefault();
    const newuser={ 
        id:uuid(),
       name:this.state.name,
       address:{city:this.state.address},
       username:this.state.username,
       email:this.state.email,
       phone_no:this.state.phone_no,
       website:this.state.website
   }
   this.props.addUser(newuser);
   this.setState({
    name:"",
    address:"",
    username:"",
    email:"",
    phone_no:"",
    website:""
   })
}

    render(){
        return (
            <div>
                {!this.props.isseen?(
            <div style={styleform}>
         <form onSubmit={this.onSubmit}>
      <h1 className="text-center">Create User</h1>
       <span className='left' onClick={this.props.hideform}>X</span> 
        <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.onchangename}/><br />
        <input type="text"  name="username" placeholder="username" value={this.state.username} onChange={this.onchangeusername}/><br />
         <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.onchangeemail}/><br/>
        <input type="text" name="address" placeholder="address" value={this.state.address} onChange={this.onchangeaddress}/><br />
        <input type="text" name="phone" placeholder="phone_no" value={this.state.phone_no} onChange={this.onchangephone_no}/><br />
        <input type="text"  name="website" placeholder="website" value={this.state.website} onChange={this.onchangewebsite}/><br />
         <button  type="submit" className="btn btn-success"  name="submit">Submit</button>
        </form>   
            </div>):(
                <div>
                    </div>
            )
    }
            </div>
           
        )
    }
}
const styleform={
    borderRadius: '5px',
    backgroundColor:'#f2f2f2',
    padding:'40px 20px',
}

Adduser.propTypes={
    isseen:PropTypes.bool.isRequired 
}

export default Adduser;
