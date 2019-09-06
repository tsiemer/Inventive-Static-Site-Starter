import React from 'react';
// import { RichText } from 'prismic-reactjs';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layouts';
import Landing from '../components/Landing';



const HomePage = ({ data }) => {
  return (
    <Landing data={data.prismic.allBlog_homes.edges}></Landing>
  )
}

// Query for the Blog Home content in Prismic
export default props => ( <StaticQuery query={graphql`
{
  prismic{
    allBlog_homes{
      edges{
        node{
            _meta{
                id
                type
            }
            headline
            description
            image
        
          body{
            ... on PRISMIC_Blog_homeBodyBlade{
              type
              label

              primary{
                section_title
                subtitle
                content
                featured_image
                button_color
                image_side
                cta_button_text
                cta_button_color
                blade_background_color
                text_alignment
                code

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

            ... on PRISMIC_Blog_homeBodyStaff_member{
              type
              label

              fields{
              	full_name  
                job_title
                staff_image
                bio
              }
            }

            ... on PRISMIC_Blog_homeBodyCard_view{
              type
              label
              
              fields{
              	card_title  
                card_icon
              }
            }

            ... on PRISMIC_Blog_homeBodyCarousel{
              type
              label

              fields{
              	image  
                content
                title
                image_side
              }
            }

            ... on PRISMIC_Blog_homeBodyQuote{
              type
              label

              primary{
                quote
                portrait_author
                name_of_the_author
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