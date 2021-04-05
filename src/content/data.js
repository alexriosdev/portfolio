const year = new Date().getFullYear().toString();

export const content = {
  nav: {
    logo: 'AR',
    links: [
      { text: 'About', to: 'about' },
      { text: 'Projects', to: 'projects' },
      { text: 'Contact', to: 'contact' },
    ],
  },

  hero: {
    intro: 'Hi, my name is',
    title: 'Alex Rios.',
    subtitle: 'I like to build things!',
    link: {
      text: 'Read More',
      to: 'about',
    },
  },

  about: {
    title: 'About Me',
    img: `https://avatars.githubusercontent.com/u/21689391?v=4`,
    text: `
      I’m a Software Engineer based in Houston who specializes in designing, developing and delivering wonderful digital experiences. 
      As of recently, I graduated from Flatiron School Bootcamp where I practiced building quality applications and learned to cultivate valuable skills as a developer.
      I’m currently in the process of using technology as an outlet for self-expression and I’m looking forward to making meaningful contributions to the web.
    `,
  },

  experience: {
    title: 'Projects',
    text: `Here is a showcase of the applications I've built.`,
    projects: [
      {
        title: 'TeamWeek',
        text:
          'Full Stack employee scheduling/management application using Rails and React.',
        img:
          'https://raw.githubusercontent.com/alexriosdev/teamweek-app/master/frontend/public/demo.gif',
        tools: [
          { name: 'React', link: 'https://reactjs.org/' },
          { name: 'Redux', link: 'https://redux.js.org/' },
          { name: 'Rails', link: 'https://rubyonrails.org/' },
          { name: 'Material UI', link: 'https://material-ui.com/' },
        ],
        link: {
          text: 'View Code',
          to: 'https://github.com/alexriosdev/teamweek-app',
        },
      },
      {
        title: 'Starships',
        text: 'Starfox64 inspired space shooter built with the Unity Engine.',
        img:
          'https://raw.githubusercontent.com/alexriosdev/team_starship/master/demo.gif',
        tools: [
          {
            name: 'C#',
            link: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
          },
          { name: 'Unity', link: 'https://unity.com/' },
          { name: 'Blender', link: 'https://www.blender.org/' },
        ],
        link: {
          text: 'View Code',
          to: 'https://github.com/alexriosdev/team_starship',
        },
      },
      {
        title: 'Recipe Vault',
        text:
          'Lightweight CLI application that allows users to create, save and share their favorite food recipes.',
        img:
          'https://raw.githubusercontent.com/alexriosdev/recipe-vault/main/lib/demo.gif',
        tools: [{ name: 'Ruby', link: 'https://www.ruby-lang.org/en/' }],
        link: {
          text: 'View Code',
          to: 'https://github.com/alexriosdev/recipe-vault',
        },
      },
      {
        img:
          'https://raw.githubusercontent.com/alexriosdev/tv-hub/main/tv-hub-backend/lib/assets/demo.gif',
        title: 'tv hub',
        text:
          'Single page application for avid movie and tv show watchers to help them keep track of their shows. Users can search titles, add them to their personal collection and give them a review.',
        tools: [
          {
            name: 'JavaScript',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          },
          { name: 'Rails', link: 'https://rubyonrails.org/' },
          { name: 'Bulma', link: 'https://bulma.io/' },
        ],
        link: {
          text: 'View Code',
          to: 'https://github.com/alexriosdev/tv-hub',
        },
      },
    ],
    link: {
      text: 'View More',
      to: 'https:/github.com/alexriosdev',
    },
  },

  contact: {
    title: 'Get In Touch',
    text: `Interested in working together? My inbox is always open. Whether you have a question or just want to connect, I'll try my best to get back to you!`,
    link: {
      text: 'Say Hello',
      to: 'mailto:alexrios.dev@gmail.com',
    },
  },

  resume: {
    link: {
      text: 'Resume',
      to:
        'https://drive.google.com/file/d/1eORNe23Bg0FZJCWLcpNw64Vv9Wkss82X/view?usp=sharing',
    },
  },

  footer: {
    link: {
      text: `© ${year} alexriosdev`,
      to: 'https:/github.com/alexriosdev',
    },
  },
};
