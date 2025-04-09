class CMSService {
  baseURL = process.env.RAILWAY_STRAPI_URL + "/api";
  endPoint = {
    getUsers: this.baseURL + "/user-details",
  };

  async getUsers(name) {
    try {
      var url = this.endPoint.getUsers;
      if (name) {
        url = this.endPoint.getUsers + "?filters[name]=" + name;
      }
      const options = {
        method: "GET",
        url: url,
        // headers: headersAuth,
      };
      var axios = require("axios").default;
      const response = await axios.request(options).catch(function (response) {
        if (response.response.data) {
          if (response.response.status == 200) {
            return {
              status: response.response.status,
              data: response.response.data,
            };
          } else {
            return {
              status: 502,
            };
          }
        } else {
          return {
            status: 502,
          };
        }
      });
      return response.data;
    } catch (exception) {
      console.log(exception);
      return {
        status: 502,
      };
    }
  }
}
module.exports = CMSService;
