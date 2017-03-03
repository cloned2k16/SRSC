import React, { Component } from    'react';
import                              './PureGrid.css';

class                                   PureGrid
extends                                 Component                   {
    
            state                 = {  filter: this.props.filter  }
                
            constructor                 (oo)                        {
                super(oo);
                this.items           =   oo.model.getProductList();
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
                this.toShow.map(this.createTile)
                
            )

            render                      ()                          {
                var filter      =   this.state.filter
                ,   numTiles    =   this.items.length
                ,   fLen        =   filter.length
                ;
                console.log('num tiles',numTiles);
                this.toShow=[];
                for (var i=0; i<numTiles; i++){
                    var tile    =   this.items[i]
                    ,   showIt  =   false
                    ;
                    for (var f=0; f<fLen; f++){
                        var flt=filter[f];
                        if (flt.val && flt.type===tile.parent.name ){
                            showIt=true; 
                            break;
                        } 
                    }
                    if (showIt) this.toShow.push(tile);
                }
                var numShown=this.toShow.length;
                console.log('num shown',numShown);
                return (
                    <div className="pure-g-r">{this.createTiles()}</div>
                );
            }

};

export default PureGrid;


