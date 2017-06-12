
import React, { Component } from 'react';



class AddProject extends Component {

constructor() {
  super ();
  newProject : {}
}

  static defaultProps = {
    categories: ['WebDesign', 'Web Dev', 'Mobile Dev']
  }

handleSubmit (e) {
  e.preventDefault();
  if(this.refs.title.value === '') {
    alert ('Title is Required');
  }else {
    this.setState({newProject : {
      title : this.refs.title.value,
      category : this.refs.category.value
    }}, function () {

      this.props.addProject(this.state.newProject);

    });
  }
}

  render() {

let categoryOption = this.props.categories.map (category => {
  return <option key={category} value={category}>{category}</option>
});

    return (
      <div >
      <center>
      <h3>Add Projects</h3>
        </center>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div>

      <label> Title </label> <br/>
      <input type="text" ref="title" />
      </div>

      <div>
      <label> Category </label> <br/>
      <select ref="category">
      {categoryOption}
      </select>
      </div>
      <input type='submit' value='Submit'/>
      </form>


      </div>
    );
  }
}

export default AddProject;
