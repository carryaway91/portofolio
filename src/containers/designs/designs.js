import { useState, useContext, useEffect } from 'react'
import { PhotoContext } from '../../context/photoContext'
import Pokemon from '../../desingImgs/pokemon.png'
import Shelter from '../../desingImgs/shelter.jpg'
import Plants from '../../desingImgs/Plants.jpg'
import Antique from '../../desingImgs/Antique.png'
import { Img, Container, SelectedWrap, Selected, Close } from './desingsStyles'

const Designs = () => {
    const [photos, setPhotos] = useState([Antique, Plants, Pokemon, Shelter])
    const [selectedPhoto, setSelectedPhoto] = useState()
    const [showImage, setShowImage] = useState(false)

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
    return (
        <Container>
            {
                photos && photos.map(p => (
                    <Img src={p} onClick={() => handleSelectPhoto(p)} />
                ))
            }

            {
                selectedPhoto && active && (
                    <SelectedWrap show={showImage}>
                        <Selected src={selectedPhoto} />
                        <Close onClick={deactivatePhoto}>+</Close>
                    </SelectedWrap>
                )
                    
            }
        </Container>
    )
}

export default Designs