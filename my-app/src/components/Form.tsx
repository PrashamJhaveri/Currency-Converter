import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';



const Form = (props: any) => (
    <div style={{textAlign: 'center'}}>
        <form onSubmit={props.getRate}>
            <TextField style={{margin: '20% 10px'}} type="text" name = "base" placeholder="Currency Code"/>
            <TextField  style={{margin: '20% 10px'}} type="text" name = "newBase" placeholder="Converting Code"/>
            <TextField  style={{margin: '20% 10px'}} type="text" name = "amount" placeholder="Amount"/>
            <Button type="submit" variant="contained">Convert</Button>
        </form>
    </div>


);
export default Form;