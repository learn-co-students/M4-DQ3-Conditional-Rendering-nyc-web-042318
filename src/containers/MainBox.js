import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    selected: "profile"
  }

  myFunc = (event) => {
    this.setState({selected: event.target.id})
  }

  selectPage = () => {
    console.log(this.state.selected)
    let result = ""
    if (this.state.selected === "profile") {
      result = <Profile />
    } else if (this.state.selected === "photo") {
      result = <Photos />
    } else if (this.state.selected === "cocktail") {
      result = <Cocktails />
    } else {
      result = <Pokemon />
    }
    return result
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */


    let detailsToDisplay = this.selectPage();

    return (
      <div>
        <MenuBar selectProp={this.state.selected} onClick={this.myFunc} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
