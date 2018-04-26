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
				   _log('getProductList');
				   
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
                version         :   '0.0.3'
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
    ShopTile    .prototype.label        ='NONE';                                                        // eslint-disable-line 
//  ----------------------------------- --------------------------- ---------------------------------
    var categories                      =   ['Vegetable'
                                            ,'Fruit'
                                            ,'Meat'
                                            ,'Bread'
                                            ,'Toy'
                                        ]
    ,   vegetables                      =   ['Aubergine'
                                            ,'Broccoli'
                                            ,'Zucchini'
                                            ,'Carrot'
                                            ,'Cauliflower'
                                            ,'Asparagus'
                                            ,'Spinach'
                                        ]
    ,   fruits                          =   ['Banana'
                                            ,'Apple'
                                            ,'Orange'
                                            ,'Cherry'
                                            ,'Mango'
                                            ,'Coconut'
                                            ,'Lemon'
                                            ,'Lychee'
                                        ]
    ,   meats                           =   ['Chicken'
                                            ,'Beef'
                                            ,'Pork'
                                            ,'Lamb'
                                            ,'Goat'
                                        ]
    ,   breads                          =   ['Baguette'
                                            ,'Pretzel'
                                            ,'Brioche'
                                            ,'Ciabatta'
                                        ]
    ,   toys                            =   ['GameBoy']
    ,   createObjects                   =   (bundle ,outList)       =>  {                               //  build a list of Function extending a specific Function (OO alike) 
                                                                                                        //  and store them in outList
        var k
        ,   i
        ,   o
        ,   nm
        ,   oo
        ,   lst
        ,   knd
        ,   bLen            = bundle.length
		
		//  a clarification here may be required ...
		//  this 'imageExists' thing is a really bad & dirth solution (I know)
        //	but the optimization of this part was byond the scope of this test 
		//  the point here was to make the Tile Image fall back to the category image or to a color if none actually found on the server
		//  this code actually wont be necessary at all by just making sure all the image are in place or using a list of actually existing ones 
		//  either way it may become inconsistent somehow if not handled automatically in the backend
		//  and that's the point here (the fallback thing depending on actual availability of the images having no backend at all)
		
		//  to achieve same thing asynchronously we need to setup a binding wich will update all the objects once we know which images actually exist
		//  and also make sure to use a proper synchronization, in order to don't mess things up in an inconsistent way  ...
		//  not so difficult but, has to be coded :D 
		
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
                eval ('window. '+nm+'= function '+nm+'(){ '+nm                                          // eslint-disable-line
                        +'.prototype.super(this);'
                        + (imageExists('img/'+nm+'.jpg')
                        ? 'this.image= "url(img/'+nm+'.jpg)";'
                        : '')
                        +'}');
                oo=eval(nm);                                                                            // eslint-disable-line
                Extends(oo,knd);            
                eval (nm+'.prototype.label="'+nm+'"');                                                  // eslint-disable-line
                eval (nm+'.prototype.image="'+nm+'"');                                                  // eslint-disable-line
                outList.push(oo);
            }
        }
    }
    ,   catList                         =   [];
    ;
    
    createObjects (    [{ 'kind' : ShopTile     , 'list' : categories   }]
                    ,catList);
    
    createObjects (    [{ 'kind' : catList[0]   , 'list' : vegetables   }
                    ,   { 'kind' : catList[1]   , 'list' : fruits       }
                    ,   { 'kind' : catList[2]   , 'list' : meats        }
                    ,   { 'kind' : catList[3]   , 'list' : breads       }
                    ,   { 'kind' : catList[4]   , 'list' : toys         }
                    ]
                    ,_APP.model.productTypes);
    ;
//  ----------------------------------- --------------------------- ---------------------------------
//  ----------------------------------- --------------------------- ---------------------------------
//  ----------------------------------- --------------------------- ---------------------------------
    var filter                          = [ { 'type' : catList[2].name ,'label' : 'Meats'     , 'val' : true }
                                        ,   { 'type' : catList[1].name ,'label' : 'Fruits'    , 'val' : true }
                                        ,   { 'type' : catList[0].name ,'label' : 'Vegetables', 'val' : true }
                                        ,   { 'type' : catList[3].name ,'label' : 'Breads'    , 'val' : true }
                                        ,   { 'type' : catList[4].name ,'label' : 'Toys'      , 'val' : true }
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

    

