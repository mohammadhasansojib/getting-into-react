import { useReducer } from "react";

let bookList = [
    {name: "abc", id: 1},
    {name: "efg", id: 2},
    {name: "xyz", id: 3},
];

let nextId = bookList.length;

const myReducer = (books, action) => {
    switch(action.type){
        case 'add': {
            const {type, id, text} = action;
            return [...books, {id: id, name: text}];
        }
        case 'delete': {
            return books.filter((book) => book.id != action.id);
        }
    }
}

const UseReducer = () => {
    const [books, dispatch] = useReducer(myReducer, bookList);

    const handleDelete = (id) => {
        dispatch({id: id, type: "delete"});
    }

    const handleAdd = (id, text) => {
        dispatch({type: 'add', id: id, text: text});
    }

    return (
        <div style={{
            borderTop: "2px solid gray",
            marginTop: "1rem"
        }}>
            <button onClick={() => handleAdd(nextId++,"good")}>Add</button>
            <ul>
                {books.map((book) => {
                    const {id, name} = book;
                    return <li style={{margin: ".5rem 0"}} key={id}>
                        {name}
                        <button style={{marginLeft: ".5rem"}} onClick={() => handleDelete(id)}>Delete</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default UseReducer;