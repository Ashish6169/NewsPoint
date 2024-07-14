import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NewsItem.css';
import NoImage from '../Noimg.png';


const NewsItem = (props)=>{
        let { title, description, imageUrl, newsUrl, author, date , source} = props;
        return (
            <div className="news-container">
            <div className='mx-4 my-4'>
                <div className="card" style={{ width: "22rem" }}>
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"50%" , zIndex:'1'}}>
                            {source} 
                 </span>
                    <img src={imageUrl || NoImage} className="card-img-top" alt="No Image Published By Author " />

                    <div className="card-body mx-10">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text"> {description}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        <p className="card-text"><small class="text-muted"> By {author} on {new Date(date).toGMTString()}</small></p>
                    </div>
                </div>
            </div>
            </div>
        )
    }


export default NewsItem
