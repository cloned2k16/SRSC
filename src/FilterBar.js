import React, { Component } from    'react';
import Checkbox             from    './Checkbox';
import                              './FilterBar.css';


class                                   FilterBar  
extends                                 Component                   {
    constructor                         (props)                     {
        super(props);
        
        this.fltArray   =   [];
        var choices     =   props.choices;
        
        
        for (var ch in choices){
         if (choices.hasOwnProperty(ch)){
          var chk=props.choices[ch].name;   
          console.log(chk)  
          this.fltArray[chk+'s']=false;
         } 
        }
        
        
    }

    toggleCheckbox          = label =>              {
        
        this.fltArray[label]= !this.fltArray[label];
        console.log(this.fltArray)
    }
  
  
  
    createCheckbox          = oo =>                 (
    
        <li key={oo.name}><Checkbox label={oo.name + "s"}
                            handleCheckboxChange={this.toggleCheckbox}  /></li>
    )
    
    render                              ()                          {
        return ( 
        <div><ul>{ this.props.choices.map( this.createCheckbox ) }</ul></div>
        );
    };
    

}



export default FilterBar;

