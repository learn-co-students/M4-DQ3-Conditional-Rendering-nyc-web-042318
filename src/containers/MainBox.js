import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    selected: "profile"
  }

  display = event => {
    this.setState({selected: event.target.id})
  }

  selectPage = () => {
    let result = ""
    switch (this.state.selected) {
      case "profile":
        result = <Profile />
        break;
      case "photo":
        result = <Photos />
        break;
      case "cocktail":
        result = <Cocktails />
        break;
      case "pokemon":
        result = <Pokemon />
        break;
    }
    return result
  }

  render() {
    const detailsToDisplay = this.selectPage();
    return (
      <div>
        <MenuBar onClick={this.display} selected={this.state.selected}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
