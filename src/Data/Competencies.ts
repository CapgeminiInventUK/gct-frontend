import { Discipline, GradedCompetencies, TableData } from '../Types/Data';

function createData(
  grade: keyof GradedCompetencies,
  competency: string,
  discipline: Discipline = Discipline.General
): TableData {
  return {
    checked: false,
    grade,
    competency,
    discipline,
  };
}

export const defaultData = [
  createData('C1', 'Be a good person', Discipline.General),
  createData(
    'C2',
    'Awareness of core computing concepts such as OS, networking public cloud',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Understands the fundamentals of JavaScript, HTML, and CSS',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Demonstrates proficiency within an area of software development/deployment (FE, FS, DevOps etc.)',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Is involved in writing/testing production-ready solutions with support from more senior engineers',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Is aware of the quality of their code/deliverables and is continually seeking to improve it',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Is able to debug and solve problems in their own code',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Actively learns the systems, tools and technologies applicable to their area (classroom or elearning)',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Understands operatonal processes involved in running and maintaining code bases, and engineering tools',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Certification obtained in entry level cloud qualifications (AWS / Azure / GCP)',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Attends knowledge-sharing events organised within Engineering, the wider business, or 3rd parties',
    Discipline.Engineering
  ),
  createData('C2', 'Familiar with Agile delivery', Discipline.Engineering),
  createData(
    'C2',
    "Contributes to Invent UK's Engineering GitHub to support innovative 'go to market' showcase projects",
    Discipline.Engineering
  ),
  createData('C2', 'Good communication and analytical skills', Discipline.Engineering),
  createData('C2', 'Proactive and solution orientated', Discipline.Engineering),
  createData('C2', 'Can estimate effort required to deliver work', Discipline.Engineering),
  createData(
    'C2',
    'Ensures all administration around time and activities is records as per procedure',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Adheres to required Security and Compliance processes at all times',
    Discipline.Engineering
  ),
  createData('C2', 'Strong team collaboration', Discipline.Engineering),
  createData(
    'C2',
    'Ability to build networks within the community, DF and Invent',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Ability to prioritise times and activities as required',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Exhibits a growth mindset and a passion for learning to develop own skills and those of the community',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Values feedback and openly shares feedback with peers and managers',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Knows when to ask for support to complete a job to time and quality requirements',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Able to identify problems / risks early and communicate to project lead',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Participates in workshops, reviews, and external meetings',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Acts as a buddy to new joiners within the community',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Aware of Capgemini Invent processes and procedures',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Finds opportunities to showcase engineering-related success stories within Invent',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Is confident to walk through and explain concepts and potential solutions with stakeholders',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Identifies and communicates potential leads, primarily add-on sales to project manager',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Actively builds valuable relationships with joint team members and with clients at peer level',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Builda credibility with your clients through your content and ways of working',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'May support on engineering-related bid work, including written responses and preparing materials',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Aware of strategic offers of Capgemini Invent and you provide support to innovation activities when required',
    Discipline.Engineering
  ),
  createData(
    'C2',
    'Visible within the engineering community, to Digital Factories, and wider Invent UK',
    Discipline.Engineering
  ),
  createData(
    'C2',
    "Supports recruitment and team 'development' through events",
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Certification obtained for the next level of cloud (eg AWS Developer) or specfic technology certifaction (eg Java, React, Kubenetes, Terraform etc)',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Have understanding of other cloud providors at a high level. (eg if expereience in AWS have and understanding of Azure - supported through certifcation etc)',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Is working towards a T-shape skill set by building additional, relevant technical skills and certifications within an area of interest',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Experienced in working within an Agile delivery environment',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Able to work with limited direction - may seek support for new processes or tools ',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Able to make well-reasoned design and implementation decisions on their project where they know the existing solution',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Can lead or participate in quality / peer reviews',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Exhibits a methodical approach to debugging, analysis, and problem solving technical issues',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Strong awareness and appreciation of a broad range of engineering disciplines (e.g., microservices, DevOps, QA etc.)',
    Discipline.Engineering
  ),
  createData(
    'C3',
    "Assists with onboarding other engineers to processes or tools with which they're familiar",
    Discipline.Engineering
  ),
  createData(
    'C3',
    "Leads on contributions to Invent UK's Engineering GitHub to support innovative 'go to market' showcase projects",
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Ensures understanding of product development methodologies relevant to the client (e.g., GDS for Government)',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Takes responsibility for the product or service (e.g., as Senior Developer)',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Can adjust to situations that involve changing taks and/or locations, shifting priorities or ambiguity',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Creation and maintenance of knowledge transfer documentation',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Leads or owns work packages within core knowledge areas - prioritising and structuring accordingly',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Manages own work stream and leads others in the stream',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Is able to strongly influence others that a feature or piece of functionality is applicable and viable',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Actively contributes to team level technical discussions',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Able to work efficiently and collaboratively with colleagues from other disciplines',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Can help and guide others in troubleshooting technologies outside of their area of expertise',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Delegates effectively to team members, providing sufficient stretch goals, cognizant of their strengths and weaknesses',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Drives own development through mandatory and elective training',
    Discipline.Engineering
  ),
  createData('C3', 'Acts as mentor and coach to lower grades', Discipline.Engineering),
  createData(
    'C3',
    'Provides informal knowledge sharing/presentations to small groups external to their immediate team',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Proactively  ensures technical skills remain relevant',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Informally trains staff in technologies for which they are an SME when required',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Represents the team/project in workshops, reviews and external meetings',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Experienced in Capgemini Invent processes and procedures',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Drives own salability, working together with resourcing',
    Discipline.Engineering
  ),
  createData(
    'C3',
    "Instills credibility and legitimacy within your clients and you have specific 'face off' accountability",
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Understands the sales process and associated events and levers in Capgemini Invent',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Has an understanding of the commercial implications and business drivers',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Is aware of strategic offers of Capgemini Invent and provides support to innovation activities as and when required',
    Discipline.Engineering
  ),
  createData('C3', 'Supports on new engineering offerings', Discipline.Engineering),
  createData(
    'C3',
    'Takes the lead on preparing engineering-related bid work, including written responses and materials',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Proactively builds trusted relationship with client members',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Can lead an engineering community workstream that drives commercial community initiatives',
    Discipline.Engineering
  ),
  createData(
    'C3',
    'Supports recruitment via CV screening, interviews and Team Selection Events',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Is identified as a lead role within the Engineering community',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Is developing deep expertise in a core technology (specialist) OR a broad understanding of multiple technologies (generalist)',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Understands cloud solution architecture patterns ',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Has become the go-to person for several areas of a technical solution',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Identifies and assesses the suitability of new technologies',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Influences important technical decisions for a project',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Provides technical advice and input to technical decisions which impact the team and the wider project',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Actively looks to improve the efficiency within the area through innovations in working practices and technology',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Helps to determine which skills are required within the engineering community according to market need ',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Anticipates technical issues at the service level',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Has achieved multiple industry recognised certifications that appeal to prospective clients',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Able to technically lead on medium - large projects',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Can provide / validate inputs into estimates as required',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Is aware, and adopts industry best practice and keeps up to date with new emerging technologies and tools',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Able to progress multiple pieces of work simultaneously, delegating accordingly and setting direction for others within the team',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Can understand the architecture of a solution, can contribute to its design, and understand how it is deployed into production',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Leads the engineering project team independently and in accordance with best practices',
    Discipline.Engineering
  ),
  createData(
    'C4',
    "Leads in onboarding engineers to processes or tools with which they're familiar",
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Delivers content used in internal training courses and peer-led learning',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Excels in communication, analytical, and team leadership skills',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Proactively develops new internal and external networks to support knowledge share and internal contribution',
    Discipline.Engineering
  ),
  createData('C4', 'Results orientated and goal driven', Discipline.Engineering),
  createData(
    'C4',
    'Exhibits strong team leadership, taking responsibility for the peformance and profitability of their team/s',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Possesses strong storytelling ability that can be used to cultivate understanding and gain support for initiatives',
    Discipline.Engineering
  ),
  createData('C4', 'Cultivates strong client relationships', Discipline.Engineering),
  createData(
    'C4',
    'Can drive innovative change, with attention to the embedding of culture and new skills within a business unit',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Applies strategic thinking to determine the most appropriate solution for the client, based on opportunties and constraints',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Understands the resource needs required in relation to the phase of the project',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Identifies and supports opportunities for phase extensions and/or resourcing additional roles',
    Discipline.Engineering
  ),
  createData('C4', 'Identifies risks and leads on mitigations', Discipline.Engineering),
  createData(
    'C4',
    'Monitors and escalates delivery, people or resource issues as per the reporting structure',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Drives effective recruitment, carefully ensuring talent aligns to market need',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Offers engineering and consulting mentorship and coaching to lower grades with an interest in career progression',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Organises and coordinates knowledge sharing and learning events for the community',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Strong understanding of commercial implications and business drivers',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Accomplished stakeholder engagement, managing expectations',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Shares knowledge with stakeholders outside of the area - such as conferences, meetups, external blogs, etc.',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Cultivates an ever expanding network of professionals both within and external to Capgemini Invent',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Recognised as a creator/contributor to initiatives or side-projects which progress the development of the community',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Contributes to written responses and customer presentation as part of the sales process, possibly as part of the bid team',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Leads the successful, profitable delivery of a project or stream of work within a larger project',
    Discipline.Engineering
  ),
  createData(
    'C4',
    "Strong input on 'Go to Market' materials and strategy",
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Familiar with current  industry research and publications at Invent and are able to transfer that to client projects',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Is actively building a reptuation as an expert outside of Capgemini through various activitities - such as conferences, meetups, external blogs, open source contributions etc.',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Keenly spots business transformation opportunities and shares this knowledge with those able to initiate conversations',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Instrumental in progressing new engineering offerings',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Direct involvement in shaping business propositions and articulating delivery approach',
    Discipline.Engineering
  ),
  createData(
    'C4',
    'Can influence others outside of primary assignments',
    Discipline.Engineering
  ),
];
