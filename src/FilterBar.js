import React, { Component } from    'react';
import Checkbox             from    './Checkbox';
import                              './FilterBar.css';


class                                   FilterBar  
extends                                 Component                   {
    
    
    constructor                         (props)                     {
        super(props);
        this.orgArray   =   props.filterArray;
        this.fltArray   =   [];
        var oa          = props.filterArray;
        for (var i in oa){
            if (oa.hasOwnProperty(i)){
             var chkB=props.filterArray[i];
             this.fltArray[chkB.label]=chkB.val;
            }
        }
        console.log(this.fltArray)
        this.updateFn   =   props.update;
    }

    state                 = {  filt: this.props.filterArray  }
    
    toggleCheckbox          = (label,val) =>              {
        
        this.fltArray[label]= !val.state.isChecked; 
        this.updateFn(this.fltArray);
        
    }
  
    createCheckbox          = oo =>                 (
    
        <li key={oo.label}><Checkbox label={oo.label} value={oo.val}
                            handleCheckboxChange={this.toggleCheckbox}  /></li>
    )
    
    render                              ()                          {
        return ( 
        <div><ul>{ this.orgArray.map( this.createCheckbox ) }</ul></div>
        );
    };
    

}



export default FilterBar;

