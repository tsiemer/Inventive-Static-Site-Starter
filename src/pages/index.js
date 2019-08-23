import React from 'react';
import { RichText } from 'prismic-reactjs';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../../IGP-Framework/components/layouts';
import BlogPosts from '../../IGP-Framework/components/BlogPosts';
import PageLinks from '../../IGP-Framework/components/PageLinks';


const HomePage = ({ data }) => {
  return (
    <Layout>
      <BlogHomeHead home={ data.prismic.allBlog_homes.edges.slice(0,1).pop().node } />
      <BlogPosts posts={ data.prismic.allPosts.edges }/>
      <PageLinks pages={data.prismic.allPages.edges}/>
    </Layout>
  )
}

// Using the queried Blog Home document data, we render the top section
const BlogHomeHead = ({ home }) => {  
  const avatar = { backgroundImage: 'url(' + home.image.url +')' };
  return (
    <div className="home-header" data-wio-id={ home._meta.id }>
      <div className="blog-avatar" style={ avatar }>
      </div>
      <h1>{ RichText.asText(home.headline) }</h1>
      <p className="blog-description">{ RichText.asText(home.description) }</p>
    </div>
  )
};


// Query for the Blog Home content in Prismic
export default props => ( <StaticQuery query={graphql`
  {
    prismic{
      allBlog_homes(uid:null){
        edges{
          node{
            _meta{
              id
              type
            }
            headline
            description
            image
          }
        }
      }
      allPosts(sortBy: date_DESC){
        edges{
          node{
            _meta{
              id
              uid
              type
            }
            title
            date
            body{
              ... on PRISMIC_PostBodyText{
                type
                label
                primary{
                  text
                }
              }
            }
          }
        }
      }

      allPages{
        edges{
          node{
            _meta{
              id
              uid
              type
            }
            
            title
            date

            body{
              __typename
              ... on PRISMIC_PageBodyBlade{
                type
                label

                primary{
                  section_title
                  subtitle
                  content
                  featured_image
                  cta_button_text
                  cta_button_color
                  blade_background_color
                  button_color

                  cta_button{
                    __typename

                    ... on PRISMIC__ExternalLink{
                      url
                    }

                    ... on PRISMIC__FileLink{
                      name
                      url
                      size
                    }

                  }
                }
              }
            }
          }
        }
      }
    }
  }
`} 
    render={ data => <HomePage data={data} {...props}/> }
  /> 
);
