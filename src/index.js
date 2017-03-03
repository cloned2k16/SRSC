 /* seslint-disable s */
 
import React            from    'react';
import ReactDOM         from    'react-dom';
import App              from    './App';
import MenuBar          from    './MenuBar';
import FilterBar        from    './FilterBar';
//import TilesGrid        from    './TilesGrid';
import PureGrid         from    './PureGrid';
import BrandIdentity    from    './BrandIdentity';

import                      './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
  
ReactDOM.render(
  <MenuBar items={ ['Home', 'Products', 'Services', 'Contact'] }  />,
  document.getElementById('menuBar')
);

ReactDOM.render(
  <FilterBar choices={[Meat,Fruit,Vegetable,Bread]} />,
  document.getElementById('filterBar')
);

ReactDOM.render(
  <BrandIdentity />,
  document.getElementById('brandIdentity')
);

ReactDOM.render(
  <PureGrid />,
  document.getElementById('gridView')
);

//  ----------------------------------- --------------------------- ---------------------------------
    var ND
    ,   _CON            =   console
    ,   _log            =   (... a)     =>  { Function.apply.call(_CON.log     ,_CON,a); }              // eslint-disable-line   
    ,   _err            =   (... a)     =>  { Function.apply.call(_CON.error   ,_CON,a); }              // eslint-disable-line   
//  ----------------------------------- --------------------------- ---------------------------------
    function    Extends                 (oo, parent)                {

        oo.prototype              = Object.create(parent.prototype);                                    //  just protoype stuff !
        oo.prototype.constructor  = oo;                                                                 //  fix misplaced constructor
        oo.prototype.parent       = parent;                                                             //  hold parent here
        oo.prototype.super        = (th)    => {                                                        //  super emulated call
            this.prototype.parent.call(th);
            th.className    =   oo.name;
            th.parent       =   parent;
        }
    }
//  ----------------------------------- --------------------------- ---------------------------------
    function    ShopTile                ()                          {
        this.backColor  =   '#FFF';
        this.colSpan    =   2;
        this.rowSpan    =   3;
        this.type       =  ND;
        this.text       =   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
//  ----------------------------------- --------------------------- ---------------------------------
    function    Vegetable               ()  {   Vegetable   .prototype.super(this);// eslint-disable-line
        this.color          = '#40F060'
        this.image          = "url('img/vegetables.jpg')"
    }
//  ----------------------------------- --------------------------- ---------------------------------
    function    Fruit                   ()  {   Fruit       .prototype.super(this);// eslint-disable-line
        this.color          = '#E09040'
        this.image          = "url('img/fruits.jpg')"
    }
//  ----------------------------------- --------------------------- ---------------------------------
    function    Meat                    ()  {   Meat        .prototype.super(this);// eslint-disable-line
        this.color          = '#E04040'
        this.image          = "url('img/meats.jpg')"
    }
//  ----------------------------------- --------------------------- ---------------------------------
    function    Bread                   ()  {   Bread       .prototype.super(this);// eslint-disable-line
        this.color          = '#E04040'
        this.image          = "url('img/breads.jpg')"
    }
//  ----------------------------------- --------------------------- ---------------------------------
    Extends     (Vegetable  , ShopTile);
    Extends     (Fruit      , ShopTile);
    Extends     (Meat       , ShopTile);
    Extends     (Bread      , ShopTile);
    

