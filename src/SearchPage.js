import React from 'react';
import "./SearchPage.css";
import TuneIcon from '@mui/icons-material/Tune';

function SearchPage() {
    return (
        <div className="searchpage">
          <div className="searchpage__filter">
              <TuneIcon/>
              <h2>FILTER</h2>
          </div>
           <hr/> 
        </div>
    )
}

export default SearchPage
