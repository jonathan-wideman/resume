import React from 'react'
import { ContactSection } from './ContactSection'
import EducationSection from './EducationSection'
import ProfessionalExperienceSection from './ProfessionalExperienceSection'
import SummarySection from './SummarySection'
import SupplementalExperienceSection from './SupplementalExperienceSection'
import TechnicalExperienceSection from './TechnicalExperienceSection'

export default function Resume({ resume }) {
    return (
        <div className='resume'>
            <ContactSection {...resume.contact} />
            <SummarySection items={resume.summary} />
            <ProfessionalExperienceSection items={resume.professionalExperience} />
            <EducationSection items={resume.education} />
            <TechnicalExperienceSection items={resume.technicalExperience} />
            <SupplementalExperienceSection items={resume.supplementalExperience} />
        </div>
    )
}
