export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb5b9ad8a359262551c74d5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bp5ckwgv',
                  apiId: '7b7ce09e-218a-4484-af2d-c8833257e9b9'
                },
                {
                  buildHookId: '5eb5b9ad02f3a75d8c17be49',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ozodwmyh',
                  apiId: '8cc36f39-af37-4527-beec-0233007d97ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Goyaisgod/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ozodwmyh.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
