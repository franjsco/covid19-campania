// import axios from 'axios';
import axios from 'axios';
import csv2json from 'csvjson-csv2json';

import { format, addDays, getHours } from 'date-fns';


const getCSVRegionifromRepository = async (date) => {
  const url = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-regioni/';
  const filename = `dpc-covid19-ita-regioni-${format(date, 'yyyyMMdd')}.csv`;
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


const convertCSVtoJSON = (csv) => {
  if (!csv) {
    return null;
  }

  return csv2json(csv, { parseNumbers: true });
};

const getData = async () => {
  const actualDate = new Date();
  const previousDate = addDays(actualDate, -1);
  const hour = getHours(actualDate);
  let result;

  // preleva il CSV con data attuale solamente se sono passate le 18
  if (hour >= 18) {
    result = await getCSVRegionifromRepository(actualDate);
  }

  // preleva il CSV con data precedente qualora non fosse stato trovato quello attuale
  if (!result) {
    result = await getCSVRegionifromRepository(previousDate);
  }

  // converte il CSV in JSON e filtra i dati per la regione Campania
  if (result) {
    const tmpJSON = convertCSVtoJSON(result);
    result = tmpJSON.find((d) => d.denominazione_regione === 'Campania');
  }

  return result;
};

export default getData;
