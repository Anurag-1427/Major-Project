import { Accordion, Button, Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      //   dispatch(deleteNoteAction(id));
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    // console.log(data);
    setNotes(data);
    console.log(notes);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome Back Anurag Sharma...">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                  {/* title */}
                  {note.title}
                </Accordion.Toggle>
              </span>
              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant="success">Category - {note.category}</Badge>
                </h4>

                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created On - date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}

      {/* <Card style={{ margin: 10 }}>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18,
              }}
            >
              title
            </span>
            <div>
              <Button>Edit</Button>
              <Button variant="danger" className="mx-2">
                Delete
              </Button>
            </div>
          </Card.Header>
        </Card> */}
    </MainScreen>
  );
};

export default MyNotes;
