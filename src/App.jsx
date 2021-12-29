import React from 'react';

import SearchBar from './components/SearchBar';
import Title from './components/Title';
import { Box } from "@chakra-ui/react"

function App() {
    return (
        <Box marginTop="20">
            <Title />
            <SearchBar />
        </Box>
    );
}

export default App;