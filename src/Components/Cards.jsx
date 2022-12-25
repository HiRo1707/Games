import './CardStyle.css'
import Card from './Card'
import images from './images'
import {shuffleArray} from '../untils'
import {Container,Row,Col} from 'react-bootstrap'
import { useEffect, useState } from 'react'

//Renders all cards
const Cards = (props) => {
    
    let imageNames = [...images.names, ...images.names];
    shuffleArray(imageNames);
    const nColumns = 5;
    let imageNames2DTemp = [];
    while(imageNames.length){ 
        imageNames2DTemp.push(imageNames.splice(0,nColumns));
    }
    const [imageNames2D, setImageNames2D] = useState(imageNames2DTemp);
    const [turnedCards, setTurnedCards] = useState([0,0]);

    const [openedImages, setOpenedImages] = useState([]);

    useEffect(
         () => {
            async function resetCards() { 
                if(turnedCards[0] !== 0 && turnedCards[1] !== 0){
                    const sleep = ms => new Promise(r => setTimeout(r, ms));
                    await sleep(1000);
                    const image1Name = imageNames2D[Math.floor((turnedCards[0]-1)/nColumns)][(turnedCards[0]-1) % nColumns];
                    const image2Name = imageNames2D[Math.floor((turnedCards[1]-1)/nColumns)][(turnedCards[1]-1) % nColumns];
                    if(image1Name === image2Name){
                        props.setCount(props.count + 1);
                        setOpenedImages([...openedImages, image1Name]);
                    }
                    props.setNMoves(props.nMoves + 1);
                    setTurnedCards([0, 0]); 
                }
            }

            resetCards();
        }, [turnedCards]
    )

    return(
        <>
        <Container>
            <Row>
                {
                    imageNames2D.map((imageNames1D, Row) =>
                        <Col>
                        {imageNames1D.map(
                            (imageName, Col) => {
                                let hideImage = openedImages.includes(imageName);
                                return(    
                                    <Card imageName = {imageName} cardNumber = {Row*nColumns+Col+1} turnedCards = {turnedCards} setTurnedCards={setTurnedCards} key = {Row*nColumns+Col+1} hideImage={hideImage}></Card>
                                )
                            }
                        )
                        } 
                        </Col>
                    )
                }
            </Row>
        </Container>
        </>
    )
}

export default Cards