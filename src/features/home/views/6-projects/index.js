import React, { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "../../../../../node_modules/react-18-image-lightbox/style.css";
import { imagesWorksArray as images } from "../../../../Data/data";
import { useTranslation } from "react-i18next";
import { projects } from "./data";
import { CardProject } from "./components/card";
import { Modal } from "./components/modal";
import ModalVideo from "react-modal-video";

export const Projects = () => {
  const [photoIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [project, setProject] = useState({});
  const [projectPos, setProjectPos] = useState({});
  const [isOpenVideo, setIsOpenVideo] = useState(false);
  const [videoId, setVideoId] = useState("");

  const { t } = useTranslation();

  const handleCLick = (index) => {
    setActiveIndex(index);
    setProject(index);
    setOpen(!isOpen);
  };

  const handleCLickModal = (index) => {
    setActiveIndex(index);
    setProject(index);
    setOpen(!isOpen);
  };

  const handleCarousel = () => {
    return;
  };

  //My Work & Projects
  return (
    <>
      <section className="relative md:py-24 py-16" id="project">
        {isOpenInfo && <Modal setIsOpen={setIsOpenInfo} project={project} />}
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">
              {t("works_and_projects")}
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto text-[15px]">
              {t("works_and_projects_description")}
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 mt-4 gap-[30px]">
            {projects.map((project, index) => {
              return (
                <CardProject
                  key={"project number " + index}
                  project={project}
                  handleCarousel={handleCarousel}
                  setProject={setProject}
                  setIsOpenInfo={setIsOpenInfo}
                  setIsOpenVideo={setIsOpenVideo}
                  setVideoId={setVideoId}
                />
              );
            })}
          </div>
        </div>
      </section>
      {isOpen && (
        <Lightbox
          mainSrc={images[projectPos][photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setActiveIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setActiveIndex((photoIndex + 1) % images.length)
          }
        />
      )}

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpenVideo}
        videoId={videoId}
        onClose={() => setIsOpenVideo(false)}
      />
    </>
  );
};
