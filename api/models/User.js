/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        name: {
            type: "string",
            required: true
        },
        email: {
            type: "email",
            unique: true,
            required: true
        },
        password: {
            type: 'string'
        },
        contact: {
            type: "string"
        },
        pooshwooshid: {
            type: "string"
        },
        pin: {
            type: "string"
        },
        gender: {
            type: 'string',
            enum: ['male', 'female']
        },
        dob: {
            type: 'date'
        },
        pincode: {
            model: 'pincode'
        },
        accesslevel: {
            type: 'string',
            enum: ['user', 'admin', 'store']
        },
        userlocation: {
            collection: "userlocation",
            via: "user"
        }
        //    }
    },
    finduserbyid: function (str, callback) {
        console.log("hello" + str);
        //        User.find({ id: { 'like': '%'+str+'%' }}).populate("userlocation").exec(function(error,data) {
        User.find({
            id: str
        }).populate("userlocation").exec(function (error, data) {
            if (error) {
                console.log(error);
                callback(error);
            }
            if (data) {
                console.log(data);
                callback(data);
            }
        });

    },

    createuser: function (str, callback) {
        //        User.find({ id: { 'like': '%'+str+'%' }}).populate("userlocation").exec(function(error,data) {
        //        User.find({ id: str}).populate("userlocation").exec(function(error,data) {
        User.create(str).exec(function createCB(error, created) {
            if (error) {
                console.log(error);
                callback(error);
            }
            if (created) {
                console.log(created);
                callback(created);
            }
        });

    },
    updateuser: function (str, callback) {
        //        User.find({ id: str}).populate("userlocation").exec(function(error,data) {
        //            var prevdata=data;
        //        });

        //        User.find({ id: { 'like': '%'+str+'%' }}).populate("userlocation").exec(function(error,data) {
        //        User.find({ id: str}).populate("userlocation").exec(function(error,data) {
        //            User.create(str).exec(function createCB(error, created){
        console.log(str);
        //            User.update(str,prevdata).exec(function afterwards(error, updated){
        User.update({
            id: str.id
        }, str).exec(function afterwards(error, updated) {
            if (error) {
                console.log(error);
                callback(error);
            }
            if (updated) {
                console.log(updated);
                callback(updated);
            }
        });

    },

    deleteuser: function (str, callback) {
        console.log("hello" + str);
        //        User.find({ id: { 'like': '%'+str+'%' }}).populate("userlocation").exec(function(error,data) {
        //        User.find({ id: str}).populate("userlocation").exec(function(error,data) {
        User.destroy({
            id: str
        }).exec(function deleteCB(error) {
            if (error) {
                console.log(error);
                callback(error);
            }
            if (!error) {
                callback("The record has been deleted Successfully!!!");
            }
        });

    },

    login: function (str, callback) {
        var email = str.email;
        var password = str.password;
        console.log(email);
        console.log(password);
        console.log("hello" + str);
        //        User.find({ id: { 'like': '%'+str+'%' }}).populate("userlocation").exec(function(error,data) {
        //        User.find({ id: str}).populate("userlocation").exec(function(error,data) {
        User.find({
            or: [{
                email: "'" + email + "'"
            }, {
                password: "'" + password + "'"
            }]
        }).exec(function (error, data) {
            if (error) {
                console.log(error);
                callback(error);
            }
            if (data) {
                console.log(data);
                callback(data);
            }
        });

    },

    attemptLogin: function (inputs, callback) {
        // Create a user
        User.findOne({
            email: inputs.email,
            // TODO: But encrypt the password first
            password: inputs.password
        })
            .exec(function (error, data) {
                console.log(data);
                if (data) {
                    //                    console.log(data);
                    callback(data);
                } else {
                    callback(error);
                }
            });
    },
    
    signup: function (inputs, callback) {
        // Create a user
        User.create({
            name: inputs.name,
            email: inputs.email,
            // TODO: But encrypt the password first
            password: inputs.password
        })
            .exec(function (error, data) {
                console.log(data);
                if (data) {
                    //                    console.log(data);
                    callback(data);
                } else {
                    callback(error);
                }
            });
    },


};