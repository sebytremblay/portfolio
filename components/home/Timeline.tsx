import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../data/content/home';
import { TExperience } from 'types';

const experienceStyles = {
    contentStyle: {
        background: '#1d1836',
        color: '#fff',
    },
    contentArrowStyle: {
        borderRight: '7px solid #232631'
    }
};

const ExperienceCard: React.FC<TExperience> = ({
    date,
    iconBg,
    icon,
    companyName,
    title,
    points
}) => (
    <VerticalTimelineElement
        {...experienceStyles}
        date={date}
        iconStyle={{ background: iconBg }}
        icon={
            <div className="flex h-full w-full items-center justify-center">
                <img src={icon} alt={companyName} className="h-[70%] w-[70%] object-contain" />
            </div>
        }
    >
        <h3 className="text-[24px] font-bold text-white">{title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
            {companyName}
        </p>
        {/* <ul className="ml-5 mt-5 list-disc space-y-2">
            {points.map((point, index) => (
                <li key={index} className="text-white-100 pl-1 text-[14px] tracking-wider">
                    {point}
                </li>
            ))}
        </ul> */}
    </VerticalTimelineElement>
);

const Experience = () => (
    <div className="text-left" style={{ paddingTop: '100px' }}>
        <div id="experience-header" className="mt-4 ml-4">
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-left">
                What I Have Done So Far
            </p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-left">
                Work Experience
            </h2>
        </div>
        <div className="mt-8">
            <VerticalTimeline>
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} {...experience} />
                ))}
            </VerticalTimeline>
        </div>
    </div>
);

export default Experience;
