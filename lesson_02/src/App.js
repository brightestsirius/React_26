import List from './components/List/List'
import ListClass from './components/List/ListClass'

function App() {
  const animals = [`cat`, `dog`, `lion`, `tiger`];

  return (
    <>
      <List list={animals} />
      <ListClass list={animals} color="red" />
    </>
  );
}

export default App;