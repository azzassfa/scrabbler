import logo from './logo.svg';
import './App.css';
import './css/scrabble.css';
import { useState } from 'react';

function App() {

  const [result, setResult] = useState("");
  const [textLength, setTextLength] = useState("");
  const [uniqueLetters, setUniqueLetters] = useState("");

  const scrabble = {a:1,b:3,c:3,d:2,e:1,f:4,g:2,h:4,i:1,j:8,k:5,l:1,m:3,n:1,o:1,p:3,q:10,r:1,s:1,t:1,u:1,v:4,w:4,x:8,y:4,z:10};
//  const scrabble = [1,2,3,4,5];
  
  function handleclick(event) {
    let total = [];
    var word2 = event.target.value.replaceAll(" ", "").toLowerCase().split("");
    var textLength = event.target.value.length;

    total = total + word2.map((sum, t) => {
      console.log(scrabble[sum]);
      return(scrabble[sum]);
    });

    total=total.split(",");
    console.log(total);
    var sum = total.reduce(function(pv, cv) { return parseInt(parseInt(pv) + parseInt(cv)); });

    setResult(sum);
    setTextLength(textLength);

    const unique = xs => [...new Set(xs)].sort();
    var letters =  unique(word2).join('');
    setUniqueLetters(letters + " (" + letters.length + ")");

  event.preventDefault();
 
  };

  return (
    <div className="App">
      <div style={{display:"inline-flex"}}>
      <div className="scrabble-container"><span className="scrabble-tile__letter">S<span className="scrabble-tile__number">1</span></span></div>      
      <div className="scrabble-container"><span className="scrabble-tile__letter">C<span className="scrabble-tile__number">3</span></span></div>      
      <div className="scrabble-container"><span className="scrabble-tile__letter">R<span className="scrabble-tile__number">1</span></span></div>      
      <div className="scrabble-container"><span className="scrabble-tile__letter">A<span className="scrabble-tile__number">1</span></span></div>      
      <div className="scrabble-container"><span className="scrabble-tile__letter">B<span className="scrabble-tile__number">3</span></span></div>      
      <div className="scrabble-container"><span className="scrabble-tile__letter">B<span className="scrabble-tile__number">3</span></span></div>      
      <div className="scrabble-container"><span className="scrabble-tile__letter">L<span className="scrabble-tile__number">1</span></span></div>      
      <div className="scrabble-container"><span className="scrabble-tile__letter">E<span className="scrabble-tile__number">1</span></span></div>      
      <div className="scrabble-container"><span className="scrabble-tile__letter">R<span className="scrabble-tile__number">1</span></span></div>      
      </div>
      <form>
        <input style={{margin: "25px", fontSize: "2rem", width: "80%"}} type="text" name="word" onChange={handleclick} placeholder="Enter word to analyse" />
        <div style={{margin: "25px", fontSize: "2rem"}}>Scrabble Score: {result}</div>        
        <div style={{margin: "25px", fontSize: "2rem"}}>Length: {textLength}</div>        
        <div style={{margin: "25px", fontSize: "2rem"}}>Unique Letters: {uniqueLetters}</div>        
      </form>
    </div>
  );
}

export default App;
 