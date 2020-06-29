import images from 'assets/index';

export const projects = [
  {
    title: 'Maudition',
    info: 'A mobile platform for hosting auditions',
    rolePlayed: '',
    projectImages: [
      images.mcategories,
      images.mcompetitionDetail,
      images.mcompetitionDetail2,
      images.mcompetitions,
      images.mpostview,
      images.msplashscreen,
    ],
    utilized:
      'ReactNative, Expo, ReactNavigation, Redux, NodeJS, Sequelize, Postgresql,Jest.',
  },
  {
    title: 'Peerless',
    rolePlayed: '',
    info:
      'A learning management solution for companies and educational institutions toeducate students, staff and conduct assessments.',
    utilized: 'React, Redux, React Storybook, Sass, Netlify',
  },
  {
    title: 'Outwork CRM',
    rolePlayed: '',
    info: 'A workforce management solution for monitoring field workers',
    projectImages: [
      images.outworkmap,
      images.outworktask,
      images.outworkztp,
      images.outworktaskdes,
      images.outworksummary,
      images.outworkreports,

    ],
    utilized: 'React, Redux, Sass',
  },
  {
    title: 'Decagon Institute',
    rolePlayed: '',
    info:
      "Decagon is one of Nigeria's institute for training software engineers",
    utilized:
      'REST api, Graphql, MySQL, PostgreSQL, React and Redux. Got introduced to Test Driven Development and Object Oriented Design,Continuous Integration, RESTful Api Design, Database Management System.',
  },
];
