import React from 'react'
import { Address } from './Address'
import DateRange from './DateRange'
import Section from './Section'
import SectionDiv from './SectionDiv'

export default function ProfessionalExperienceSection({ items }) {
    return (
        <Section>
            <h2>Professional Experience</h2>
            {items.map((exp, index) => <SectionDiv key={index}>
                <div className='split'>
                    <span><span className='company-name'>{exp.company.name}</span>, <Address {...exp.company.address} /></span>
                    <DateRange {...exp.tenure} />
                </div>
                <div>
                    <em>{exp.position.title}{exp.position.department && <> - {exp.position.department}</>}</em>
                </div>
                <p>{exp.position.description}</p>
                <strong>Selected Accomplishments:</strong>
                <ul>
                    {exp.accomplishments.map((acc, index) => <li key={index}>{acc}</li>)}
                </ul>
            </SectionDiv>)}
        </Section>
    )
}
