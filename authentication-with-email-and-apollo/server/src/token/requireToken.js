import fetch from 'node-fetch';

module.exports = function(event) {

  const token = event.data.token
  const api = `https://session-api-stage-backyard.liveathos.com/v1/session-api/session/${token}`

  return fetch(api)
    .then(response => response.json())
    .then(function(response) {
      if(response.error){
      return { data: { token:false } }
      }
      return { data: { token:true } }
    })
    .catch(e => {
      return { data: { token:false } }
    })
}
