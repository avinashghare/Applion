/**
* Warranty.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        period: {
            type: "integer"
        },
        type: {
            type: 'string',
            enum: ['onsite', 'offsite']
        },
        expiry: {
            type: "date"
        },
        iscovered: {
            type: 'string',
            enum: ['Yes', 'No']
        },
        iswarrentyoramc: {
            type: 'string',
            enum: ['warranty', 'amc']
        },
        purchasemonth: {
            type: "integer"
        },
        purchaseyear: {
            type: "integer"
        },
        purchasedate: {
            type: "integer"
        },
        billno: {
            type: "string"
        },
      
        store: {
            model: 'store'
        },
        includes: {
            type: 'string',
            enum: ['visit free', 'service', 'parts', 'other']
        },
        appliance: {
            model: "appliance"
        }

  }
};

