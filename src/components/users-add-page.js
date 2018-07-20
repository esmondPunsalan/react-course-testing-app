import React from "react";
import UsersForm from "./users-form";
import { connect } from "react-redux";
import { startAddUser } from "../actions/users";

export class UsersAddPage extends React.Component {
    onSubmit = (user) => {
        this.props.startAddUser(user);
        this.props.history.push('/users');
    }
    render() {
        return (
            <div className="content-container">
                Add Users Page
                <UsersForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddUser: (user) => dispatch(startAddUser(user))
});

export default connect(undefined, mapDispatchToProps)(UsersAddPage);