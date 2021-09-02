module.exports = {
    dialect: 'sqlite',
    storage: './src/database/socialmedia.sqlite',
    define: {
        timestamps:true, // created_at, updated_at
        underscored:true, // format snake_case
    }
}