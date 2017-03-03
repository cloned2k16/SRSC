import React, { Component } from    'react';
import                              './TilesGrid.css';

var     items       = [];
const   defaultStyle= {     'backgroundImage'  : 'url(img/fruits.jpg)'
                        ,   'backgroundRepeat' : 'no-repeat'
                        ,   'backgroundSize'   : '100% 40%'
};

class                                   TilesGrid 
extends                                 Component                   {
            constructor                 ()                          {
                super();
                for(var i=0; i<111; i++){
                    items[i]='Tile '+i;
                }
            }
    
            createTile  =   lbl     =>      (
                
                <li className="tileBox"
                 key={lbl}
                  style={defaultStyle}
                >
                <button>{lbl}</button>
               </li>
            )
            
            createTiles =   ()      =>      (
                items.map(this.createTile)
            )
            
            render                      ()                          {
                return (
                    <ul className="tilesGrid">{this.createTiles()}</ul>
                );
            }

};

export default TilesGrid;
