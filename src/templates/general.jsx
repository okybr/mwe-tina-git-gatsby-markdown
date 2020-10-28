import React from 'react';
import { graphql } from 'gatsby';
import { usePlugin } from 'tinacms';
import { useRemarkForm } from 'gatsby-tinacms-remark';

export default function Template({ data }) {

    const [post, form] = useRemarkForm(
        data.markdownRemark,
        {
            label: 'My Form Label',
            fields: [
                {
                    name: 'frontmatter.title',
                    label: 'My label for my title',
                    component: 'text',
                },
            ],
        }
    );

    usePlugin(form);

    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }}/>
        </div>
    );
};

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(
            frontmatter: {
                slug: {
                    eq: $slug
                }
            }
        ) {
            ...TinaRemark
            html
            frontmatter {
                slug
                title
            }
        }
    }
`;
