import { InputGroup, Stack, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default function Dictionary() {

    const [word, setWord] = useState("");
    const [results, setResults] = useState([]);
    const [visible, setVisible] = useState(false);

    const [favorite, setFavorite] = useState([]);

    const searching = (e) => {
        setWord(e);
        setVisible(false);
    }

    const getData = async (e) => {
        if(e.key === 'Enter') {
            // console.log(word);

            const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
            
            if(response.ok) {
                const result = await response.json();
                // console.log(result);
                setVisible(true);
                setResults(result);
            } else {
                console.log(response.status);
                setVisible(false);
            }
        }
    }

    // useEffect(() => {
    //     for(let i = 0; i < results.length; i++) {
    //         console.log(results[i]);
    //     }
    // }, [results])

    const addFavorite = () => {
        setFavorite(oldArray => [...oldArray, word])
        console.log(favorite);
    }

    return (
        <div className='d-flex flex-direciton-row mt-5'>
            <Stack gap={3} className='d-flex w-50'>
                {/* <div className="p-2">
                    <h1 className='text-center m-auto w-50'>QUICK DICTIONARY</h1>
                </div> */}
                <div className="p-2 w-75 m-auto">
                    <InputGroup size="lg">
                        <Form.Control
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder="Search Words..."
                            onChange={e => searching(e.target.value)}
                            onKeyDown={e => getData(e)}
                        />
                    </InputGroup>
                </div>
                <div className='p-2 mt-3'>
                    {/* <h2 className='text-center'>{word}</h2> */}
                    {
                        visible &&
                        results.map((value, index) => (
                            <div className='w-75 m-auto' id={index}>
                                <div className='d-flex flex-direction-row justify-content-between'>
                                    <a href={value.sourceUrls[0]}><h3>{value.word}</h3></a>
                                    <button type='button' className='btn btn-dark' onClick={addFavorite}>Favorite</button>
                                </div>
                                <h6>{value.phonetic}</h6>
                                <div>
                                    {value.meanings.map((value2) => (
                                        <div>
                                            <h5>{value2.partOfSpeech}</h5>
                                            <div className='d-flex flex-direction-row justify-content-space-around'>
                                                <div className='w-75 p-4'>
                                                    <h6><strong>Definitions</strong></h6>
                                                    {
                                                        value2.definitions.map((def) => (
                                                            <ul className='text-justified'>
                                                                <li><em>{def.definition}</em></li>
                                                            </ul>
                                                        ))
                                                    }
                                                </div>
                                                <div className='w-25 p-4'>
                                                    <h6><strong>Synonyms</strong></h6>
                                                    {
                                                        value2.synonyms.map((syn) => (
                                                            <ul>
                                                                <li><em>{syn}</em></li>
                                                            </ul>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Stack>
        </div>
        
    )

}


