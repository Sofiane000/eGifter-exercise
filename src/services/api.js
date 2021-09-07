let env = process.env.REACT_APP_ENV;

let api = "";


env = "dev";
switch (env) {
  case "dev":
    api = "http://localhost:4000"; // Development environment api domain
    break;

  case "staging":
    api = "http://localhost:5000"; // Staging/QA environment api domain
    break;

  case "prod":
    api = "http://localhost:8089/ui"; // Production environment api domain
    break;
}

export default api;