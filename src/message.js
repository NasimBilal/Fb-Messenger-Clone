import React, {forwardRef} from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import './message.css';


const Message = forwardRef(({message, username}, ref) => {
    const isUser = username === message.username;

    return (
        <div ref={ref} className={`message ${isUser && 'message--user'}`}>
            <Card className={isUser ? 'message--user':'message--guest'}>
                <CardContent className={isUser ? 'messagecard--user':'messagecard--guest'}>
                    <Typography color="white" component="h2" variant="h5">
                        {!isUser && `${message.username  || 'Unknown User '}: `} {message.message} 
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
