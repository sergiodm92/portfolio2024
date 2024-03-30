"use client";
import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

export const Modal = ({ setIsOpen, project }) => {
  const { t } = useTranslation();
  const disableBodyScroll = () => {
    document.documentElement.style.overflow = "hidden";
  };

  const enableBodyScroll = () => {
    document.documentElement.style.overflow = "visible";
  };

  useEffect(() => {
    disableBodyScroll();

    return () => {
      enableBodyScroll();
    };
  }, []);

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <div className={styles.close} onClick={() => setIsOpen(false)} />
        <h2>{project.title}</h2>
        <span>{t(project.info.text)}</span>
        <div className={styles.skills}>
          {project.technologies.map((item, index) => {
            return (
              <div className={` ${styles.cardskill}`} key={index}>
                <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-amber-500/10 group-hover:bg-amber-500 text-amber-500 group-hover:text-white text-center rounded-xl me-5 transition-all duration-500">
                  <div className="rotate-45">{item.Icon}</div>
                </div>
                <div className="flex items-center justify-center">
                  <h4 className="mb-0 text-[10px]">{item.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
