import images from 'assets/index';

const {
  tme1,
  tme2,
  tme3,
  learn1,
  learn2,
  learn3,
  learn4,
  learn5,
  learn6,
  did1,
  did2,
  did3,
  did4,
  did5,
  did6,
  did7,
  s4me1,
  s4me2,
  s4me3,
  s4me4,
  s4me5
} = images;

export const projects = [
  {
    title: 'Travel Meet Eat',
    info:
      'An online community where members can match, connect & share with travel-foodies worldwide and then break bread together in real life.',
    rolePlayed: '',
    projectImages: [tme1, tme2, tme3],
    utilized:
      'ReactNative, Expo, ReactNavigation, Redux, NodeJS, Sequelize, Postgresql,Jest.',
  },
  {
    title: 'Learnry',
    rolePlayed: '',
    projectImages: [learn1, learn2, learn3, learn4, learn5, learn6],
    info:
      'Learnry is an intuitive, powerful and yet very easy to use learning management system that helps participants learn, interact, practice, receive feedback and perform much better in their jobs',
    utilized: 'React, Redux, React Storybook, Sass, Netlify',
  },

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
    title: 'Didemy',
    rolePlayed: '',
    projectImages: [did1, did2, did3, did4, did5, did6, did7],
    info:
      'Learnry is an intuitive, powerful and yet very easy to use learning management system that helps participants learn, interact, practice, receive feedback and perform much better in their jobs',
    utilized: 'React, Redux, React Storybook, Sass, Netlify',
  },

  {
    title: 'Outwork CRM',
    rolePlayed: '',
    info:
      'Outwork is mobile field force management solution designed to help businesses build, schedule & monitor their field team’s activities in real time. Outwork guarantees easy, accurate, and cost-effective field operation tracking & management giving you the control you need to more efficiently track and manage field staff and offsite activities',
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
    title: 'Secure For Me',
    rolePlayed: '',
    projectImages: [
      s4me1,
      s4me2,
      s4me3,
      s4me4,
      s4me5
    ],
    info:
      "There comes the need the safeguard one's investment for the future generation. Secure for Me is an app that was born out of this intent. It's an asset management app and can be used to safe guard ones properties for appropriate family members in the event of one's passing",
    utilized:
      'REST api, Graphql, MySQL, PostgreSQL, React and Redux. Got introduced to Test Driven Development and Object Oriented Design,Continuous Integration, RESTful Api Design, Database Management System.',
  },
  // {
  //   title: 'Secure For Me Admin',
  //   rolePlayed: '',
  //   info:
  //     "There comes the need the safeguard one's investment for the future generation. Secure for Me is an app that was born out of this intent. It's an asset management app and can be used to safe guard ones properties for appropriate family members in the event of one's passing. Secure for Me Admin, is the admin aspect of the Secure for me App",
  //   utilized:
  //     'REST api, Graphql, MySQL, PostgreSQL, React and Redux. Got introduced to Test Driven Development and Object Oriented Design,Continuous Integration, RESTful Api Design, Database Management System.',
  // },
];
