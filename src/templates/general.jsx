import React from "react";
import { graphql } from "gatsby";
import { useForm, usePlugin } from "tinacms";

export default function Template({ data }) {

    const [post, form] = useForm({
        id: data.markdownRemark.id,
        label: "My Form Label",
        initialValues: data.markdownRemark,
        onSubmit: markdown => {
            alert(`Submitting ${markdown.frontmatter.title}`);
        },
        fields: [
            {
                name: "frontmatter.title",
                label: "Title",
                component: "text",
            },
        ],
    });

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
            html
            frontmatter {
                slug
                title
            }
        }
    }
`;
