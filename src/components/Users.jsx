import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {getUsersAction, updateThirdUser, addNewnameAtTop} from '../actions/usersActions'

class Users extends Component {
    static propTypes = {
        users: PropTypes.array,
        loading: PropTypes.bool,
    }
    constructor(props) {
        super(props)
        this.props = props;
    }
    changeThirdUserName = () => {
        this.props.updateThirdUser();
    }
    addNewnameAtTop =() => {
        this.props.addNewnameAtTop();
    }
    render() {
        const {users, loading} = this.props;
        return (
            <div className="users-container">
                <h3> List of usres</h3>
                {
                    loading ? "Loding..." : users.map((user, index) => {
                        return <div className="user" key={user.name}>{user.name}</div>
                    })
                }
                <button onClick={this.changeThirdUserName}>Change third user name</button>
                <button onClick={this.addNewnameAtTop}>Add new name at top</button>
            </div>
        )
    }

    componentDidMount() {
        this.props.getUsersAction();
    }

    
}

const mapStateToProps = ({users}) => {
    return {
        users: users.users,
        loading: users.loading,
    }
}

const mapDispatchToProps = (disptach) => {
    return {
        ...bindActionCreators({
            getUsersAction,
            updateThirdUser,
            addNewnameAtTop,
        }, disptach)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
