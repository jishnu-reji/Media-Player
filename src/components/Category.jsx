import React, { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { addCategoryAPI, getAVideoAPI, getCategoryAPI, removeCategoryAPI, updateCategoryAPI } from "../services/allAPI";
import VideoCard from "./VideoCard";

function Category({removeCategoryVideoResponse}) {
  const [show, setShow] = useState(false);
  const [categoryName,setCategoryName] = useState("")
  const [allCategories,setAllCategories] = useState([])

  const handleClose = () =>{
    setShow(false);
    setCategoryName("")
  } 
  const handleShow = () => setShow(true);

  const addCategory = async ()=>{
    if(categoryName){
      const result= await addCategoryAPI({categoryName,allVideos:[]})
      handleClose()
      getAllCategories()
    }
    else{
      alert("Please fill the forms completely!!!")
    }
  }
  const getAllCategories = async() =>{
    const result = await getCategoryAPI()
    setAllCategories(result.data)
  }
  const removeCategory = async(cId) =>{
    await removeCategoryAPI(cId)
    getAllCategories()
  }

  const dragOverCategory=(e)=>{
    e.preventDefault()
    console.log("dragging over category");
  }
  const videoDropped = async(e,categoryId) =>{
    const videoId = e.dataTransfer.getData("videoId")
    console.log(`video id : ${videoId}, category id : ${categoryId}`);
    //get detail of video dropped
    const {data} = await getAVideoAPI(videoId)  //destructured using {}
    console.log(data);
    //get category details where we have to add videos
    const selectedCategory = allCategories.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    await updateCategoryAPI(categoryId,selectedCategory)
    getAllCategories()
  }

  const videoDragStarted = (e,videoId,categoryId)=>{
    console.log(`drag started from ${categoryId} with ${videoId}`);
    let dataShare = {videoId,categoryId}
    e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare))
  }

  useEffect(()=>{
    getAllCategories()
  },[removeCategoryVideoResponse])
  return (
    <div>
      <div className='d-flex justify-content-around'>
        <h3>All Categories</h3>
        <button onClick={handleShow} className="btn bg-info rounded-circle pb-0 m-0">
          {" "}
          <i className="fa-solid fa-plus p-2"></i>{" "}
        </button>
      </div>

      <div className="container-fluid mt-3">
        {allCategories.length>0?allCategories.map((item,index)=>(
          <div droppable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,item?.id)} key={index} className="border rounded p-3 mb-2">
            <div className="d-flex justify-content-between">
              <h5>{item.categoryName}</h5>
              <button onClick={()=>removeCategory(item.id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
            </div>
            <div className="row mt-2">
              {
                item.allVideos?.length>0 && 
                item.allVideos?.map((video,index)=>(
                  <div draggable onDragStart={(e)=>videoDragStarted(e,video.id,item.id)} key={index} className="col-lg-6">
                    <VideoCard insideCategory={true} displayData={video}/>
                  </div>
                ))
              }
            </div>
          </div>
        ))
        : <div className="text-danger fa-bolder">No categories are added yet!!!</div>
        }
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <div className="border rounded border-secondary p-3">
            <FloatingLabel
              controlId="floatingInputCategory"
              label="Category"
              className="mb-3"
            >
              <Form.Control value={categoryName} onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Category" />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={()=>addCategory()} variant="info">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Category;
