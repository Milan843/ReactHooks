import React, { useState, useEffect, useRef } from 'react'
import { Button } from "@material-ui/core";

export default function Form(props) {
    const [name, setName] = useState("")
    const [qty, setQty] = useState()
    const { addItem } = props
    const inputRef = useRef();
    const qtyRef = useRef();
    console.log("form");

    useEffect(() => {
        inputRef.current.focus();
    }, []);


    // const keyPressed = (event) => {
    //     if (event.key === "Enter") {
    //         qtyRef.current.focus();
    //     }
    // }
    const onSubmitHandle = (e, name, qty) => {
        addItem(e, name, qty)
        setName("")
        setQty("")
        inputRef.current.focus();
    }
    return (
        <div>
            <h1>
                Ingredients Project
            </h1>
            <form onSubmit={e => onSubmitHandle(e, name, qty)}>
                <h3>
                    Add Name
                </h3>
                <input
                    type="text"
                    ref={inputRef}
                    className="input"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    // onKeyPress={keyPressed}
                />
                <h3>
                    Add quantity
                </h3>
                <input
                    type="number"
                    ref={qtyRef}
                    className="input"
                    value={qty}
                    min={0}
                    onChange={e => setQty(e.target.value)}
                />
                <br />
                <Button type="submit" variant="contained" color="primary">
                    Add
                </Button>
            </form>
        </div>
    )
}
