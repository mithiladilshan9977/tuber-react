const awsConfig = {
  aws_project_region: "ap-southeast-2",
  aws_cognito_region: "ap-southeast-2",
  aws_user_pools_id: "ap-southeast-2_xejvDoMuZ",
  aws_user_pools_web_client_id: "5apcaahg4mlb2gb99iqdeobkn3",
  oauth: {},
  aws_cognito_username_attributes: ["EMAIL"],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ["EMAIL"],
  aws_cognito_mfa_configuration: "OFF",
  aws_cognito_mfa_types: ["SMS"],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [],
  },
  aws_cognito_verification_mechanisms: ["EMAIL"],
};

export default awsConfig;
