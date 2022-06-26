export const resume = {
    contact: {
        name: { first: 'Jonathan', middle: undefined, last: 'Wideman' },
        email: 'jonathan.m.wideman@gmail.com',
        preferredContectMethod: 'email',
        sites: [{ id: 'github', name: undefined, url: 'https://github.com/jonathan-wideman' }]
    },
    summary: [
        'Six years of professional experience in web development; adept with front & backend technologies.',
        'Passion for both mentoring and learning from others, working together to improve whatever we touch.',
        'Love for creating elegant and effective solutions to complex problems.',
        'Personal investment in anything I work on.'
    ],
    professionalExperience: [
        {
            company: { name: 'Beacon Health System', address: { city: 'South Bend', state: 'IN' } },
            tenure: { start: 'February 2020', end: 'Present' },
            position: {
                title: 'Programmer Analyst',
                department: 'Digital Design & Customer Experience',
                description: 'Develop and maintain both public and intranet websites. Develop tools to automate and assist with department processes and tasks. Coordinate with Marketing, Communications, and Information Services departments to provide best patient experience across digital properties. Unofficial team motto: “Reduce patient stress”.'
            },
            accomplishments: [
                'Created transformation service to merge core marketing data from multiple source systems into a single source for consumption by downstream products with accompanying inspector web app to manage merging logic, and to detect and troubleshoot data hygiene issues.',
                'Lead project to develop system that surfaces a web view of preparatory information to patients, integrated with appointment text reminder system.',
                'Our 3-person team overhauled entire public site and launched an additional crisis response site in under two weeks in response to Covid pandemic in early March 2020.',
                'Launched integration with Mayo Clinic Health Information Library that pushed local SERP results from an average of 25th page to first page and related provider CTAs that accounted for 70% of Beacon online appointment initiations during 2021.'
            ]
        },
        {
            company: { name: 'Peakey Enterprise LLC', address: { city: 'Warsaw', state: 'IN' } },
            tenure: { start: 'April 2019', end: 'February 2020' },
            position: {
                title: 'Software Developer',
                department: undefined,
                description: 'Analyze, design, implement, test and maintain software solutions for internal or client use, making use of current technologies and best practices across multiple ecosystems.'
            },
            accomplishments: [
                'Developed a federated identity platform for SSO access to company products, utilizing the .NET Core ecosystem and interfacing with AWS for multi-factor authentication.',
                'Worked alongside teammates to develop an ERP web application to manage company and client personnel, utilizing Angular with Redux against a .NET Core web API'
            ]
        },
        {
            company: { name: 'MyFarms LLC', address: { city: 'Portland', state: 'IN' } },
            tenure: { start: 'June 2012', end: 'April 2015' },
            position: {
                title: 'Software Developer',
                department: undefined,
                description: 'Design, implement, and maintain systems of a precision agriculture web application which enables users to manage geospatially associated agricultural data.'
            },
            accomplishments: [
                'Architected flexible, template-based PDF report generation involving complex geospatial data aggregation. Success of these reports directly led to new contracts with several major clients in the agricultural industry.',
            ]
        },
        {
            company: { name: 'MyFarms LLC', address: { city: 'Upland', state: 'IN' } },
            tenure: { start: 'May 2010', end: 'August 2010' },
            position: {
                title: 'Intern Software Developer',
                department: undefined,
                description: 'Implement and maintain front-end of aforementioned web application.'
            },
            accomplishments: [
                'Improved user experience over several areas of the application.',
            ]
        }
    ],
    education: [
        {
            school: { name: "Indiana University", address: { city: "South Bend", state: "IN" } },
            qualification: {
                degree: "Bachelor of Science",
                field: "Computer Science",
                completion: "May 2018"
            }
        }
    ],
    technicalExperience: [
        { name: 'Javascript ecosystem', time: '6+ years' },
        { name: 'Typescript', time: '3 years' },
        { name: 'React ecosystem', time: '3 years' },
        { name: 'Cloud services (incl. AWS, Google Cloud & Firebase, DigitalOcean, etc)', time: '2+ years' },
        { name: 'CI/CD', time: '1+ year' },
        { name: 'Containerization', time: '1+ year' },
        { name: 'DevOps', time: '1+ year' },
        { name: 'SaaS', time: '1 year' },
        { name: 'API development', time: '3+ years' },
        { name: 'SQL and Relational DBs (primarily Postgres)', time: '3+ years' }
    ],
    supplementalExperience: [
        {
            position: "Local Event Organizer",
            organization: "Global Game Jam",
            description: undefined,
            tenure: { descriptor: undefined, start: "August 2018", end: "January 2021" }
        },
        {
            position: undefined,
            organization: undefined,
            description: "Developed learning incentive app for friend\'s classroom",
            tenure: { descriptor: "Live during school year", start: "2021", end: undefined }
        }
    ]
};
