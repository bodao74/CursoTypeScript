const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default {
    port: 3000,
    //dbUri: "mongodb+srv://appdev:HVfweSJBIUfAhz3p@cluster0.dp0gz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.dp0gz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    env: 'development'
}