module.exports = {
    plugins: [

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'contents',
                path: `${__dirname}/src/contents`,
            },
        },

        'gatsby-transformer-remark',

        {
            resolve: 'gatsby-plugin-tinacms',
            options: {
                enabled: true,
                sidebar: true,
                plugins: [],
            },
        },

    ],
};
