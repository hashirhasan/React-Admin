import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Singleviewuser from './Singleviewuser';

export class Viewusers extends Component {
    render() {
        // console.log(this.props.users)
        return (
            <div>
   <div className="row p-2">
  
            <div className="font-weight-bold col-2">Name</div>
            <div className="font-weight-bold col-1">Username</div>
            <div className="font-weight-bold col-2">Email</div>
            <div className="font-weight-bold col-2">Address</div>
            <div className="font-weight-bold col-2">Phone No</div>
            <div className="font-weight-bold col-1">Website</div>
            <div className="font-weight-bold col-1">DELETE</div>
            <div className="font-weight-bold col-1">EDIT</div>
          </div>
           { this.props.users.map((user)=>{
                return (  
                 <Singleviewuser  key={user.id} user={user}  delUser={this.props.delUser}  editUser={this.props.editUser}/>
                    )
                    } )
          }
    </div>
        );   
    
    }
}

//PropTypes 

Viewusers.propTypes={
    users:PropTypes.array.isRequired 
}
export default Viewusers;
