import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  const [uploadVideoResponse,setUploadVideoResponse] = useState("")
  const [removeCategoryVideoResponse,setRemoveCategoryVideoResponse] = useState("")
  return (
    <>
      <div className="container mt-5 d-flex justify-content-between">
        <Add setUploadVideoResponse={setUploadVideoResponse}/>
        <Link to={'/watch'}>View History</Link>
      </div>
      <div className='container-fluid my-5'>
        <div className="row">
          <div className="col-lg-6">
            <h3>All Videos</h3>
            <View uploadVideoResponse={uploadVideoResponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse}/>
          </div>
          <div className="col-lg-6">
              <Category removeCategoryVideoResponse={removeCategoryVideoResponse}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home