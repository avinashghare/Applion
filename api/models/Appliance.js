/**
* Appliance.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
        appliancetype: {
            model: 'appliancetype'
        },
        brand: {
            model: 'brand'
        },
        user: {
            model: "user"
        },
        name: {
            type: "string",
            required: true
        },
        modelnumber: {
            type: "string"
        },
        serialnumber: {
            type: "string"
        },
        location: {
            type: "string"
        },
        purchaseprice: {
            type: "string"
        },
        store: {
            model: 'store'
        },
        status: {
            type: 'string',
            enum: ['archive', 'delete','transfer']
        },
        warranty: {
            collection:"warranty",
            via:"appliance"
        },
        componentwarranty: {
            collection:"componentwarranty",
            via:"appliance"
        }
  }
};

