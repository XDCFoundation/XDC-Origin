import { httpConstants } from "../constants";
import { httpService } from "../utility/httpService";

export default {
  saveTokenAsDraft,
  updateDraftedToken,
  getTxnHashDetails,
  getCoinMarketCap,
  mintBurnXRC20Token,
  transferOwnershipXRC20Token,
  pauseResumeXRC20Token,
};


async function saveTokenAsDraft(requestdata) {
  let url =
    process.env.REACT_APP_SAVE_AS_DRAFT +
    httpConstants.API_END_POINT.SAVE_TOKEN;

  return httpService(
    httpConstants.METHOD_TYPE.POST,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    requestdata,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.resolve(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function updateDraftedToken(requestdata) {
  let url =
    process.env.REACT_APP_SAVE_AS_DRAFT +
    httpConstants.API_END_POINT.UPDATE_TOKEN;

  return httpService(
    httpConstants.METHOD_TYPE.PUT,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    requestdata,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function getTxnHashDetails(requestData) {
  let url =
    process.env.REACT_APP_TRANSACTION_DETAILS +
    httpConstants.API_END_POINT.GET_TRANSACTION_DETAILS;


  return httpService(
    httpConstants.METHOD_TYPE.POST,
    { 'X-API-KEY': process.env.REACT_APP_X_API_KEY, "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    requestData,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData[0]);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function getCoinMarketCap(requestData) {
  let url =
    process.env.REACT_APP_TRANSACTION_DETAILS + 
    httpConstants.API_END_POINT.GET_COIN_MARKET_CAP

  return httpService(
    httpConstants.METHOD_TYPE.GET,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON, 'X-API-KEY': process.env.REACT_APP_X_API_KEY},
    {},
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject();
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function mintBurnXRC20Token(requestdata) {
  let url =
    process.env.REACT_APP_SAVE_AS_DRAFT +
    httpConstants.API_END_POINT.MINT_BURN_XRC20_TOKEN;

  return httpService(
    httpConstants.METHOD_TYPE.POST,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    requestdata,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.resolve(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function transferOwnershipXRC20Token(requestdata) {
  let url =
    process.env.REACT_APP_SAVE_AS_DRAFT +
    httpConstants.API_END_POINT.TRANSFER_OWNERSHIP;

  return httpService(
    httpConstants.METHOD_TYPE.POST,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    requestdata,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.resolve(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function pauseResumeXRC20Token(requestdata) {
  let url =
    process.env.REACT_APP_SAVE_AS_DRAFT +
    httpConstants.API_END_POINT.PAUSE_RESUME_XRC20_TOKEN;

  return httpService(
    httpConstants.METHOD_TYPE.POST,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    requestdata,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.resolve(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}