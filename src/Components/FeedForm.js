import React from 'react';
import FeedFormUrl from './FeedFormUrl';

const FeedForm = ({ title, urls, handleTitle, handleUrls }) => (
  <div>
    <p className="clear"><span>Title:</span> <input type="text" value={title} onChange={handleTitle} className="col-xs-9 form-control" /></p>
    {urls.map((value, i)=>{
      return <FeedFormUrl key={i} value={value} i={i} handleUrls={handleUrls} />
    })}
  </div>
)

export default FeedForm;