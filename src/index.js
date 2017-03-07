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
            ,   productTypes    :   []
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
//  ----------------------------------- --------------------------- ---------------------------------
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
    ShopTile    .prototype.label='NONE'     ;                                                           // eslint-disable-line 
//  ----------------------------------- --------------------------- ---------------------------------
    var products                        =   ['Vegetable'
                                            ,'Fruit'
                                            ,'Meat'
                                            ,'Bread'
                                        ]
    ,   vegetables                      =   ['Aubergine'
                                            ,'Broccoli'
                                            ,'Zucchini'
                                            ,'Carrot'
                                        ]
    ,   fruits                          =   ['Banana'
                                            ,'Apple'
                                            ,'Orange'
                                            ,'Cherry'
                                        ]
    ,   meats                           =   ['Chicken'
                                            ,'Beef'
                                            ,'Pork'
                                        ]
    ,   breads                          =   ['Baguette'
                                            ,'Pretzel'
                                        ]
    ,   createObjects                   =   (bundle,list)  =>  {
        var k
        ,   i
        ,   o
        ,   nm
        ,   oo
        ,   lst
        ,   knd
        ,   bLen            = bundle.length
        ,   imageExists     = (url) =>  {
                var http = new XMLHttpRequest();
                    http.open('HEAD', url, false);
                    http.send();
                    return http.status !== 404;
        }
        ;
        
        for (k=0 ; k< bLen ; k++ ){
            o   = bundle[k];
            knd = o.kind;
            lst = o.list;
            for (i = 0 ; i< lst.length ; i++ ){
                nm = lst[i];
                eval ('window. '+nm+'= function '+nm+'(){ '+nm                                                // eslint-disable-line
                        +'.prototype.super(this);'
                        + (imageExists('img/'+nm+'.jpg')
                        ? 'this.image= "url(img/'+nm+'.jpg)";'
                        : '')
                        +'}');
                oo=eval(nm);                                                                            // eslint-disable-line
                Extends(oo,knd);            
                eval (nm+'.prototype.label="'+nm+'"');                                                  // eslint-disable-line
                eval (nm+'.prototype.image="'+nm+'"');                                                  // eslint-disable-line
                list.push(oo);
            }
        }
    }
    ,   categories                      =   [];
    ;
    
    createObjects (    [{ 'kind' : ShopTile  , 'list' : products     }]
                    ,categories);
    
    createObjects (    [{ 'kind' : categories[0] , 'list' : vegetables   }
                    ,   { 'kind' : categories[1] , 'list' : fruits       }
                    ,   { 'kind' : categories[2] , 'list' : meats        }
                    ,   { 'kind' : categories[3] , 'list' : breads       }
                    ]
                    ,_APP.model.productTypes);
    ;
//  ----------------------------------- --------------------------- ---------------------------------
//  ----------------------------------- --------------------------- ---------------------------------
//  ----------------------------------- --------------------------- ---------------------------------
    var filter                          = [ { 'type' : categories[2].name ,'label' : 'Meats'     , 'val' : true }
                                        ,   { 'type' : categories[1].name ,'label' : 'Fruits'    , 'val' : true }
                                        ,   { 'type' : categories[0].name ,'label' : 'Vegetables', 'val' : true }
                                        ,   { 'type' : categories[3].name ,'label' : 'Breads'    , 'val' : true }
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

    

