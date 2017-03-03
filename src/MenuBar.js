import React, { Component } from    'react';
import                              './MenuBar.css';

class MenuBar extends Component {
    constructor() {
        super();
        this.state = { focused: 0 };
    }

    clicked                     (index){
        this.setState({focused: index});
    }

    render                      () {
        var self = this;
        return (
            <div>
                <ul>
                <li>. >> {this.props.items[this.state.focused]}</li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                { this.props.items.map(function(m, i){
        
                    var style = '';
        
                    if(self.state.focused === i){
                        style = 'focused';
                    }
        
        
                    return <li key={i} className={style} onClick={self.clicked.bind(self, i)}>{m}</li>;
        
                }) }
                        
               </ul>
                
           </div>
        );

    }
}

export default MenuBar;
