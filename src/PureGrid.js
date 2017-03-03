import React, { Component } from    'react';
import                              './PureGrid.css';

var     items       = [];
const   defaultStyle= {     'backgroundImage'  : 'url(img/fruits.jpg)'
                        ,   'backgroundRepeat' : 'no-repeat'
                        ,   'backgroundSize'   : '100% 40%'
};

class                                   PureGrid 
extends                                 Component                   {
            constructor                 ()                          {
                super();
                for(var i=0; i<111; i++){
                    items[i]='Tile '+i;
                }
            }

            createTile  =   lbl     =>      (
                
                <div id="tileBox" className="pure-u-1-6"
                 key={lbl}
                  style={defaultStyle}
                >
                <button>{lbl}</button>
               </div>
            )
            
            createTiles =   ()      =>      (
                items.map(this.createTile)
            )
            
            render                      ()                          {
                return (
                    <div className="pure-g-r">{this.createTiles()}</div>
                );
            }

};

export default PureGrid;
            
            
            