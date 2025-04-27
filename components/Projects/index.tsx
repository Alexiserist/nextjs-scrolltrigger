"use clients";

import React, { useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function index() {
  const [selected, setSelectedProject] = useState(0);

  const imageContainer = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: imageContainer.current,
      start: "-300px",
      end: document.body.offsetHeight,
      pin: true,
      markers: false
    })

  },[])

  const projects = [
    {
      title: "Salar de Atacama",
      src: "salar_de_atacama.jpg",
    },
    {
      title: "Valle de la luna",
      src: "valle_de_la_muerte.jpeg",
    },
    {
      title: "Miscanti Lake",
      src: "miscani_lake.jpeg",
    },
    {
      title: "Miniques Lagoons",
      src: "miniques_lagoon.jpg",
    },
  ];

  return (
    <div className={styles.project}>
      <div className={styles.projectDescription}>
        <div className={styles.imageContainer}>
          <Image ref={imageContainer} src={`/images/${projects[selected].src}`} alt="project image" fill={true} priority={true}></Image>
        </div>
        <div className={styles.column}>
          <p>The flora is characterized by the presence of high elevation wetland, as well as yellow straw, broom sedge, tola de agua and tola amaia.</p>
        </div>
        <div className={styles.column}>
          <p>
            Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered
            vulnerable.
          </p>
        </div>
      </div>
      <div className={styles.projectList}>
            {
              projects.map((project, index) => {
                return <div onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl} key={`p_${index}`}>
                  <p >{project.title}</p>
                </div>
              } )
            }
        </div>
    </div>
  );
}
