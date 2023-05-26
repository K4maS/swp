import axios from "axios";

const baseUrl = 'https://swapi.dev/api/';

// Основной список адресов данных для спарвочника
export function getMainUrlAddresses() {
    return axios.get(baseUrl).then((res) => { return res.data });
}

export function getFilmsList() {
    return axios.get(baseUrl + '/films').then((res) => { return res.data.results });
}

export function getFilm(id) {
    return axios.get(baseUrl + '/films/' + id).then((res) => { return res.data.results });
}
