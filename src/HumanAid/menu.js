import React from "react";
class Menu extends React.Component {
    render(){
        return(
                <div className="header">
                    <div className="header-menu">
                        <div className="menu-tab">
                            <h2><a href=" "className="menu-link">accueil</a></h2>
                        </div>
                        <div className="menu-tab">
                            <h2><a href=" " className="menu-link">evenement</a></h2>
                        </div>
                        <div className="menu-tab">
                            <h2><a href=" " className="menu-link">association</a></h2>
                        </div>
                        <div className="menu-tab">
                            <h2><a href=" " className="menu-link">contact</a></h2>
                        </div>
                    </div>
                </div>
           )
    }
}

export default Menu;