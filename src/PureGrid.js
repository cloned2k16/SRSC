import React, { Component } from    'react';
import                              './PureGrid.css';

var     items       = [];

class                                   PureGrid
extends                                 Component                   {
            constructor                 (oo)                        {
                super(oo);
                items=oo.model.getProductList();
                console.log(items)
            }

            createTile  =   oo      =>      (
                <div id="tileBox" className="pure-u-1-6"
                 key={oo.key}
                  style={oo.imgStyle}
                >

                <button style={{ backgroundColor : oo.color }}>{oo.className}</button>
                <p >{oo.text}</p>

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


