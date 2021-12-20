import { useContext } from 'react';
import NavItem from '../navItem/navItem';
import { Container } from './rightNavStyles'
import { menu } from './languages';
import { LangContext } from '../../../context/langContext';

const RightNav = () => {
    const { lang } = useContext(LangContext)

    return (
        <Container>
            <NavItem to="/websites">{ lang && menu[lang].website }</NavItem>
            <NavItem to="/designs">{ lang && menu[lang].design }</NavItem>
            <NavItem to="/about">{ lang && menu[lang].about }</NavItem>
        </Container>
    );
};


export default RightNav;
