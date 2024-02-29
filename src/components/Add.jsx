import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { uploadVideoAPI } from "../services/allAPI"

function Add({setUploadVideoResponse}) {
  const [show, setShow] = useState(false);
  const [uploadvideo,setUploadvideo] = useState({
    caption:"",imageURL:"",youtubeLink:""
  })

  const handleClose = () => {
    setShow(false);
    setUploadvideo({...uploadvideo,caption:"",imageURL:"",youtubeLink:""})
  }
  const handleShow = () => setShow(true);
  console.log(uploadvideo);

  const getYoutubeEmbedLink = (link) =>{
    if(link.includes("v=")){
      let videoId = link.split("v=")[1].slice(0,11)
      setUploadvideo({...uploadvideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
    }
    else{
      setUploadvideo({...uploadvideo,youtubeLink:""})
      alert("Please input a valid link")
    }
  }

  const handleUpload = async() =>{
    const {caption,imageURL,youtubeLink}=uploadvideo
    if(caption && imageURL && youtubeLink){
      const result = await uploadVideoAPI(uploadvideo)
      console.log(result);
      if(result.status>=200 && result.status<300){
        alert(`Video ${result.data.caption} uploaded successfully!!!`)
        setUploadVideoResponse(result.data)
        handleClose()
      }
      else{
        alert("API call failed... Please try again after sometimes")
      }
    }
    else{
      alert("please fill the form completely")
    }
  }

  return (
    <>
      <div className="d-flex">
        <h5>Upload a Video</h5>
        <button onClick={handleShow} className="btn bg-secondary ms-2 pb-0">
          {" "}
          <i className="fa-solid fa-plus"></i>{" "}
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Please fill the following details</p>
            <div className="border rounded border-secondary p-3">
                <FloatingLabel
                controlId="floatingInputCaption"
                label="Video Caption"
                className="mb-3"
                >
                <Form.Control type="text" value={uploadvideo.caption} placeholder="Video caption" onChange={(e)=>setUploadvideo({...uploadvideo,caption:e.target.value})}/>
                </FloatingLabel>

                <FloatingLabel
                controlId="floatingInputImg"
                label="Image URL"
                className="mb-3"
                >
                <Form.Control type="text" value={uploadvideo.imageURL} placeholder="Image URL" onChange={(e)=>setUploadvideo({...uploadvideo,imageURL:e.target.value})}/>
                </FloatingLabel>

                <FloatingLabel
                controlId="floatingInputLink"
                label="Youtube Video link"
                className="mb-3"
                >
                <Form.Control type="text" value={uploadvideo.youtubeLink} placeholder="Youtube Video link" onChange={(e)=>getYoutubeEmbedLink(e.target.value)}/>
                </FloatingLabel>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
