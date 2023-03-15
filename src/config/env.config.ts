export const EnvConfiguration = () => ({
    environment: process.env.MODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || '3000',
    defaultLimit: +process.env.DEFAULT_LIMIT || 5
})