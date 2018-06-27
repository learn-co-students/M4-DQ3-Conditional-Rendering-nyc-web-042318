import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(props) {
    super(props)

    this.state= {
      selectedItem: "profile"
    }
  }

  changeSelected = (event) => {
    if (event.target.id === "profile") {
      this.setState({selectedItem: 'profile'})
    } else if (event.target.id === "photo") {
      this.setState({selectedItem: "photo"})
    } else if (event.target.id === "cocktail") {
      this.setState({selectedItem: 'cocktail'})
    } else if (event.target.id === "pokemon") {
      this.setState({selectedItem: "pokemon"})
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar getSelectedPage={this.changeSelected} />
        {this.state.selectedItem === "profile" ? <Profile /> : null}
        {this.state.selectedItem === "photo" ? <Photos /> : null}
        {this.state.selectedItem === "cocktail" ? <Cocktails /> : null}
        {this.state.selectedItem === "pokemon" ? <Pokemon /> : null}
      </div>
    )
  }

}

export default MainBox
