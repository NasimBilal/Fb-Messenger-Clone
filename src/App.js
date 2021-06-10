import './App.css';
import React, {useState, useEffect} from 'react';
import {FormControl, InputLabel, Input} from '@material-ui/core';
import Message from './message'
import {db} from './firebase'
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  useEffect(() => {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot( snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id:doc.id , message:doc.data()}) ))
    })
  }, [])
  useEffect(() => {
    setUsername(prompt('Enter your username'))
  }, [])

  const send_message = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })  
    setInput('');
  }
  return (
    <div className="app">
      <img src="https://www.techoffside.com/wp-content/uploads/2018/10/Messenger4_006.jpg" alt="" className="logo" />
      <h2>Facebook Messenger</h2>
      <h2>Welcome {username}</h2>
      <form className="app-form">
        <FormControl className="app-form-control">
          <InputLabel>Enter a message...</InputLabel>
          <Input className="app-input" value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app-button" disabled={!input} type="submit" variant="contained" color="primary" onClick={send_message}>
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message} />
        ))
      }
      </FlipMove>

    </div>
  );
}

export default App;
