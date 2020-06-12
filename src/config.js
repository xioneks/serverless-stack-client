export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notesrichard-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://1pty019baj.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_5FAIDOi4t",
    APP_CLIENT_ID: "t965dl3pt1t3rt139qmf0mil5",
    IDENTITY_POOL_ID: "us-east-2:c7063865-d3fd-430c-9c8d-1a95ed266c56"
  }
};