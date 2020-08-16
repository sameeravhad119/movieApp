import React, { Component } from 'react'

class Signup extends Component {
    constructor() {
        this.state = {
            userName: '',
            password: '',
        }
    }

    onChange = (e) => {
        const { name, password } = e.currentTarget;
    }

    render() {
        return (
            <div>
                <input
                    type={'text'}
                    name={'username'}
                    value={this.state.userName}
                    onChange={onChange} />
                <input
                    type={'pass'}
                    name={'password'}
                    value={this.state.password}
                    onChange={onChange} />
            </div>
        )
    }
}
export default Signup;