"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Step 2 : consume REST API 
const webapi = 'http://dummy.restapiexample.com/api/v1/employees';
// Step 3 : Fetch all data using async/await/promise
const fetchAllEmployees = (url) => __awaiter(void 0, void 0, void 0, function* () {
    var reqProfile;
    const response = yield fetch(url);
    const { data } = yield response.json();
    console.log(data);
    return data;
});
const fetchAllEmployeeById = (url, id) => __awaiter(void 0, void 0, void 0, function* () {
    let reqProfile;
    const response = yield fetch(url);
    const { data } = yield response.json();
    data.forEach((profile) => {
        if (id == profile.id) {
            reqProfile = profile;
        }
        else {
            return null;
        }
    });
    console.log(reqProfile);
    return reqProfile;
});
// Step 4 : Call asynchronous function
fetchAllEmployees(webapi);
fetchAllEmployeeById(webapi, 9);
// Step 5 : Reference js file in html to see output in console
