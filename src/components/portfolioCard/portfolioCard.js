import { useContext } from 'react'
import { LangContext } from '../../context/langContext';
import { desc } from './languages';
import { Container, Description, ImgHolder, Img, BtnHolder, Button } from "./portfolioCardStyles";


const PortfolioCard = props => {
    const { lang } = useContext(LangContext)

    return (

        <Container right={props.right}>
            <div>

            <ImgHolder>
                <Img src={props.img} />
            </ImgHolder>
            <Description margin={props.right}>
                <h1 >{ props.title }</h1>
                <div className="inner">
                    <div>
                        { props.children }
                    </div>
                </div>
            </Description>
        
            </div>
            <div style={{padding: '1rem'}}>

                <strong style={{ color: 'gray'}}>{ lang && desc[lang].tech}{ props.tech }</strong>
                <ul style={{ verticalAlign: 'bottom'}}>
                    {
                        !props.absent &&
                        <BtnHolder style={{ marginRight: '2rem'}}>
                            <Button href={props.link}>{ lang && desc[lang].btn1 }</Button>
                        </BtnHolder>
                    }
                    <BtnHolder>
                        <Button href={props.git}>{ lang && desc[lang].btn2 }</Button>
                    </BtnHolder>
                </ul>
            </div>
        </Container>
    );
};


export default PortfolioCard;
