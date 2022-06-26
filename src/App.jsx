import './App.css'
import { resume } from "./content.js";
import Resume from './Resume';
import { SettingsProvider } from './SettingsContext';
import SettingsPanel from './SettingsPanel';
import ThemeContainer from './ThemeContainer';

function App() {
  return (
    <div className="App">
      <SettingsProvider>
        <ThemeContainer>
          <SettingsPanel email={resume.contact.email} links={resume.contact.sites} />
          <Resume resume={resume} />
        </ThemeContainer>
      </SettingsProvider>
    </div>
  )
}

export default App
