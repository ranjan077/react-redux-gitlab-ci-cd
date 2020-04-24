import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getTodosAction} from '../actions/todosActions'

class Todos extends Component {
    static propTypes = {
        todos: PropTypes.array,
        loading: PropTypes.bool,
    }
    constructor(props) {
        super(props)
        this.props = props;
    }
    
    render() {
        const {todos, loading} = this.props;
        return (
            <div className="todos-container">
                <h3> List of todos</h3>
                {
                    loading ? "Loding..." : todos.map((todo) => {
                        return <div className="todo" key={todo.title}>{todo.title}</div>
                    })
                }
            </div>
        )
    }

    componentDidMount() {
        this.props.getTodosAction();
    }

    
}

const mapStateToProps = ({todos}) => {
    return {
        todos: todos.todos,
        loading: todos.loading,
    }
}

const mapDispatchToProps = (disptach) => {
    return {
        ...bindActionCreators({
            getTodosAction
        }, disptach)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
