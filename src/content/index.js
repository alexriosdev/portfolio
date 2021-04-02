const year = new Date().getFullYear().toString();

export default {
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
    img:
      'https://images.unsplash.com/photo-1615803795804-06a0c2a0030e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed explicabo distinctio expedita iure nihil necessitatibus saepe magnam veritatis perferendis voluptas reprehenderit blanditiis tempore ipsam, porro quaerat accusantium! Quam, minus tempora?
    Quis, atque obcaecati impedit dicta natus distinctio dolor inventore quos vel. Perferendis facere, consequatur commodi magnam adipisci laudantium unde totam magni culpa fuga modi quaerat, ad tenetur saepe mollitia natus?
    Quisquam tenetur fugiat hic vero tempore ex esse quos, modi totam aperiam accusamus quaerat, similique beatae cumque sed dolorem. Fugiat suscipit asperiores quasi illum consequatur impedit autem dolor! Tempore, voluptate.
    Modi nisi nostrum rerum at! Assumenda ut tenetur nisi dolorem sit enim ex ullam debitis! Quibusdam quisquam aperiam consectetur tempore! Commodi nihil porro hic vel numquam accusantium praesentium, incidunt minima.`,
  },

  experience: {
    title: 'Projects',
    text: `Here is a showcase of all the applications I've built.`,
    projects: [
      {
        img: 'https://source.unsplash.com/random',
        title: 'Project 1',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio amet dolor provident, suscipit officiis quo voluptatum commodi quos doloremque dolorem recusandae quae illum voluptas, at optio esse non rem nesciunt!',
        tools: [
          { name: 'React', link: 'https://reactjs.org/' },
          { name: 'Ruby', link: 'https://www.ruby-lang.org/en/' },
        ],
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'Project 2',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio amet dolor provident, suscipit officiis quo voluptatum commodi quos doloremque dolorem recusandae quae illum voluptas, at optio esse non rem nesciunt!',
        tools: [
          { name: 'React', link: 'https://reactjs.org/' },
          { name: 'Ruby', link: 'https://www.ruby-lang.org/en/' },
        ],
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'Project 3',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio amet dolor provident, suscipit officiis quo voluptatum commodi quos doloremque dolorem recusandae quae illum voluptas, at optio esse non rem nesciunt!',
        tools: [
          { name: 'React', link: 'https://reactjs.org/' },
          { name: 'Ruby', link: 'https://www.ruby-lang.org/en/' },
        ],
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'Project 4',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio amet dolor provident, suscipit officiis quo voluptatum commodi quos doloremque dolorem recusandae quae illum voluptas, at optio esse non rem nesciunt!',
        tools: [
          { name: 'React', link: 'https://reactjs.org/' },
          { name: 'Ruby', link: 'https://www.ruby-lang.org/en/' },
        ],
      },
    ],
  },

  contact: {
    title: 'Contact',
    text: `Quis, atque obcaecati impedit dicta natus distinctio dolor inventore quos vel.`,
    link: {
      text: 'Click Here',
      to: 'mailto:alexrios.dev@gmail.com',
    },
  },

  resume: {
    link: {
      text: 'Resume',
      to: 'https:/google.com',
    },
  },

  footer: {
    link: {
      text: `© ${year} alexriosdev`,
      to: 'https:/github.com/alexriosdev',
    },
  },
};
