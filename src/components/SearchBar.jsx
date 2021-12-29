import React from 'react';
import { useState } from "react";
import { Input, Box, Button, Badge, Text } from '@chakra-ui/react'
import JSONPretty from 'react-json-pretty';

function SearchBar(){
    const [sentence, setSentence] = useState("");
    const [result, setResult] = useState("")
    const [badgeColor, setBadgeColor] = useState("")
    const [tree, setTree] = useState("")
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
                setResult("The sentence is a valid balinese sentence");
                setBadgeColor("green")
                setTree(result.tree)
            } else {
                setResult("The sentence is not a valid balinese sentence");
                setBadgeColor("red")
                setTree("")
            }
        },
        (error) => {
            console.log(error);
        }
      )
    }
    return (
        <Box marginTop="10">
            <Box align="center" justify="center">
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
                <Badge colorScheme={badgeColor} variant='solid' marginTop="10" fontSize="lg">{result}</Badge>
            </Box>
            <Box className='box-result' marginTop='5'>
                <Box align="center" justify="center">
                    {tree !== "" && 
                        <Badge>Parsing Tree Result:</Badge>
                    }
                </Box>
                <JSONPretty data={tree} className='json'></JSONPretty>
            </Box>
        </Box>
    );
}

export default SearchBar;