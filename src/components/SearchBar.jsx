import React from 'react';
import { useState } from "react";
import { Input, Box, Button, Badge } from '@chakra-ui/react'

function SearchBar(){
    const [sentence, setSentence] = useState("");
    const [result, setResult] = useState("")
    const [badgeColor, setBadgeColor] = useState("")
    const url = 'http://127.0.0.1:5000/parse';
    const postBody = {
        sentence: sentence
    };
    const requestMetadata = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postBody)
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(url, requestMetadata)
      .then(res => res.json())
      .then(
        (result) => {
            // console.log(result)
            if (result.result) {
                // console.log(result)
                setResult("The sentence is a valid balinese sentence");
                setBadgeColor("green")
            } else {
                setResult("The sentence is not a valid balinese sentence");
                setBadgeColor("red")
            }
        },
        (error) => {
            console.log(error);
        }
      )
    }
    return (
        <Box marginTop="10">
            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="Enter your Balinese sentence"
                    type="text"
                    value={sentence}
                    onChange={(e) => setSentence(e.target.value)}
                    size='md'
                    width="30%"
                    ></Input>
                <Button type="submit" value="submit" colorScheme='teal' size='md' marginLeft="3">Validate Sentence</Button>
            </form>
            <Badge colorScheme={badgeColor} variant='solid' marginTop="10" size='xl'>{result}</Badge>
        </Box>
    );
}

export default SearchBar;