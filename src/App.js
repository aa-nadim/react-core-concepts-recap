import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className='App'>
      <LoadPosts />
      <District name='Noakhali' special='Bivag' />
      <District name='Bramonbaria' special='joda akbar' />
      <District name='Sumilla' special='Moyna and moti' />
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  //console.log(posts);
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {posts.map((post) => (
        <Post title={post.title} body={post.body} />
      ))}
    </div>
  );
}
function Post(props) {
  console.log(props);
  return (
    <div
      style={{
        backgroundColor: 'lightgray',
        margin: '20px',
        border: '4px solid salmon',
      }}
    >
      <h2>Title: {props.title} </h2>
      <p>Body: {props.body}</p>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'lightblue',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px',
};

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    setPower(power * 2);
  };
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special} </p>
      <h4>Power: {power}</h4>
      <button onClick={() => boostPower()}>Boost The Power</button>
    </div>
  );
}
export default App;
