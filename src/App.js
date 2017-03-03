import React, { Component } from    'react';
import                              './App.css';
import BrandIdentity        from    './BrandIdentity';
import MenuBar              from    './MenuBar';
import FilterBar            from    './FilterBar';
import PureGrid             from    './PureGrid';
 


class App  extends Component {
    state                       =   { model: this.props.model, filter : this.props.filter }
    
    onFilterChange              =  (flt) => {
        console.log('changed:',flt);
    }
    
    render                      () {
        this.count+=1;
        return ( 
         <div>
          <div id='headBar'  >
           <div id='brandIdentity'><BrandIdentity                                         /></div>
           <div id='menuBar' ><MenuBar items={ this.props.menu } /></div>
         </div>
          <div id='headBar2' ><div id='filterBar'>
                          <FilterBar filterArray={this.state.filter}  
                                     update={this.onFilterChange}                         /></div></div>
          <div id='gridView'><PureGrid model={this.state.model} filter={this.state.filter}/></div>
        </div>
        );
    };
    
}
        
export default App;
