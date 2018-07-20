import React from "react";
import UsersList from "./users-list";
import { Link } from "react-router-dom";

export default class UsersPage extends React.Component {

    render() {
        return (
            <div className="content-container">
                <div className="button-group">
                    <Link className="button button--nav" to="/users/add">+ User</Link>
                </div>
                <UsersList/>
            </div>
        )
    }
}