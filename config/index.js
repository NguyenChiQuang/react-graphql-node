
module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 4000,
    URL: process.env.BASE_URL || 'http://localhost:4000',
    jwtSecret: "eyJ0eXAiOiJK",
    GOOGLE: {
        clientID: '839356118606-alh9o0ilhs155vn4qcc8kckluv1r3frq.apps.googleusercontent.com',
        clientSecret: 'Hg-gclpa7WXF_AQAxBkozOqN'
    }
}