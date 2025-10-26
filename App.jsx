import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

const App = () => {
  let [user, setuser] = useState([
    { id: 1, label: "Html", checked: false },
    { id: 2, label: "React", checked: false },
  ]);

  let [input, setinput] = useState("");
  let [edit, setedit] = useState(false);
  let [currentid, setcurrentid] = useState(null);
  function handleinput(e) {
    console.log(e.target.value);
    setinput(e.target.value);
  }

  function handleCheckbox(id) {
    let itemcheck = user.map((user) => {
      return user.id == id ? { ...user, checked: !user.checked } : user;
    });
    setuser(itemcheck);
  }

  function handleaddandsave() {
    if (edit) {
      let newedit = user.map((user) => {
        return user.id == currentid ? { ...user, label: input } : user;
      });
      setuser(newedit);
      setid(null);
      setedit(false);
      setinput(" ");
    } else {
      setuser([...user, { id: length, label: input, checked: false }]);
      setinput(" ");
    }
  }

  function handledelete(id) {
    let itemdelete = user
      .filter((user) => {
        return user.id !== id;
      })
      .map((user, i) => {
        return { ...user, id: i + 1 };
      });
    setuser(itemdelete);
  }

  function handleedit(id) {
    let itemedit = user.find((user) => {
      return user.id == id;
    });
    setinput(itemedit.label);
    setedit(true);
    setcurrentid(id);
  }
  return (
    <div>
      <main>
        <input
          type="text"
          name="input"
          placeholder="Enter the items"
          value={input}
          onChange={handleinput}
        />
        <button onClick={handleaddandsave}>{edit ? "Save" : "Add"}</button>
      </main>
      <ul>
        {user.map((e, i) => {
          return (
            <div key={i}>
              <input
                type="Checkbox"
                onClick={() => {
                  handleCheckbox(e.id);
                }}
              />
              <label> {e.label}</label>
              <FaEdit
                role="button"
                tabIndex={0}
                onClick={() => {
                  handleedit(e.id);
                }}
              />
              <MdOutlineDelete
                role="button"
                tabIndex={0}
                onClick={() => {
                  handledelete(e.id);
                }}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
