import React from "react";
import { graphql } from "gatsby";

export default function Template({
    data: { markdownRemark: { frontmatter, html }}
}) {
    return (
        <div>
        <h1>{frontmatter.title}</h1>
        <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
        />
        </div>
    );
};

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                slug
                title
            }
        }
    }
`;
