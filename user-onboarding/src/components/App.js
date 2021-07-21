import axios from 'axios'
import { useState } from 'react'
import Form from './Form.js'
import schema from '../validation/formSchema.js'
import * as yup from 'yup'
import '../index.css';

// Initial States
// - [ ] Name
// - [ ] Email
// - [ ] Password
// - [ ] Terms of Service (checkbox)
// - [ ] A Submit button to send our form data to the server.
const initialFormValues = {

}

function App() {
  // State Declarations
  const [users, setUsers] = useState([])

  // Helper Functions
// - [ ] Craft a `POST` request using `axios` that sends your form data to the following endpoint: _`https://reqres.in/api/users`_
// - [ ] Verify using a `console.log()` that you are receiving a successful response back
  // Event Handlers

  // Side Effects



  return (
    <div className="App">
      <header><h1>User-Onboarding Form</h1></header>
      <Form 
        values={''}
        change={''}
        submit={''}
        disabled={''}
        errors={''}

      />
      <pre>
        {JSON.stringify(users)}
      </pre>
    </div>
  );
}

export default App;
