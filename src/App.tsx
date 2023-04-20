import {
  Navbar,
  CommerceExperienceSection,
  Companies,
  ToolsSection,
  DeveloperExperience,
  Flexibility,
  GlobalAudience,
  Footer,
  HamburgerFullscreen,
} from './components';

function App() {
  return (
    <>
      <HamburgerFullscreen />
      <Navbar />
      <div className='flex flex-col items-center overflow-x-hidden'>
        <CommerceExperienceSection />
        <Companies />
        <ToolsSection />
        <DeveloperExperience />
        <Flexibility />
        <GlobalAudience />
      </div>

      <Footer />
    </>
  );
}

export default App;
