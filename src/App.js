
import React, { Component } from 'react'
import Display from "./Display"
import DrumPad from "./DrumPad"

// const data =["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]

const drumData = [{
  name: 'Heater-1',
  key: 'Q',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  name: 'Heater-2',
  key: 'W',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  name: 'Heater-3',
  key: 'E',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  name: 'Heater-4',
  key: 'A',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  name: 'Clap',
  key: 'S',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  name: 'Open-HH',
  key: 'D',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  name: "Kick-n'-Hat",
  key: 'Z',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  name: 'Kick',
  key: 'X',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  name: 'Closed-HH',
  key: 'C',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];
console.log(drumData);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "press any key to play sound"
    }

    this.handleClick = this.handleClick.bind(this)
    this.changeDisplay = this.changeDisplay.bind(this)

  }

  handleClick = name => this.setState({display: name});
  changeDisplay = name => this.setState({display:name})

  render() {
    return (
      <div className="drum" id="drum-machine">
        <div className="drum-display" id="display">
          <Display display={this.state.display}/>
        </div>
          <div className="drum-pads">
            {drumData.map(button => (
              <DrumPad  
              handleClick={this.handleClick}
              display={this.state.display}
              drumKey={button.key} 
              name={button.name}
              src={button.src}/>
            ))}
          </div>
      </div>
    )
  }
}

export default App;
