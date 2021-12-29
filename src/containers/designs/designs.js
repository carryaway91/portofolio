import { useState, useContext, useEffect } from 'react'
import { PhotoContext } from '../../context/photoContext'
import Pokemon from '../../desingImgs/pokemon.png'
import Shelter from '../../desingImgs/shelter.jpg'
import Plants from '../../desingImgs/Plants.jpg'
import Antique from '../../desingImgs/Antique.png'
import Bookstore from '../../desingImgs/Bookstore.png'
import { Img, Container, SelectedWrap, Selected, Close, Next, Prev } from './desingsStyles'

const Designs = () => {
    const [photos, setPhotos] = useState([Bookstore, Antique, Plants, Pokemon, Shelter])
    const [selectedPhoto, setSelectedPhoto] = useState()
    const [showImage, setShowImage] = useState(false)
    const [showNextAndPrev, setShowNextAndPrev] = useState(false)

    const { activatePhoto, deactivatePhoto, active } = useContext(PhotoContext)

    useEffect(() => {
        if(active) {
            setTimeout(() => {
                setShowImage(true)
            }, .1)
        }else {
            setShowImage(false)
        }
    }, [active])


    const handleSelectPhoto = photo => {
        activatePhoto()
        setSelectedPhoto(photo)
    }


    const handleNextPhoto = () => {
        const selectedPhotoIndex = photos.indexOf(selectedPhoto) 
        if(selectedPhotoIndex < photos.length - 1) {
            setSelectedPhoto(photos[selectedPhotoIndex + 1])
        } else {
            setSelectedPhoto(photos[0])
        }
    }

    const handlePrevPhoto = () => {
        const selectedPhotoIndex = photos.indexOf(selectedPhoto)
        if(selectedPhotoIndex != 0) {
            setSelectedPhoto(photos[selectedPhotoIndex - 1])
        } else {
            setSelectedPhoto(photos[photos.length - 1])
        }
    }

    return (
        <Container>
            {
                photos && photos.map(p => (
                    <Img src={p} onClick={() => handleSelectPhoto(p)} />
                ))
            }

            {
                selectedPhoto && active && (
                    <SelectedWrap show={showImage} onMouseOver={() => setShowNextAndPrev(true)} onMouseLeave={() => setShowNextAndPrev(false)}>
                        <Selected src={selectedPhoto} />
                        {
                            showNextAndPrev && <Next onClick={handleNextPhoto}><p>&gt;</p></Next>
                        }
                        {
                            showNextAndPrev && <Prev onClick={handlePrevPhoto}><p>&lt;</p></Prev>  
                        }
                        <Close onClick={deactivatePhoto}>+</Close>
                    </SelectedWrap>
                )
                    
            }
        </Container>
    )
}

export default Designs