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
                plugins: [
                    {
                        resolve: 'gatsby-tinacms-git',
                        options: {
                            pathToRepo: __dirname,
                            pathToContent: '/',
                            defaultCommitMessage: 'My default commit message',
                            defaultCommitName: 'My default commit name',
                            defaultCommitEmail: 'my@default-commit.email',
                            pushOnCommit: false,
                        },
                    },
                    'gatsby-tinacms-remark',
                ],
            },
        },

    ],
};
