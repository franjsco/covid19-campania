import axios from 'axios';

const getJsonRegioni = async () => {
  const url = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/';
  const filename = 'dpc-covid19-ita-regioni-latest.json';
  const finalURL = `${url + filename}`;
  let result;

  try {
    const res = await axios.get(finalURL);
    result = res.data;
  } catch (error) {
    result = null;
  }

  return result;
};


const getData = async () => {
  let result;
  const nomeRegione = 'Campania';
  const datiRegione = await getJsonRegioni();


  if (datiRegione) {
    result = datiRegione.find((regione) => regione.denominazione_regione === nomeRegione);
  }

  return result;
};

export default getData;
