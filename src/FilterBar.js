import React, { Component } from    'react';
import Checkbox             from    './Checkbox';
import                              './FilterBar.css';


class                                   FilterBar  
extends                                 Component                   {
    
    
    constructor                         (props)                     {
        super(props);
        this.updateFn   =   props.update;
    }

    state                 = {  filter: this.props.filterArray  }
    
    toggleCheckbox          = (label,val) =>              {
        var flt=this.state.filter
        ,   len=flt.length
        ;
        for (var i=0; i<len; i++) {
           if (flt[i].label===label){
               flt[i].val=!val.state.isChecked;
           }    
        }
        this.updateFn(flt);
    }
  
    createCheckbox          = oo =>                 (
    
        <li key={oo.label}><Checkbox label={oo.label} value={oo.val}
                            handleCheckboxChange={this.toggleCheckbox}  /></li>
    )
    
    render                              ()                          {
        return ( 
        <div><ul>{ this.state.filter.map( this.createCheckbox ) }</ul></div>
        );
    };
    

}



export default FilterBar;

