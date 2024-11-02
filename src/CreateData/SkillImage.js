import React from 'react';

const SkillImage = () => {
  const skill=[
    {
      id:"1",
      logo:"https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png",
      name:"HTML"
    },
    {
      id:"2",
      logo:"https://cdn.iconscout.com/icon/free/png-256/free-css-131-722685.png",
      name:"CSS"
    },
    {
      id:"3",
      logo:"https://www.freepnglogos.com/uploads/javascript/javascript-online-logo-for-website-0.png",
      name:"Java Script"

    },
    {
      id:"4",
      logo:"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png",
      name:"Bootstrap"
    },
    {
      id:"5",
      logo:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      name:"React js"
    },
    {
      id:"6",
      logo:"https://miro.medium.com/v2/resize:fit:374/1*Yhe1R94CIotr2se7Wf6TQQ.png",
      name:"Node js"
    },
    {
      id:"7",
      logo:"https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
      name:"mongobd"
    },  
    {
      id:"8",
      logo:"https://cdn.shopaccino.com/igmguru/articles/React-Native-Developer-1-900x555.png",
      name:"React Native"
    },{
      id:"9",
      logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUcQofbdW28AoTCjLFzojT7sSZQVsEurWQA&s",
      name:"Angular js"
    },{
      id:"10",
      logo:"https://static.vecteezy.com/system/resources/previews/048/332/144/non_2x/python-icon-transparent-background-free-png.png",
      name:"python"
    },{
      id:"11",
      logo:"https://static-00.iconduck.com/assets.00/django-original-icon-2048x874-iws4p6y8.png",
      name:"Django"
    },{
      id:"12",
      logo:"https://static.vecteezy.com/system/resources/thumbnails/048/332/147/small/c-programming-icon-free-png.png",
      name:"C"
    },{
      id:"13",
      logo:"https://static.vecteezy.com/system/resources/previews/048/332/166/non_2x/php-programming-icon-free-png.png",
      name:"Php"
    },{
      id:"14",
      logo:"https://static.vecteezy.com/system/resources/previews/012/697/300/non_2x/3d-c-programming-language-logo-free-png.png",
      name:"C++"
    },{
      id:"15",
      logo:"https://static.vecteezy.com/system/resources/previews/048/332/165/non_2x/c-sharp-programming-icon-free-png.png",
      name:"C#"
    },{
      id:"16",
      logo:"https://static.vecteezy.com/system/resources/previews/048/332/150/non_2x/java-programming-language-java-logo-free-png.png",
      name:"java"
    },  
    ,{
      id:"17",
      logo:"https://alex-bezverkhniy.github.io/images/spring-boot/spring-boot-logo.png",
      name:"Springboot"
    },{
      id:"18",
      logo:"https://static.vecteezy.com/system/resources/thumbnails/012/697/296/small_2x/3d-golang-programming-language-logo-free-png.png",
      name:"Go"
    },{
      id:"19",
      logo:"https://static.vecteezy.com/system/resources/previews/042/165/847/non_2x/figma-3d-logo-black-background-free-png.png",
      name:"Figma"
    },{
      id:"20",
      logo:"https://i.pinimg.com/originals/56/0c/43/560c4353b21b4948e5f0e9508ea07597.png",
      name:"Flutter"
    },{
      id:"21",
      logo:"https://static.vecteezy.com/system/resources/previews/043/987/991/non_2x/sql-3d-icon-png.png",
      name:"SQL"
    },{
      id:"22",
      logo:"https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png",
      name:"MySQL"
    },{
      id:"23",
      logo:"https://static.vecteezy.com/system/resources/previews/017/396/802/non_2x/microsoft-word-mobile-apps-icon-free-png.png",
      name:"MsWord"
    },{
      id:"24",
      logo:"https://static.vecteezy.com/system/resources/previews/049/116/742/non_2x/microsoft-excel-icon-transparent-background-free-png.png",
      name:"Excel"
    },
    {
      id:"25",
      logo:"https://static.vecteezy.com/system/resources/previews/047/750/204/non_2x/powerpoint-icon-transparent-background-free-png.png",
      name:"PowerPoint"
    },  
    {
      id:"26",
      logo:"https://www.assistanceplus.tn/wp-content/uploads/2022/04/microsoft-power-bi.png",
      name:"PowerBi"
    },  
    {
      id:"27",
      logo:"https://www.pngall.com/wp-content/uploads/13/AWS-Logo-PNG-Images.png",
      name:"Aws"
    },  
    {
      id:"28",
      logo:"https://cloudsynergy.in/wp-content/uploads/2023/11/azure.png",
      name:"Azure"
    },  
    {
      id:"29",
      logo:"https://static.vecteezy.com/system/resources/previews/049/116/759/non_2x/microsoft-outlook-icon-transparent-background-free-png.png",
      name:"Outlook"
    },     
    




    
  ] 
    
  return (
 
    <div className="container "  > 
    <h2 className='lead text-center'>"""""Use This text for skill Image"""""</h2>

        
     <style>  
  {`  
      .fixed {  
          position: sticky;  
          top: 0; 
          height: 100vh; 
      }  

      .scroll {  
          overflow-y: auto;
          height: 100vh;   
      }  
  `}  
</style>
       <div className="scroll" >
        {
            skill.map(item=>(
                <div className='card mt-2' key={item._id}> 
                <div className="row ">
           <div className="col-6 ">
            <img src={item.logo} alt="" className='m-2' width="70px" height='70px' />
            <p className='ms-3'>{item.name}</p>
           </div>
            <div className="col-6">
                <p className='my-4'>{item.logo}</p>
            </div>
        </div>
                </div>
            ))
        }
            </div>
    </div>
  );
}

export default SkillImage;
