import React            from    'react';
import ReactDOM         from    'react-dom';
import App              from    './App';
import                          './index.css';

//  ----------------------------------- --------------------------- ---------------------------------
    var ND
    ,   _CON            =   console
    ,   _byId           =   (id)        =>  { return document.getElementById(id);        }
    ,   _log            =   (... a)     =>  { Function.apply.call(_CON.log     ,_CON,a); }              // eslint-disable-line   
    ,   _err            =   (... a)     =>  { Function.apply.call(_CON.error   ,_CON,a); }              // eslint-disable-line   
    ,   DB_model        =   {
                numProducts     :   111
            ,   productTypes    :  [Banana
                                ,   Apple
                                ,   Orange
                                ,   Chicken
                                ,   Beef
                                ,   Aubergine
                                ,   Broccoli
                                ,   Zucchini
                                ,   Baguette
                                ,   Cherry
                                ,   Pork
                                ,   Carrot
                                ,   Pretzel
                                ]
            ,   rndElement      :   function    (a)             {
                    return a[Math.floor(Math.random()*a.length)];
                }
            ,   randomProduct   :   function    ()              {
                    var sel = this.rndElement(this.productTypes);
                    var tile= new sel();
                    return tile;
                }
            ,   getProductList  :   function    ()              {
                    var list    = []
                    ,   numProd = this.numProducts;
                    ;
                    for (var i = 0; i < numProd; i++) {
                        var p=this.randomProduct();
                        p.key       =i+1;
                        p.imgStyle  ={  'backgroundImage'  : p.image
                                    ,   'backgroundRepeat' : 'no-repeat'
                                    ,   'backgroundSize'   : '100% 40%'
                        };  
                        list.push(p);
                    }
                    return list;
                }
        }
    ,   _APP            =   {
                version         :   '0.0.1'
            ,   author          :   'Paolo Lioy'
            ,   model           :   DB_model
        }
    ;
//  ----------------------------------- --------------------------- ---------------------------------
    function    Extends                 (oo, parent)                {

        oo.prototype              = Object.create(parent.prototype);                                    //  just protoype stuff !
        oo.prototype.constructor  = oo;                                                                 //  fix misplaced constructor
        oo.prototype.parent       = parent;                                                             //  hold parent here
        oo.prototype.super        = (th)    => {                                                        //  super emulated call
            oo.prototype.parent.call(th);
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
    function    Vegetable               ()  {   Vegetable   .prototype.super(this);                     // eslint-disable-line
        this.color          = '#40F060'
        this.image          = "url('img/vegetables.jpg')"
    }
//  ----------------------------------- --------------------------- ---------------------------------
    function    Fruit                   ()  {   Fruit       .prototype.super(this);                     // eslint-disable-line
        this.color          = '#E09040'
        this.image          = "url('img/fruits.jpg')"
    }
//  ----------------------------------- --------------------------- ---------------------------------
    function    Meat                    ()  {   Meat        .prototype.super(this);                     // eslint-disable-line
        this.color          = '#E04040'
        this.image          = "url('img/meats.jpg')"
    }
//  ----------------------------------- --------------------------- ---------------------------------
    function    Bread                   ()  {   Bread       .prototype.super(this);                     // eslint-disable-line
        this.color          = '#D0D040'
        this.image          = "url('img/breads.jpg')"
    }
//  ----------------------------------- --------------------------- ---------------------------------
    Extends     (Vegetable  , ShopTile);
    Extends     (Fruit      , ShopTile);
    Extends     (Meat       , ShopTile);
    Extends     (Bread      , ShopTile);
//  ----------------------------------- --------------------------- ---------------------------------
    function    Banana                  ()  {   Banana      .prototype.super(this);                     // eslint-disable-line    
        this.image          = "url('img/banana.jpg')"
    }
    function    Apple                   ()  {   Apple       .prototype.super(this); }                   // eslint-disable-line
    function    Orange                  ()  {   Orange      .prototype.super(this);                     // eslint-disable-line
        this.image          = "url('img/orange.jpg')"
    }

    function    Cherry                  ()  {   Cherry      .prototype.super(this);                     // eslint-disable-line
        this.image          = "url('img/cherry.jpg')"
        this.backColor='#FFE'; 
    }

    Extends     (Banana     , Fruit);
    Extends     (Apple      , Fruit);
    Extends     (Orange     , Fruit);
    Extends     (Cherry     , Fruit);
//  ----------------------------------- --------------------------- ---------------------------------
    function    Chicken                 ()  {   Chicken     .prototype.super(this);                     // eslint-disable-line
        this.image          = "url('img/pollo.jpg')"
    }
    function    Beef                    ()  {   Beef        .prototype.super(this); }                   // eslint-disable-line
    function    Pork                    ()  {   Pork        .prototype.super(this);                     // eslint-disable-line
        this.image          = "url('img/pork.jpg')"
        this.backColor='#FEE';     
    }

    Extends     (Chicken    , Meat);
    Extends     (Beef       , Meat);
    Extends     (Pork       , Meat);
//  ----------------------------------- --------------------------- ---------------------------------
    function    Aubergine               ()  {   Aubergine   .prototype.super(this);                     // eslint-disable-line
        this.image          = "url('img/aubergine.jpg')"
    }
    function    Broccoli                ()  {   Broccoli    .prototype.super(this);                     // eslint-disable-line
        this.image          = "url('img/broccoli.jpg')"
    }
    function    Zucchini                ()  {   Zucchini    .prototype.super(this);                     // eslint-disable-line
        this.image          = "url('img/zucchini.jpg')"
    }
    function    Carrot                  ()  {   Carrot      .prototype.super(this);                     // eslint-disable-line
        this.image          = "url('img/carrot.jpg')"
        this.backColor='#FDD'; 
    }    

    Extends     (Aubergine  , Vegetable);
    Extends     (Broccoli   , Vegetable);
    Extends     (Zucchini   , Vegetable);
    Extends     (Carrot     , Vegetable);
//  ----------------------------------- --------------------------- ---------------------------------
    function    Baguette                ()  {   Baguette    .prototype.super(this);                     // eslint-disable-line
        this.image          = "url('img/baguette.jpg')"
    }
    function    Pretzel                 ()  {   Pretzel     .prototype.super(this);                     // eslint-disable-line
        this.image          = "url('img/pretzel.jpg')"
        this.backColor='#DFF'; 
    }                        

    Extends     (Baguette   , Bread);
    Extends     (Pretzel    , Bread);
//  ----------------------------------- --------------------------- ---------------------------------
    ShopTile    .prototype.label='NONE'     ;                                                           // eslint-disable-line 
    Banana      .prototype.label='Banana'   ;                                                           // eslint-disable-line
    Apple       .prototype.label='Apple'    ;                                                           // eslint-disable-line
    Orange      .prototype.label='Orange'   ;                                                           // eslint-disable-line
    Chicken     .prototype.label='Chicken'  ;                                                           // eslint-disable-line
    Beef        .prototype.label='Beef'     ;                                                           // eslint-disable-line
    Aubergine   .prototype.label='Aubergine';                                                           // eslint-disable-line
    Broccoli    .prototype.label='Broccoli' ;                                                           // eslint-disable-line
    Zucchini    .prototype.label='Zucchini' ;                                                           // eslint-disable-line
    Baguette    .prototype.label='Baguette' ;                                                           // eslint-disable-line
    Cherry      .prototype.label='Cherry'   ;                                                           // eslint-disable-line
    Pork        .prototype.label='Pork'     ;                                                           // eslint-disable-line
    Carrot      .prototype.label='Carrot'   ;                                                           // eslint-disable-line
    Pretzel     .prototype.label='Pretzel'  ;                                                           // eslint-disable-line
//  ----------------------------------- --------------------------- ---------------------------------
//  ----------------------------------- --------------------------- ---------------------------------
//  ----------------------------------- --------------------------- ---------------------------------
    var filter                          = [ { 'type' : Meat.name        ,'label' : 'Meats'     , 'val' : false}
                                        ,   { 'type' : Fruit.name       ,'label' : 'Fruits'    , 'val' : true }
                                        ,   { 'type' : Vegetable.name   ,'label' : 'Vegetables', 'val' : false}
                                        ,   { 'type' : Bread.name       ,'label' : 'Breads'    , 'val' : false}
                                        ];
//  ----------------------------------- --------------------------- ---------------------------------
    var menu                            = ['Home', 'Products', 'Services', 'Contact'];             
//  ----------------------------------- --------------------------- ---------------------------------
    ReactDOM.render(
        <App model={_APP.model} 
             filter={filter} 
             menu={menu}                                                                            />,
        _byId('root')
    );
//  ----------------------------------- --------------------------- ---------------------------------

    

