/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	finduserbyid: function(req,res) {
        var id=req.param('id');
        console.log(id);
        var printjson=function(data) {
            res.json(data);
        };
        var data=User.finduserbyid(id,printjson);
        
    },
    
	createuser: function(req,res) {
//        var id=req.param('id');
        var alluserdata=req.allParams();
        console.log(alluserdata);
        console.log(alluserdata.name);
        var printjson=function(data) {
            res.json(data);
        };
        var data=User.createuser(alluserdata,printjson);
        
    },
    
	updateuser: function(req,res) {
//        var id=req.param('id');
        var alluserdata=req.allParams();
        console.log(alluserdata);
        console.log(alluserdata.name);
        var printjson=function(data) {
            res.json(data);
        };
        var data=User.updateuser(alluserdata,printjson);
        
    },
    
	deleteuser: function(req,res) {
        var id=req.param('id');
        console.log(id);
        var printjson=function(data) {
            res.json(data);
        };
        var data=User.deleteuser(id,printjson);
        
    },
    
	login: function(req,res) {
        
        var logindata=req.allParams();
//        var email=req.param('email');
//        var password=req.param('password');
        console.log(logindata);
        var printjson=function(data) {
            res.json(data);
        };
        var data=User.attemptLogin(logindata,printjson);
        
    },
    
    
	signup: function(req,res) {
        
        var logindata=req.allParams();
//        var email=req.param('email');
//        var password=req.param('password');
        console.log(logindata);
        var printjson=function(data) {
            res.json(data);
        };
        var data=User.signup(logindata,printjson);
        
    }
    
    
//	findone: function(req,res) {
//        console.log(req());
//        var printjson=function(data) {
//            res.json(data);
//        };
//        var data=User.findname("Tushar",printjson);
//        
//    }
    
};

