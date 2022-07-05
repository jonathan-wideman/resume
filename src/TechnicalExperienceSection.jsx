import React from 'react'
import Section from './Section'
import SectionDiv from './SectionDiv'

export default function TechnicalExperienceSection({ items }) {
    return (
        <Section>
            <h2>Selected Technical Experience</h2>
            <SectionDiv>
                <div className='section-grid'>
                    {items.map((exp, index) => <React.Fragment key={index}>
                        <span>{exp.name}</span>
                        <span className='right-align'>{exp.time}</span>
                    </React.Fragment>)}
                </div>
            </SectionDiv>
        </Section>
    )
}
