// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var $$Array     = require("bs-platform/lib/js/array.js");
var Json_decode = require("bs-json/src/Json_decode.js");

function parseCompany(json) {
  return /* record */[
          /* name */Json_decode.string(json),
          /* employees : [] */0
        ];
}

function parseCompanies(json) {
  return $$Array.to_list(Json_decode.array(parseCompany, json));
}

function parseEmployee(json) {
  return /* record */[
          /* firstName */Json_decode.field("firstName", Json_decode.string, json),
          /* lastName */Json_decode.field("lastName", Json_decode.string, json),
          /* birthday */Json_decode.field("birthday", Json_decode.string, json),
          /* salary */Json_decode.field("salary", Json_decode.$$float, json)
        ];
}

function parseEmployees(json) {
  return $$Array.to_list(Json_decode.array(parseEmployee, json));
}

function parseSearch(json) {
  return $$Array.to_list(Json_decode.array(Json_decode.string, json));
}

var apiUrl = "http://localhost:3000";

function fetchCompanies() {
  return fetch("http://localhost:3000/companies").then((function (prim) {
                  return prim.json();
                })).then((function (json) {
                return Promise.resolve($$Array.to_list(Json_decode.array(parseCompany, json)));
              }));
}

function fetchEmployees(name) {
  return fetch(apiUrl + ("/employees?name=" + name)).then((function (prim) {
                  return prim.json();
                })).then((function (json) {
                return Promise.resolve($$Array.to_list(Json_decode.array(parseEmployee, json)));
              }));
}

function fetchSearch(query) {
  return fetch(apiUrl + ("/search?query=" + query)).then((function (prim) {
                  return prim.json();
                })).then((function (json) {
                return Promise.resolve($$Array.to_list(Json_decode.array(Json_decode.string, json)));
              }));
}

exports.parseCompany   = parseCompany;
exports.parseCompanies = parseCompanies;
exports.parseEmployee  = parseEmployee;
exports.parseEmployees = parseEmployees;
exports.parseSearch    = parseSearch;
exports.apiUrl         = apiUrl;
exports.fetchCompanies = fetchCompanies;
exports.fetchEmployees = fetchEmployees;
exports.fetchSearch    = fetchSearch;
/* No side effect */