import Nfetch from './Nfetch';

export const submitData = ({ from, to, amount }) => {

  const url = `https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${from}/${to}/${amount}?format=json`
  
  return Nfetch.get(url)
    .then((response) => {

      return response.data
    })
    .catch((err) => {

      alert('This transaction cannot be converted. Please Contact the adminstrator')
      console.error({ err });
    })
}