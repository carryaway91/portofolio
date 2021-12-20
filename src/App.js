import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import home from './containers/home/home';
import Websites from './containers/websites/websites';
import MainNav from './components/mainNav/mainNav'
import { GlobalStyle, UnderNav, Container, Main, Overlay } from './appStyles'
import { LangContext } from './context/langContext'
import { PhotoContext } from './context/photoContext'
import About from './containers/about/about';
import Designs from './containers/designs/designs'


function App() {
  const [lang, setLang] = useState('en')
  const [photoActive, setPhotoActive] = useState(false)

  useEffect(() => {
    let language = JSON.parse(localStorage.getItem('lang'))
    
    if(!language) {
      localStorage.setItem('lang', JSON.stringify('en'))
      setLang('en')
    }

    setLang(language)
  }, [])



  const handleLanguage = lang => {
    setLang(lang)
    localStorage.setItem('lang', JSON.stringify(lang))
  }
  
  return (
    <Container>
      <GlobalStyle />
      <LangContext.Provider value={{ 
        lang: lang,
        changeLang: handleLanguage
        }}>
        <MainNav />
        <UnderNav />
         <Main>
          <PhotoContext.Provider value={{
            activatePhoto: () => setPhotoActive(true),
            deactivatePhoto: () => setPhotoActive(false),
            active: photoActive
          }}>
            <Switch>
              <Route path='/websites' component={Websites} />
              <Route path='/designs' component={Designs} />
              <Route path='/about' component={About} />
              <Route path='/' exact component={home} />
            </Switch>
          </PhotoContext.Provider>
        </Main>
      </LangContext.Provider>
      {
        photoActive && <Overlay onClick={() => setPhotoActive(false)} />
      }
    </Container>
  );
}

export default App;
