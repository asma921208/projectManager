import React, { Component } from 'react';
import Projects from './components/Projects';
import Programmers from './components/Programmers';
import AddProject from './components/AddProject';


class App extends Component {

  constructor () {
    super();
    this.state = {
      projects: [],
      programmers : []
    }


  }

      componentWillMount () {
        this.setState({projects : [
          {
            title: 'Business Website',
            category: 'WebDesign'
          },
          {
            title: 'Social App',
            category: 'Mobile Dev'
          },
          {
            title: 'E Commerce Shopping Cart',
            category: 'Web Dev'
          }
        ]});

        this.setState({programmers : [
          {
            name: 'John',
            post : 'Web Programmer'
          },
          {
            name: 'Danieal',
            post : 'Tester'
          },
          {
            name: 'Christene',
            post : 'Designer'
          },
        ]});

      }

      handleAddProject (project) {
        let projects = this.state.projects;
        projects.push(project);
        this.setState(projects:projects);
      }


  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects ={this.state.projects} />
        <Programmers programmers={this.state.programmers}/>
      </div>
    );
  }
}

export default App;
