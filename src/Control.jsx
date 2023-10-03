import React from 'react';
import './App.css';
function Control(){
    return (
        
        <div class="btnalignment">
          <div class="Forward">
            <button>&uArr;</button>
          </div>
          <div class="leftright">
            <button>&lArr;</button>
            <button>&rarr;</button>
            <button>&rArr;</button>
          </div>
          <div class="Forward">
            <button>&dArr;</button>
          </div>
        </div>
    )
}

export default Control