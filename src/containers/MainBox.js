import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon } from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super();

    this.state = {
      activePage: ''
    }
  }

  handleState = (event) => {
    switch (event.target.id) {
      case 'profile':
        this.setState({
          activePage: <Profile />
        })
        break;
      case 'photo':
        this.setState({
          activePage: <Photos />
        });
        break;
      case 'cocktail':
        this.setState({
          activePage: <Cocktails />
        });
        break;
      case 'pokemon':
        this.setState({
          activePage: <Pokemon />
        });
        break;
    }
  }




  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = this.state.activePage

    return (
      <div>
        <MenuBar handleState={this.handleState}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
