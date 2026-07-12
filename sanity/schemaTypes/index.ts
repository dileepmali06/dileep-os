import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './siteSettings'
import { about } from './about'
import { project } from './project'
import { blog } from './blog'
import { dsaProblem } from './dsaProblem'
import { javaSnippet } from './javaSnippet'
import { certificate } from './certificate'
import { education } from './education'
import { experience } from './experience'
import { course } from './course'
import { book } from './book'
import { timeline } from './timeline'
import { now } from './now'
import { uses } from './uses'
import { homepageSettings } from './homepageSettings'
import { testimonial } from './testimonial'
import { guestbook } from './guestbook'
import { changelog } from './changelog'
import { skills } from './skills'
import { achievement } from './achievement'
import { goal } from './goal'
import { stats } from './stats'
import { stackEvolution } from './stackEvolution'
import { learningLog } from './learningLog'
import { featuredRepo } from './featuredRepo'
import { openSource } from './openSource'
import { readingList } from './readingList'
import { resumeVersion } from './resumeVersion'
import { recommendation } from './recommendation'
import { event } from './event'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings,
    about,
    project,
    blog,
    skills,
    dsaProblem,
    javaSnippet,
    certificate,
    education,
    experience,
    course,
    book,
    timeline,
    now,
    uses,
    homepageSettings,
    testimonial,
    guestbook,
    changelog,
    achievement,
    goal,
    stats,
    stackEvolution,
    learningLog,
    featuredRepo,
    openSource,
    readingList,
    resumeVersion,
    recommendation,
    event

  ],
}

