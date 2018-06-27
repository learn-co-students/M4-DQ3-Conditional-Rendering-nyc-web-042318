import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      page: ''
    }

  }

  someFunction() {
    if (this.state.page === 'profile') {return  < Profile /> }
    if (this.state.page === 'photo') {return  < Photos /> }
    if (this.state.page === 'cocktail') {return  < Cocktails /> }
    if (this.state.page === 'pokemon') {return  < Pokemon /> }
  }

  clickHandler = (event) => {
    if (event.target.id  === 'profile') { this.setState({page: 'profile'})  }
    if (event.target.id  === 'photo') { this.setState({page: 'photo'})  }
    if (event.target.id  === 'cocktail') { this.setState({page: 'cocktail'})  }
    if (event.target.id  === 'pokemon') { this.setState({page: 'pokemon'})  }
  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */
    

    const detailsToDisplay = <div> {this.someFunction()} </div>

    return (
      <div>
        <MenuBar  clickHandler={this.clickHandler} />

        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
