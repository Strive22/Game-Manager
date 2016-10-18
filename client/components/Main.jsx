var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios'); //Used for AJAX calls
var AllPlayersList = require('./AllPlayersList.jsx');
var Player = require('./Player.jsx');
var TournamentList = require('./TournamentList.jsx');

class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      data: 'HI',
      allPlayersList: ['Ben', 'Nick', 'Scott', 'Chris'], //Test data, remove later
      tourneyPlayersList: ['someone', 'or'],
      inProgress: false
    };
  }

  getAllPlayers() {
    var self = this;
    axios.get('/api/player')
      .then(function(playerData) {
        // self.setState({
        //   AllPlayersList : playerData.data
        // })
        console.log(playerData)
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getAllPlayers()
  }


  // this function is passed through props and attached to a player component
    // in the list of existing players. It moves a player to the tournament to be.
  addPlayerToTourney(index, players) {
    this.setState({
      TourneyPlayersList : this.state.TourneyPlayersList.push(players[index])
    })
  }

  render() {
    if (this.state.inProgress) {
      return (
        <div>
          <div>
            some stuff here that will be awesome
          </div>
        </div>
      );
    } else {
      return (
        <div>

          <div class="container">
            <div class="jumbotron header">
              <h1>Create a Tournament</h1>
              <p>
                Welcome!
                <br />
                Create your tournament below by adding new players or picking from the list on the right!
              </p>
            </div>

          </div>

          <div class="row">
            <div class="col-xs-1"></div>
            <div class="col-xs-10">
              <div class="container">
                <h2>Add Player will go here</h2>
              </div>
            </div>
            <div class="col-xs-1"></div>
          </div>

          <div class="row">

            <div class="col-xs-1">
            </div>

            <div class="col-xs-5">
              <TournamentList players={this.state.tourneyPlayersList} />
            </div>

            <div class="col-xs-5">

            </div>

            <div class="col-xs-1">
            </div>

          </div>

          <div>
            <AllPlayersList players={this.state.allPlayersList} click={this.addPlayerToTourney.bind(this)}/>
          </div>

          <div>
            <TournamentList players={this.state.tourneyPlayersList} />
          </div>

        </div>
      );
    }
  }

}

module.exports = Main;