import './App.css';
import React, { Component } from 'react';
import Membre from './Components/Membre';
import Button from './Components/Button';


const famille = {
  Membre1: {
    nom: 'sam',
    age: 27
  },

  Membre2: {
    nom: 'aziz',
    age: 24
  },

  Membre3: {
    nom: 'yassine',
    age: 17
  },

  Membre4: {
    nom: 'salma',
    age: 29
  },
  Membre5: {
    nom: 'amira',
    age: 38
  }
}

class App extends Component {
  state = {
    famille,
    isShow: false
  }

  handleClick = num => {
    const famille = { ...this.state.famille }
    famille.Membre1.age += num
    this.setState({ famille })
  }

  handleChange = event => {
    const famille = { ...this.state.famille }
    const nom = event.target.value
    console.log(nom)
    famille.Membre1.nom = nom
    this.setState({ famille })

  }

  hideName = id => {
    const famille = { ...this.state.famille }
    famille[id].nom = 'X'
    this.setState({ famille })

  }

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({ isShow })
  }



  render() {
    const { famille, isShow } = this.state

    let description = null
    if (isShow) {
      description = <strong>  ⎛⎝ im a Devil⎠⎞ </strong>

    }

    const liste = Object.keys(famille)
      .map(Membre => (
        <Membre
        hideName  ={() => this.hideName(Membre)}
          age={famille[Membre].age}
          nom={famille[Membre].nom} />
      ))
    console.log(liste)

    return (

      <div className="App">
        <h1>Membre de Famille :  </h1>
        <input value={famille.Membre1.nom} onChange=
          {this.handleChange} type='text'></input>
        {liste}
        <Membre
          nom={famille.Membre1.nom}
          age={famille.Membre1.age} />
        <Membre
          nom={famille.Membre2.nom}
          age={famille.Membre2.age} />
        <Membre
          nom={famille.Membre3.nom}
          age={famille.Membre3.age} />
        <Membre
          nom={famille.Membre4.nom}
          age={famille.Membre4.age} />
        <Membre
          nom={famille.Membre5.nom}
          age={famille.Membre5.age} />



        {description}

        <button onClick={this.handleShowDescription}  >
          {
            isShow ? 'View' : 'Hidden'
          }

        </button>

        <div>    <Button
          ajout={() => this.handleClick(2)} />  </div>

      </div>


    )
  }
}

export default App