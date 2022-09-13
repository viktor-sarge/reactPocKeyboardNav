import './App.css';
import {useRef, useState} from 'react';


function App() {

  const [navbarData, setNavbarData] = useState([
    {name: "Dimma där", id:crypto.randomUUID(), ref:useRef()},
    {name: "Ånyo hinsides", id:crypto.randomUUID(), ref:useRef()},
    {name: "Alldenstund åsyn", id:crypto.randomUUID(), ref:useRef()}
  ]);

  function handleKeyPress(e) {
    console.log("This should only display when keyDown on the links"); // Bara dubbelkollar att det inte triggar oftare än det skall  
    const activeNodeTest = (element) => element.id == e.target.id;  // Hittar den nod vars id matchar id på den nod som triggad eventet
    const activeNodeIndex = navbarData.findIndex(activeNodeTest);  // Ger index för den nod som hittades ovan
    const nodeToFocus = activeNodeIndex + 1 >= navbarData.length ? 0 : activeNodeIndex + 1; // Säkrar att vi börjar om från första noden
    navbarData[nodeToFocus].ref.current.focus();  // Sätter fokus på nästa nod
  }

  return (
    <div>
      <ul> 
        {navbarData.map(node=>
          <li key={node.id}>
            <a ref={node.ref} id={node.id} onKeyDown={handleKeyPress} href="regionhalland.se">{node.name}</a>
          </li>)
        }
      </ul>
    </div>
  );
}

export default App;
