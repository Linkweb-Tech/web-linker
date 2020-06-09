const { Component, render, useState } = wp.element;
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Form = ({setInfoVisio}) => {
    const [channel, setChannel] = useState("");    
    const [name, setName] = useState('');

    return(
        <form              
        onSubmit={(e) => {
            e.preventDefault(); 
            setInfoVisio(name, channel);
        }}>
                <TextField id="outlined-basic" label="Nom" variant="outlined" onChange={e => setName(e.target.value)} value={name} />
                <TextField id="outlined-basic" label="Canal" variant="outlined" onChange={ev => setChannel(ev.target.value)} value={channel} />
            <Button variant="outlined" size="large" color="primary" type="submit" >
                Envoyer
            </Button>
        </form>
    )
    
}


export default Form;