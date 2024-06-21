const red = require("@material-ui/core/colors/red").default
const blue = require("@material-ui/core/colors/red").default

const CourseSettings = require('./course-settings')

module.exports = {
  siteMetadata: {
    title: CourseSettings.name,
    siteUrl: CourseSettings.siteUrl,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
        name: "markdown-pages",
      }
    },
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true,
              removeAccents: true,
            }
          },
          {
            resolve: "gatsby-remark-smartypants",
            options: {
              quotes: false,
              ellipses: false,
              backticks: false,
              dashes: "inverted"
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 920,
              withWebp: true,
              wrapperStyle: "margin-bottom: 1rem;",
              backgroundColor: 'transparent'
            }
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer"
            }
          },
          {
            resolve: "gatsby-remark-emojis",
            options: {
              active: true,
              class: "emoji-icon",
              size: 64,
              styles: {
                display: "inline",
                margin: "0",
                "margin-top": "1px",
                position: "relative",
                top: "5px",
                width: "25px"
              }
            }
          },
          `@rstacruz/gatsby-remark-component`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: ["/missing-info", "/profile", "/sign-in", "/sign-out", "/sign-up", "/404"],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`
      }
    },
    {
      resolve: "gatsby-transformer-moocfi-exercises"
    },
    {
      resolve: "gatsby-transformer-vocabulary"
    },
    `gatsby-plugin-top-layout`,
    {
      resolve: 'gatsby-plugin-material-ui',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: CourseSettings.name,
        short_name: CourseSettings.name,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `static/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-meta-redirect` // make sure to put last in the array
  ]
};
