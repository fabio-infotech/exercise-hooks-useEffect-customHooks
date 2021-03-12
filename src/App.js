<<<<<<< HEAD

import React, { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
}

function App() {
  return <Greeting />;
}
=======
import React, { useContext, useEffect } from 'react';

import LastUpdate from './components/LastUpdate';
import Posts from './components/Posts';
import RefreshButton from './components/RefreshButton';
import Selector from './components/Selector';
import { Context } from './components/RedditContext';

const App = () => {
  const {
    fetchPosts,
    selectedSubreddit,
    postsBySubreddit,
    isFetching,
  } = useContext(Context);

  useEffect(() => {
    fetchPosts();
  }, []);

  const { items: posts = [] } = postsBySubreddit[selectedSubreddit];
  const isEmpty = posts.length === 0;

  return (
    <div>
      <Selector />
      <div>
        <LastUpdate />
        <RefreshButton />
      </div>
      {isFetching && <h2>Loading...</h2>}
      {!isFetching && isEmpty && <h2>Empty.</h2>}
      {!isFetching && !isEmpty && <Posts />}
    </div>
  );
};
>>>>>>> main

export default App;
