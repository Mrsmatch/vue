import axios from "axios";
import qs from "qs";

export function getBannList(url) {
    return axios.get(url)
}

export function getHotList(url) {
    return axios.get(url)
}

export function getCombination(url) {
    return axios.get(url)
}

export function getLogin(url, obj) {
    return axios.post(url, qs.stringify(obj))
}

export function getRegistry(url, obj) {
    return axios.post(url, qs.stringify(obj))
}

export function isToken(url) {
    return axios.get(url)
}

export function getPayCycle(url) {
    return axios.get(url)
}

export function changePwd(url, opt) {
    return axios.get(url, opt)
}

export function forgetPwd(url, opt) {
    return axios.get(url, opt)
}