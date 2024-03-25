import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import classes from '../UI/ProjectPreview.module.css';
import ViewButton from './ViewButton';

const ProjectPreview = ({data}) => {
    return (
        <div className={classes.project_preview}>
            <div className={classes.project_gallery}>
                <ReactImageGallery
                    items={data.images}
                    lazyLoad={true}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    autoPlay={true}
                    slideInterval={Math.floor(Math.random() * (5000 - 3500 + 1)) + 3500}
                    slideDuration={600}
                    showNav={false}
                />
            </div>
            <div className={classes.project_body}>
                <h1>{data.title}</h1>
                <p>{data.body}</p>
                <ViewButton link={data.link}/>
            </div>
        </div>
    );
};

export default ProjectPreview;