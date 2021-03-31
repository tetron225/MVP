import React from 'react';
import ReactDOM from 'react-dom';
import CharacterInfo from './CharacterInfo.jsx'
import ContainerMisc from './ContainerMisc.jsx'
import FormName from './FormName.jsx'
import FormServer from './FormServer.jsx'
import DataCenter from './DataCenter.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      //extract currentServer from datacenterServer
      currentServer: '',
      totalMount: 0,
      totalMinion: 0,
      datacenterList: [],
      datacenterServer: [],
      currentDatacenter: '',
      minionList: [],
      mountList: [],
      missingMount: [],
      missingMinion: [],
      characterData: [],
      isLoading: true,
      DCIndex: -1,
      isDisabled: true,
      isError: false,
      hasPages: false,
      hasInfo: false
    }
  }

  componentDidMount() {
    this.updateMount()
  }

  updateMount() {
    return axios.get('/servers/dc')
    .then((result)=> {
      console.log(result.data);
      let DCList = [];
      let DCServer = [];
      let datacenter = result.data;

      for(let key in datacenter) {
        DCList.push(key);
        DCServer.push(datacenter[key])
      }

      console.log(DCList);
      console.log(DCServer);

      this.setState({
        datacenterList: [...DCList],
        datacenterServer: [...DCServer],
        isLoading: false
      })
    })
  }

  handleNameChange(e) {
    console.log(e.target.value)
    console.log('check')
    this.setState = ({ name: e.target.value })
  }

  handleSubmit () {
    if(name === '' || currentServer === '' || currentDatacenter === '') {
      this.setState({ isError: true })
    } else {

    }
  }

  handleServerChange (query) {
    let currentServ = query.target.childNodes[query.target.selectedIndex].getAttribute('id');
    console.log(currentServ);
    this.setState({ currentServer: currentServ })
  }

  handleDatacenterChange(query) {
    let currentDC = query.target.childNodes[query.target.selectedIndex].getAttribute('id')
    console.log(currentDC);
    this.setState({
      currentDatacenter: currentDC,
      DCIndex: query.target.selectedIndex-1,
      isDisabled: false
    })
  }

  render () {
    if(this.state.isLoading) {
      return(
      <div>PLEASE STANDBY</div>
      )
    } else {
    return (
      <div>
        <div>FFXIVMissingCollection</div>
        <div> _______</div>
           Hello World
        <div> _______</div>
        {console.log('hello')}
        <div><FormName
          handleNameChange = {this.handleNameChange.bind(this)}
          name = {this.state.name}
        /></div>
        {console.log(this.state.datacenterList)}
        <div><DataCenter
          currentDatacenter = {this.state.currentDatacenter}
          handleDatacenterChange = {this.handleDatacenterChange.bind(this)}
          datacenterList = {this.state.datacenterList}

        /></div>
        <div><FormServer
          datacenterServer = {this.state.datacenterServer}
          currentServer = {this.state.currentServer}
          handleServerChange = {this.handleServerChange.bind(this)}
          DCIndex = {this.state.DCIndex}
          isDisabled = {this.state.isDisabled}
        /></div>
        <div><button>Submit</button></div>
        <div><CharacterInfo
            name={this.state.name}
            currentServer={this.state.currentServer}
            /></div>

        <div><ContainerMisc
          missingMount = {this.state.missingMount}
          missingMinion = {this.state.missingMinion}
        /></div>
        <div></div>

        </div>
    )
    }
  }
}

export default App;