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