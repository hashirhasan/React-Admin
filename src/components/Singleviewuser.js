import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Singleviewuser extends Component {
    
    state={
        name:this.props.user.name,
        username:this.props.user.userame,
        address:this.props.user.address.city,
        phone_no:this.props.user.phone_no,
        email:this.props.user.email,
        website:this.props.user.website,
        isedit:false
    }

    showeditform=()=>{
     this.setState({isedit:!this.state.isedit})
    }

   hideeditform=()=>{
        this.setState({isedit:false})
       }
   
       onchangeeditname=(e)=>{
        this.setState({name:e.target.value})
    }
    onchangeeditusername=(e)=>{
        this.setState({username:e.target.value})
    }
    onchangeeditemail=(e)=>{
        this.setState({email:e.target.value})
    }
    onchangeeditaddress=(e)=>{
        this.setState({address:e.target.value})
    }
    onchangeeditphone_no=(e)=>{
        this.setState({phone_no:e.target.value})
    }
    onchangeeditwebsite=(e)=>{
        this.setState({website:e.target.value})
    }   



   handlesubmit=(e)=>{
     e.preventDefault();
      const editUser={ 
        id:this.props.user.id,
        name:this.state.name,
        address:{city:this.state.address},
        username:this.state.username,
        email:this.state.email,
        phone_no:this.state.phone_no,
        website:this.state.website
  }
  this.props.editUser(editUser);
  this.setState({isedit:false})
   }

    render() {
        const{ id }=this.props.user;
          return (
             
            <div>
           {!this.state.isedit?(
            <div className="row p-1">
               <div className="col-2">{this.props.user.name}</div>
              <div className="col-1">{this.props.user.username}</div>
              <div className="col-2">{this.props.user.email}</div>
              <div className="col-2">{this.props.user.address.city}</div>
              <div className="col-2">{this.props.user.phone_no}</div>
              <div className="col-1">{this.props.user.website}</div>
              <div className="col-1"><button onClick={this.props.delUser.bind(this,id)} className=" btn btn-sm text-danger" >delete</button></div>
              <div className="col-1"><button onClick={this.showeditform} className="btn btn-sm text-prmary" >Edit</button></div>
          </div>):
          (
              <div style={styleform}>
            <form  onSubmit={this.handlesubmit}>
            <h1 className="text-center">Edit User</h1>
             <span className='left' onClick={this.hideeditform}>X</span> 
              <input type="text" name="name" placeholder="name" defaultValue={this.props.user.name} onChange={this.onchangeeditname} required/><br />
              <input type="text"  name="username" placeholder="username" defaultValue={this.props.user.username} onChange={this.onchangeeditusername} required/><br />
               <input type="text" name="email" placeholder="email" defaultValue={this.props.user.email} onChange={this.onchangeeditemail} required/><br/>
              <input type="text" name="address" placeholder="address" defaultValue={this.props.user.address.city} onChange={this.onchangeeditaddress} required/><br />
              <input type="text" name="phone" placeholder="phone_no" defaultValue={this.props.user.phone_no} onChange={this.onchangeeditphone_no} required/><br />
              <input type="text"  name="website" placeholder="website" defaultValue={this.props.user.website} onChange={this.onchangeeditwebsite} required/><br />
               <button  type='submit' className="btn btn-success">Update</button>
              </form>
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
Singleviewuser.propTypes={
    user:PropTypes.object.isRequired 
}

export default Singleviewuser;
