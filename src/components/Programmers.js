import React , { Component} from 'react';
import EachProgrammers from './EachProgrammers';

class Programmers extends Component {

  render () {
    let eachProgrammers;
    if(this.props.programmers) {
      eachProgrammers = this.props.programmers.map (programmers => {
        return (
            <EachProgrammers programmers={programmers} key = {programmers.name}/>
        );
      });
    }

    return (
      <div>
      <center> <h3>Programmers</h3> </center>
      {eachProgrammers}
      </div>
    );
  }
}

export default Programmers;
