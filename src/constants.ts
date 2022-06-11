// api for countries from https://documenter.getpostman.com/
const BASE_URL = "https://countriesnow.space/api/v0.1/"

const REGEX_EMAIL = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);    
const REGEX_PASSWORD = RegExp(/(?=^.{8,}$)(?=.*\d)(?=.*[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/);

export { REGEX_EMAIL, REGEX_PASSWORD ,BASE_URL}