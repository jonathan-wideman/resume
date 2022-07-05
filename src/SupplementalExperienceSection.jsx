import React from 'react'
import DateRange from './DateRange'
import Section from './Section'
import SectionDiv from './SectionDiv'

export default function SupplementalExperienceSection({ items }) {
    return (
        <Section>
            <h2>Supplemental Experience</h2>
            <SectionDiv>
                <div className='section-grid'>
                    {items.map((exp, index) => <React.Fragment key={index}>
                        <span>{exp.position && <em>{exp.position}, </em>}{exp.organization} {exp.description}</span>
                        <span className='right-align'><DateRange {...exp.tenure} /></span>
                    </React.Fragment>)}
                </div>
            </SectionDiv>
        </Section>
    )
}
