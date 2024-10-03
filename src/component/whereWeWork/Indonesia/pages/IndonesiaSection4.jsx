import React from "react";
import "../styles/IndonesiaSection4.css";

function IndonesiaSection4() {
  return (
    <div className="IndonesiaSection4">
      <div className="container container_IndonesiaSection4">
        <div className="row_IndonesiaSection4">
          <div className="col1_IndonesiaSection4">
            <h1>
              Stories of climate-affected internal migrants from Indonesia
            </h1>
          </div>
          <div className="col2_IndonesiaSection4">
            <h2>
              <iframe
                width="960"
                height="315"
                src="https://www.youtube.com/watch?v=bGRWH7AM9ZY&t=1s"
                title="Rising Above Waters: A Migrant's Pursuit to Stability"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </h2>
            <p>
              <a
                href="https://www.youtube.com/watch?v=bGRWH7AM9ZY&t=1s"
                target="_blank"
                rel="noopener noreferrer">
                Rising Above Waters: A Migrant's Pursuit to Stability
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndonesiaSection4;
