import React from 'react';
import BlockTitle from './BlockTitle';
import ProjectPreview from './ProjectPreview';
import classes from '../UI/ProjectsBlock.module.css';
import projects from '../projectsData';

const ProjectsBlock = ({projectsRef}) => {

    const { dorateam, turing, sportTrack, kembangFlower, portfolioData, oneTravel, organicFood } = projects

    return (
        <div id='projects' ref={projectsRef} className={classes.projects_block}>
            <BlockTitle title={'проекты'}/>
            <div className={classes.projects_body}>
                <ProjectPreview data={dorateam}/>
                <ProjectPreview data={turing}/>
                <ProjectPreview data={sportTrack}/>
                <ProjectPreview data={portfolioData}/>
                <ProjectPreview data={kembangFlower}/>
                <ProjectPreview data={oneTravel}/>
                <ProjectPreview data={organicFood}/>
            </div> 
        </div>
    );
};

export default ProjectsBlock;