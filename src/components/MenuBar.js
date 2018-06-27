import React from 'react'

const MenuBar = (props) => {
  let activeClass1 = "item"
  let activeClass2 = "item"
  let activeClass3 = "item"
  let activeClass4 = "item"
  switch (props.selected) {
    case "profile":
      activeClass1 =  "item active"
      break;
    case "photo":
      activeClass2 = "item active"
      break;
    case "cocktail":
      activeClass3 = "item active"
      break;
    case "pokemon":
      activeClass4 = "item active"
      break;
  }

  return (
    <div className="ui four item menu" onClick={props.onClick}>
      <a className={activeClass1} id="profile">
        <i className="user large icon" id="profile"/>
      </a>

      <a className={activeClass2} id="photo">
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={activeClass3} id="cocktail">
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={activeClass4} id="pokemon">
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
