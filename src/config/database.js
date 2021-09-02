module.exports = {
    dialect: 'sqlite',
    storage: './src/database/socialmedia.sqlite',
    define: {
        timestamp:true, // created_at, updated_at
        underscore:true, // format snake_case
    }
}