import React, { useState } from "react";
import { addlists, deletes } from "../countSlice";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { randomId } from "@mieuteacher/meomeojs";

export default function List() {
    const list = useSelector((state) => state.list);
    console.log(list);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        dispatch(addlists({ name: inputValue, id:randomId()}));
        setInputValue("");
    };

    return (
        <div className="container">
            <h1>List</h1>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={inputValue}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button className="but" variant="outline-warning" onClick={handleSubmit}>
                Add
            </Button>
            <div className="render">
                {list.map((item) => (
                    <div className="hien" key={randomId()}>
                        <span>
                            {item.name} <br />{" "}
                        </span>
                        <button onClick={() => dispatch(deletes(item.id))}>
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
