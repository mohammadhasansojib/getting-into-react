import { useState } from "react";



const submitForm = (answer) => {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        if(answer.toLowerCase() == 'lima'){
            resolve();
        }else{
            reject("Good geuss. but not the correct one.");
        }
       }, 1500); 
    });
}




const Form = () => {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('empty');

    if(status == 'success'){
        return <h1>That, correct.</h1>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try{
            await submitForm(answer);
            setStatus('success');
        }catch(err){
            setStatus('typing');
            setError(err)
        }
    }

    const handleTextChange = (e) => {
        setAnswer(e.target.value);
    }


    return (
        <form action="" onSubmit={handleSubmit}>
            <textarea 
            disabled={status == `submitting`}
            onChange={handleTextChange}
            value={answer}/>

            <br />

            <button
            disabled={
                answer.length == 0
                || status == 'submitting'
            }
            >Submit</button>

            {
                error !== null &&
                <p>Good geuss but wrong answer.</p>
            }
        </form>
    )
}

export default Form;