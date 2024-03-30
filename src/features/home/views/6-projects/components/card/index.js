import { HiInformationCircle } from "react-icons/hi";
import * as Unicons from "@iconscout/react-unicons";
import Link from "next/link";
import Image from "next/image";
import * as IconSi from "react-icons/si";
import { useTranslation } from "react-i18next";

export const CardProject = ({
  project,
  handleCarousel,
  setProject,
  setIsOpenInfo,
  setIsOpenVideo,
  setVideoId,
}) => {
  const { t } = useTranslation();

  const handleInfo = () => {
    setProject(project);
    setIsOpenInfo(true);
    return;
  };

  const handleVideo = (videoId) => {
    setVideoId(videoId);
    setIsOpenVideo(true);
    return;
  };

  return (
    <div className="relative group overflow-hidden rounded-lg shadow shadow-slate-200 dark:shadow-gray-800">
      <Image
        height={0}
        width={0}
        sizes="100vw"
        style={{ height: "100%", width: "100%" }}
        src={project.image.src}
        alt={project.image.alt}
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b to-slate-900 from-transparent transition-all duration-500"></div>
      <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 m-6 transition-all duration-500">
        <Link
          href="#!"
          className="text-white hover:text-amber-500 font-semibold transition-all duration-500"
        >
          {project.title}
        </Link>
        <span className="block text-sm text-slate-400">{project.subtitle}</span>
      </div>
      <div className="absolute z-10 opacity-0 group-hover:opacity-100 top-1/2 -translate-y-1/2 right-0 left-0 mx-auto text-center transition-all duration-500">
        {project.carousel.positionImage ? (
          <Link
            href="#"
            onClick={() => handleCarousel(project.carousel.positionImage)}
            className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"
          >
            <Unicons.UilCamera width={16} />
          </Link>
        ) : null}
        {project.youtube.link ? (
          <div
            onClick={() => handleVideo(project.youtube.link)}
            className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"
          >
            <IconSi.SiYoutube width={16} />
          </div>
        ) : null}
        {project.website.link ? (
          <Link
            href={project.website.link}
            target="_blank"
            className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"
          >
            <Unicons.UilLink width={16} />
          </Link>
        ) : null}
        <div
          onClick={handleInfo}
          className="btn bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white btn-icon rounded-full lightbox"
        >
          <HiInformationCircle width={30} />
        </div>
      </div>
    </div>
  );
};
