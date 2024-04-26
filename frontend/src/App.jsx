import "./App.css";
import usericon from './assets/images/user icon.png';

function App() {
  return (
    <main className="bg-green">
      <div className="text-5xl"> Hello Sumaya, Go to App.jsx to edit the page</div>
    <p className="text-4xl text-green-600 font-medium">hello! just wanted to test  this if it works</p>
    <img src={usericon} alt="usericon" />
    <form action="">
      <label htmlFor="">FirstName:
      <input className="flex-1 p-2 rounded-1-lg bg-green-300 border-blue-500 border-4 rounded-2xl" type="text" name="fName" placeholder="please type something here"  />
      <button href='hi.com'>helllo</button>
      </label>
    </form>
    </main>
  );
}

export default App;
