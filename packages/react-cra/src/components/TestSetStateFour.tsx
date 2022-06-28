import { Component } from 'react'
class TestSetStateFour extends Component {
    state = {
        count: 0
    }
    componentDidMount() {
        this.setState({ count: this.state.count + 1})
        console.log('out', this.state.count)
        setTimeout(() => {
            this.setState({ count: this.state.count + 1}, () => {
                console.log('setTimeout', this.state.count)
            })
        }, 0);
    }
    render () {
        return (
            <div>{this.state.count}</div>
        )
    }
}
export default TestSetStateFour