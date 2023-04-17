import './App.css';

const todos_1 = [
  'First Task 01',
  'First Task 02',
  'First Task 03',
  'First Task 04',
];

const todos_2 = [
  'First Task 05',
  'First Task 06',
  'First Task 07',
  'First Task 08',
];

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => <TodoItem key={index} item={todo} />)}
    </ul>
  )
};

function TodoItem({ item }) {
  return (
    <li>{ item }</li>
  )
};

function Message({ message }) {
  return (
    <p>{ message }</p>
  )
};

const Header = () => {
  return (
    <div className="header"></div>
  )
};

function App() {
  const name = 'Philippe De Pauw';
  const user = {
    firstName: 'Philippe',
    lastName: 'De Pauw - Waterschoot',
  };
  let isLoggedIn = true;
  let isMobile = true;

  const fullName = (person) => {
    return `${ person.firstName } ${ person.lastName }`;
  };

  return (
    <>
      <div className="">
        <h1>Hello</h1>
        <p>Hello { name }</p>
        <p>Hello { user.firstName } { user.lastName }</p>
        <p>Hello { fullName(user) }</p>
        <h2>To Do</h2>
        <TodoList todos={todos_1} />
        <TodoList todos={todos_2} />
        <Message message={`PGM-4 is very COOL`} />
        <h2>Data types</h2>
        <div>{false}</div>
        <div>{true}</div>
        <div>{null}</div>
        <div>{undefined}</div>
        <div>{ (true) ? 'Yes' : 'No'}</div>
        <div>{ (isLoggedIn) ? <li>Sign Out</li> : <li>Sign In</li> }</div>
        <div>{ (!isMobile) ? <Header /> : null}</div>
      </div>
      <div>POL</div>
    </>
  );
}

export default App;
