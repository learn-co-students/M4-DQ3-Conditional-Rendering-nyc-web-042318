import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor() {
    super();
    this.state = {
      Pages: <Profile />,
    highlighted: "item",
    lighttwo: "item",
    lightthree: "item",
    lightfour: "item"
    }

  }

  handleEvent = (event) => {
    // event.preventDefault();
    this.setState({
      highlighted: "item",
      lighttwo: "item",
      lightthree: "item",
      lightfour: "item"
    })
    if (event.target.id == "profile") {
      console.log(event.target)
      this.setState({
        Pages: <Profile />,
      highlighted: "item active"
      })
      console.log(this.state)

    } else if (event.target.id == "photo") {
      console.log(event.target)
      this.setState({
        Pages: <Photos />,
      lighttwo: "item active"
      })
    } else if (event.target.id == "cocktail") {
      console.log(event.target)
      this.setState({
        Pages: <Cocktails />,
      lightthree: "item active"
      })

    } else if (event.target.id == "pokemon") {
      console.log(event.target)
      this.setState({
        Pages: <Pokemon />,
      lightfour: "item active"
      })
    }

  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    var detailsToDisplay = this.state.Pages

    return (
      <div >
        <MenuBar onClick={this.handleEvent} onSame={this.state.highlighted} onNext={this.state.lighttwo}
          onAlso={this.state.lightthree} onLast={this.state.lightfour}
          />
        {detailsToDisplay}

      </div>
    )
  }

}

export default MainBox
