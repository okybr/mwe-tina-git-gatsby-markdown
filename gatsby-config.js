module.exports = {
    plugins: [

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `contents`,
                path: `${__dirname}/src/contents`,
            },
        },

        `gatsby-transformer-remark`,

    ],
};
