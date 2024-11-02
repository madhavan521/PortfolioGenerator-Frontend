import React from 'react';
import Signup from './Authentication/Signup';
import {BrowserRouter ,Route ,Router,Routes} from 'react-router-dom'
import Login from './Authentication/Login';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from './Context/UserContext';
import { IntroductionContextProvider } from './Context/IntroductionContext';
import {AboutContextProvider} from './Context/AboutContext';
import { ProjectContextProvider } from './Context/ProjectContext';
import { SkillContextProvider } from './Context/SkillContext';
import { EducationContextProvider } from './Context/EducationContext';
import CreateIntroduction from './CreateData/CreateIntroduction';
import CreateAbout from './CreateData/CreateAbout';
import CreateEducation from './CreateData/CreateEducation';
import EditIntroduction from './EditData/EditIntroduction';
import CreateSkill from './CreateData/CreateSkill';
import EditAbout from './EditData/EditAbout';
import EditSkill from './EditData/EditSkill';
import CreateProject from './CreateData/CreateProject';
import EditProject from './EditData/EditProject';
import Home from './Components/Homepage/Home';
import Navbar from './Components/Navbar';
import EditDesignPage from './EditDesign/EditDesignPage'
import MainPage from './Components/MainPage/MainPage';
import Design1Page from './Design/Design1/Design1Page'
import DemoDesign1 from './DemoDesign/DemoDesign1/DemoDesign1Page'
import EditEducation from './EditData/EditEducation';
import DemoDesign2Page from './DemoDesign/DemoDesign2/DemoDesign2Page';
import DemoDesign3Page from './DemoDesign/DemoDesign3/DemoDesign3page'
import Design2Page from './Design/Design2/Design2Page';
import Design3page from './Design/Design3/Design3Page';
import AddProject from './EditData/AddProject';
import AddSkill from './EditData/AddSkill';
import DemoDesign4page from './DemoDesign/DemoDesign4/DemoDesign4page';
import Design4Page from './Design/Design4/Design4Page';
import TermsAndConditions from './Components/Homepage/Terms';
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <UserContextProvider>
    <IntroductionContextProvider>
    <AboutContextProvider>
    <ProjectContextProvider> 
    <SkillContextProvider>
    <EducationContextProvider>
          <Navbar />
          <Toaster position="top-center" reverseOrder={false} />  
          <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />} />
        {/* Creating Protfoilo data */}
        <Route path="/introduction" element={<CreateIntroduction /> }  />
        <Route path='/about' element={<CreateAbout />}/>
        <Route path='/education' element={<CreateEducation />}/>
        <Route path ='/skill' element={<CreateSkill />}/>
        <Route path='/project' element={<CreateProject />}/>
        {/* Edit Portfolio data */}
        <Route path='/editintroduction/:id' element={<EditIntroduction />}/>
        <Route path='/editabout/:id' element={<EditAbout />}/>
        <Route path='/editskill/:id' element={<EditSkill />}/>
        <Route path='/editproject/:id' element={<EditProject />}/>
        <Route path='/editeducation/:id' element={<EditEducation />}/>
        <Route path='/addproject' element={<AddProject />}/>
        <Route path='/addskill' element={<AddSkill />}/>
        {/* Pages */}
        <Route path='/mainpage' element={<MainPage />}/>
        <Route path='/terms' element={<TermsAndConditions />}/>
        {/* EditPanal */}
          <Route path='/editpanel' element={<EditDesignPage />}/>
        {/* DemoDesigns */}
        <Route path='/demodesign1' element={<DemoDesign1 />}/>
         <Route path='/demodesign2' element={<DemoDesign2Page/>}/>
         <Route path='/demodesign3' element={<DemoDesign3Page />}/>
         <Route path='/demodesign4' element={<DemoDesign4page />}/>
         {/* Designs */}
         <Route path='/design1'   element={<Design1Page/>}/>
         <Route path='/design2' element={<Design2Page />}/>
         <Route path='/design3' element={<Design3page />} />
         <Route path='/design4' element={<Design4Page />}/>

      </Routes>
      </EducationContextProvider>
      </SkillContextProvider>
      </ProjectContextProvider>
      </AboutContextProvider>
      </IntroductionContextProvider>
      </UserContextProvider>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
