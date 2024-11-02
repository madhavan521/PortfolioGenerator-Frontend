import React, { useState, useEffect } from 'react';  
import { useNavigate, useParams } from 'react-router-dom'; 
import toast from 'react-hot-toast' 

const EditProject = () => {  
  const [projectName, setProjectName] = useState('');  
  const [projectDetail, setProjectDetail] = useState('');  
  const [projectImg, setProjectImg] = useState('');  
  const [weblink, setWeblink] = useState('');  
  const [gitlink, setGitlink] = useState('');  
  const navigate = useNavigate();  
  const { id } = useParams();  

  useEffect(() => {  
    fetch(`https://portfolio-generator-backend.onrender.com/api/user/project/${id}`, {  
      method: 'GET',  
      headers: {  
        'Content-Type': 'application/json',  
      },  
      credentials: 'include',  
    })  
    .then(res => res.json())  
    .then(data => {  
      setProjectName(data.projectName );  
      setProjectDetail(data.projectDetail);  
      setProjectImg(data.projectImg );  
      setWeblink(data.weblink );  
      setGitlink(data.gitlink);  
    })  
    .catch(err => {  
      console.error("Error fetching project data:", err);  
    });  
  }, [id]);  

  const handleProjectUpdate = () => {  
    const projectData = {  
      projectName,  
      projectDetail,  
      projectImg,  
      weblink,  
      gitlink  
    };  

    fetch(`https://portfolio-generator-backend.onrender.com/api/user/project/${id}`, {  
      method: 'PUT',  
      headers: {  
        'Content-Type': 'application/json',  
      },  
      credentials: 'include',  
      body: JSON.stringify(projectData),  
    })  
    .then(res => res.json())  
    .then(result => {  
      console.log(result);  
      toast.success("Successfully Edited")
 
    })
     setTimeout(() => {  
        navigate('/editpanel'); 
        window.location.reload()
      }, 1000);  
  };  

  return (  
    <div className="container mt-5">  
      <div className="row justify-content-center">  
        <div className="col-md-6">  
          <h2 className="text-center">Edit Project</h2>  
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
                  <button type="button" className="btn btn-info" onClick={handleProjectUpdate}>  
                    Save Project  
                  </button>  
                </div>  
              </form>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default EditProject;