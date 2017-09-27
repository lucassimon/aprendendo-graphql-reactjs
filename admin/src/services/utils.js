const checkStatus = (response) => {

  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  throw error;
}

export default checkStatus
