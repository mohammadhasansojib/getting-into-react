# Getting into React

## Managing state
### Reacting to input with state
- Manage1.jsx
- Form.jsx

**Date:** `16/7/25`


## useEffect
**Date:** `21/7/25`

* Run in every render if no dependecy array passed.
    ```js
    useEffect(() => {
        //run in every render due to the absent of dependency array
    })
    ```

* Run only in first render/mount if passed an empty dependency array
    ```js
    useEffect(() => {
        //run only on mount time
    }, [])
    ```

* If there is any dependency in the dependency array then is Runs on mount time & the dependency time(when got change). one or multiple dependency can be passed in dependency array.
    ```js
    const [count, setCount] = useState(0);
    useEffect(() => {
        //run on mount & depending on depencies
    }, [count])
    ```

## useReducer
**Date:** `23/7/25`

- For handling simple state logic `useState` is better than `useReducer`, but is the state logic is complex and want to separate the state logic from the component or even from the file to reduce the code and increase the readibility then `useReducer` is better option.

- There are three main things in `useReducer`
    - `reducer funtion` (which handle the state logic)
        ```js
        const reducer = (state, action) => {
            // State logic handled from here
        }
        ```
    - `dispatcher` (which dispatch an object to the reducer function from the component)
        ```js
        const handleEvent = ({info}) => {
            dispatch({type: 'myType', info: info})
        }
        ```
    - `useReducer` initialization (which takes the reducer function and initial state value)
        ```js
        const MyComp = () => {
            const [tasks, dispatch] = useReducer(reducer, initialValue);
        }
        ```