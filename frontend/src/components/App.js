import Navigator from './Navigator';
import React, { Component } from 'react';
import NewsList from './NewsList';
import Search from './Search';


class App extends Component {
  render() {
    return (
     	<div>
    		<Search />
    		<NewsList />
  		</div>
    );
  }
}

export default App;
