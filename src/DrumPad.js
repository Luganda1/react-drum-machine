import React, { Component } from 'react'
import ReactDOM from "react-dom"

export default class DrumPad extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
        this.handKeydown = this.handKeydown.bind(this)
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handKeydown);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handKeydown)
    }

    handleClick = () => {
        const name = this.props.name.replace(/-/g, " ");
        // console.log(name)
        this.audio.play();
        this.props.handleClick(name);
    };

    handKeydown = e => {
        const root = ReactDOM.findDOMNode(this);

        if(e.keyCode === this.props.drumKey.charCodeAt()) {
            this.audio.play();
            this.props.handleClick(this.props.name);
        }
    }

    render() {
        const {drumKey, name, src} = this.props;
        return (
            <div 
            onClick={this.handleClick}
            className="drum-pad"
            id={name}
            >
                {drumKey}
                <audio
                ref={ref=> (this.audio = ref)}
                className="clip"
                id={drumKey}
                src={src} />
            </div>
        )
    }
}
