import React, { useState } from 'react';  
import toast from 'react-hot-toast';  
import { useNavigate } from 'react-router-dom';  
import { BallTriangle } from 'react-loader-spinner';  

const CreateProject = () => {  
  const [projectName, setProjectName] = useState('');  
  const [projectDetail, setProjectDetail] = useState('');  
  const [projectImg, setProjectImg] = useState('');  
  const [weblink, setWeblink] = useState('');  
  const [gitlink, setGitlink] = useState('');  
  const [loading, setLoading] = useState(false);   
  
  const navigate = useNavigate();  

  const handleProjectSubmit = async () => {  
    const projectData = {  
      projectName,  
      projectDetail,  
      projectImg,  
      weblink,  
      gitlink  
    };  

    setLoading(true);   

    fetch("https://portfolio-generator-backend.onrender.com/api/user/project", {  
      method: "POST",  
      headers: {  
        "Content-Type": "application/json"  
      },  
      credentials: "include",  
      body: JSON.stringify(projectData)  
    })  
    .then(res => res.json())  
    .then(result => {  
      console.log(result);  
      toast.success("Project Created Successfully and Continue To Add More Project");  
      setLoading(false);   
    })  
;  

    setTimeout(() => {  
      setProjectName('');  
      setProjectImg('');  
      setProjectDetail('');  
      setWeblink('');  
      setGitlink('');  
    }, 1000);  
  };  

  const handleGenerate = () => {  
    setLoading(true);  
    setTimeout(() => {  
      navigate('/mainpage');  
    }, 3500);  
  }  

  return (  
    <div className="container mt-5">  
      <div className="row justify-content-center">  
        <div className="col-md-6">  
          <h2 className="text-center">Create Project</h2>  
          <div className="card">  
            <div className="card-body">  
              <form>  
                <div className="form-group">  
                  <label htmlFor="projectName">Project Name</label>  
                  <input  
                    type="text"  
                    id="projectName"  
                    className="form-control"  
                    value={projectName}  
                    onChange={(e) => setProjectName(e.target.value)}  
                    placeholder="Enter project name"  
                  />  
                </div>  
                <div className="form-group">  
                  <label htmlFor="projectDetail">Project Detail</label>  
                  <textarea  
                    id="projectDetail"  
                    className="form-control"  
                    style={{ height: "150px" }}  
                    value={projectDetail}  
                    onChange={(e) => setProjectDetail(e.target.value)}  
                    placeholder="Enter project details"  
                  />  
                </div>  
                <div className="form-group">  
                  <label htmlFor="projectImg">Project Image URL</label>  
                  <input  
                    type="text"  
                    id="projectImg"  
                    className="form-control"  
                    value={projectImg}  
                    onChange={(e) => setProjectImg(e.target.value)}  
                    placeholder="Enter project image URL"  
                  />  
                  <p>***Please Enter The Google Drive Link Of Your Skill Image*** 
                  <br /> ( Uplaod the image in google drive and paste the link here )
                  </p>
                </div>  
                <div className="form-group">  
                  <label htmlFor="weblink">Website Link</label>  
                  <input  
                    type="url"  
                    id="weblink"  
                    className="form-control"  
                    value={weblink}  
                    onChange={(e) => setWeblink(e.target.value)}  
                    placeholder="Enter project website link"  
                  />  
                                    <p>***Add Your Work Link here***</p>

                </div>  
                <div className="form-group">  
                  <label htmlFor="gitlink">GitHub Link</label>  
                  <input  
                    type="url"  
                    id="gitlink"  
                    className="form-control"  
                    value={gitlink}  
                    onChange={(e) => setGitlink(e.target.value)}  
                    placeholder="Enter GitHub link"  
                  />  
                </div>  
                <div className='d-flex justify-content-center align-item-center mt-3'>  
                  <button  
                    type="button"  
                    className="btn btn-info"  
                    onClick={handleProjectSubmit}  
                    disabled={loading}   
                  >   
                    {loading ? 'Creating...' : 'Create Project'}   
                  </button>  
                </div>  
              </form>  
            </div>  
          </div>  
        </div>  
      </div>  

      {loading && ( 
        <div className="fullscreen-loader">  
        <div className='row'> 
        <h4 className='text-danger h2'>Generating Your Portfolio <br /> Please Wait .........</h4>
        </div>
        <br />
        <div className='row'>
          <BallTriangle  
            height={100}  
            width={100}  
            radius={5}  
            className="mt-3"
            color="#4fa94d"  
            ariaLabel="ball-triangle-loading"  
            wrapperStyle={{}}  
            wrapperClass=""  
            visible={true}  
          /> </div> <br />
        </div>  
      )}  

      <div className=' mt-1 mb-4 me-2 d-flex justify-content-center align-item-center'>  
        <button className='btn btn-warning btn-lg' onClick={handleGenerate}>Generate now </button>  
      </div>  
    </div>  
  );  
};  

export default CreateProject;