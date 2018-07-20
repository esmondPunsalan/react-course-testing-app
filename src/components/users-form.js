import React from "react";

export default class UsersForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: props.email ? props.email: "",
            password: props.password ? props.password: "",
            givenName: props.giveName ? props.giveName: "",
            surname: props.surname ? props.surname: "",
        };
    }
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    };
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };
    onGivenNameChange = (e) => {
        const givenName = e.target.value;
        this.setState(() => ({ givenName }));
    };
    onSurnameChange = (e) => {
        const surname = e.target.value;
        this.setState(() => ({ surname }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            email: this.state.email,
            password: this.state.password,
            givenName: this.state.givenName,
            surname: this.state.surname
        });
    }
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                <div className="button-group">
                    <button className="button button--nav">Save</button>
                </div>
                <div className="input-group">
                    <input type="text" className="text-input input-group__item" placeholder="Email" value={this.state.email} onChange={this.onEmailChange} />
                    <input type="text" className="text-input input-group__item" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} />
                </div>
                <div className="input-group">
                    <input type="text" className="text-input input-group__item" placeholder="Given Name" autoFocus value={this.state.givenName} onChange={this.onGivenNameChange}/>
                    <input type="text" className="text-input input-group__item" placeholder="Surname" value={this.state.surname} onChange={this.onSurnameChange} />
                </div>
            </form>
        )
    }
}