module.exports = {
  apps: [{
    name: "app1",
    script: "./main.js"
  }],
  env_production: {
    "DB_NAME": "postgres",
    "DB_HOST": "localhost",
    "DB_PORT": "5432",
    "DB_USERNAME": "postgres",
    "DB_PASSWORD": "W1lo_6t9+>",
    "JWT_SECRET": "aef24f6d-5e71-49ab-96d2-69ff083ba7c5",
    "JWT_DURATION": "5m",
    "JWT_REFRESH_SECRET": "5dab7f30-9a5a-4523-8979-d79bb73e72e4",
    "JWT_REFRESH_DURATION": "60m",
    "SALT": 10,
    "FRONTEND_URL": "http://192.168.0.71:5173",
    "EMAIL_SERVICE": "Gmail",
    "EMAIL_ADDRESS": "artecnicasistema@gmail.com",
    "EMAIL_PASSWORD": "fgga jqvc kewr fmtm",
    "FILE_LOCATION": "./uploads"
  }
}
