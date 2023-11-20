// App.js
function Hello() {
  return <p>Hello, jot</p>;
}
// App.js
function Bye() {
  return <p>Goodbye, jot</p>;
}
// App.js
function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <Bye />
      <Bye />
      <Bye />
    </div>
  );
}

export default App;