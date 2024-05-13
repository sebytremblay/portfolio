import React from "react";
import Image from "next/image";
import { kebabCase } from "@/utils/utils";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <div
      className="max-w-sm mx-auto flex flex-col items-center md:items-start md:justify-center"
      key={project.id}
    >
      <a
        href={project.link || project.github}
        target="_blank"
        className="w-full relative rounded-xl border-gray-300 border p-2 transition hover:-translate-y-2 hover:opacity-75 hover:border-pink-500 will-change-transform"
      >
        <img
          className="w-full rounded-md"
          src={project.img}
          alt="Project Thumbnail"
        />
      </a>
      <div className="w-full mt-5 relative">
        <div className="flex items-start justify-between">
          <a href={project.link || project.github} target="_blank">
            <h3 className="text-lg font-bold">{project.title}</h3>
          </a>
          <div className="flex space-x-2 pt-1.5 pr-1">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <Image
                  src="/sebytremblay/static/icons/external-link.svg"
                  width={16}
                  height={16}
                  alt="Link Icon"
                />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Image
                  src="/sebytremblay/static/icons/github.svg"
                  width={16}
                  height={16}
                  alt="GitHub Icon"
                />
              </a>
            )}
          </div>
        </div>
        <p className="text-gray-500 text-left text-sm">{project.desc}</p>
        <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
          {project.tags.map((tag, index) => (
            <li key={tag}>
              <Link href={`/projects/tag/${kebabCase(tag)}`}>
                <div className="m-1 rounded-lg text-sm bg-pink-700 py-1 px-2 cursor-pointer hover:opacity-75">
                  {tag}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
