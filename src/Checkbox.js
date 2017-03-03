import React, { Component, PropTypes } from 'react';

class                                   Checkbox 
extends                                 Component                   {
  
    state                 = {  isChecked: this.props.value  }
  
    
    toggleCheckboxChange  = () => {
        const { handleCheckboxChange, label } = this.props;
        this.setState(({ isChecked }) => ({
            isChecked: !isChecked,
        }));
        handleCheckboxChange(label, this);
    }

    render() {
        const { label }     = this.props;
        const { isChecked } = this.state;

        return (
            <div className="checkbox">
             <label>
              <input
                            type="checkbox"
                            value={label}
                            checked={isChecked}
                            onChange={this.toggleCheckboxChange}
                        />

                    {label}
            </label>
           </div>
        );
    }
}

Checkbox.propTypes = {
  label:                PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;