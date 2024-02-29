import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="container">
        <div
          style={{ height: "100vh" }}
          className="header row align-items-center"
        >
          <div className="col-lg-5">
            <h3 style={{ fontWeight: "800", fontSize: "50px" }}>
              Welcome to <span className="text-warning">Media Player</span>
            </h3>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit hic, ex, quia id exercitationem reiciendis ad
              corporis, ratione magni repudiandae adipisci? Eos consequuntur
              nisi expedita labore sequi, unde suscipit ab.
            </p>
            <button onClick={handleNavigate} className="btn btn-info">
              Get Started
            </button>
          </div>
          <div className="col-lg-1"></div>
          <div style={{ height: "100%" }} className="col-lg-6">
            <img
              style={{ height: "100%" }}
              src="https://media1.giphy.com/media/fXbq46ZJEVvKqyy8vj/giphy.gif?cid=6c09b9524jtw6o0jsl0rj6oo137n115bcdru1tbwkc8tlxpg&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
              alt="Landing Image"
            />
          </div>
        </div>

        <div className="features mt-3">
          <h3 className="text-center">Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
              <Card>
                <Card.Img style={{height:'400px'}} variant="top" src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text style={{height:'50px'}}>
                    User can upload the view and remove the videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
            <Card>
                <Card.Img style={{height:'400px'}} variant="top" src="https://www.filmmakersacademy.com/wp-content/uploads/2018/09/music.gif" />
                <Card.Body>
                  <Card.Title>Catagorize Videos</Card.Title>
                  <Card.Text style={{height:'50px'}}>
                    User can catogorize the videos according to their performances using drag and drop features 
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
            <Card>
                <Card.Img style={{height:'400px'}} variant="top" src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://gifsoutloud.com/wp-content/uploads/2020/12/source.gif" />
                <Card.Body>
                  <Card.Title>Watch History</Card.Title>
                  <Card.Text style={{height:'50px'}}>
                    Users are able to watch the history of watched videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="row video border rounded mt-5 p-5">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h3 className="text-warning">Simple Fast and Powerful</h3>
            <p style={{textAlign:'justify'}}><span>Play Everything : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae omnis quae odit, possimus animi quidem iste </p>
            <p style={{textAlign:'justify'}}><span>Play Everything : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae omnis quae odit, possimus animi quidem iste </p>
            <p style={{textAlign:'justify'}}><span>Play Everything : </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae omnis quae odit, possimus animi quidem iste </p>
          </div>
          <div className="col-lg-6">
          <iframe width="914" height="514" src="https://www.youtube.com/embed/55pzldrBRJM" title="Bramayugam - Trailer (Malayalam) | Mammootty | FEB 15 Release" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default LandingPage;
