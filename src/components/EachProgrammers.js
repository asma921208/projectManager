import React, {Component} from 'react';

class EachProgrammers extends Component {
  render () {
    return (
      <div>
      <li>
      {this.props.programmers.name} - {this.props.programmers.post}
      </li>
      </div>
    );
  }
}

export default EachProgrammers;
