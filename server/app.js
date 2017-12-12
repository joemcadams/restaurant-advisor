var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const rest = [
	{
	name: "Tony's Balogna Pony",
    diningType: "Fast Food",
    hours: "9AM-5PM",
    priceRange: "5-35",
    offersDelivery: true,
    outdoors: true,
    email: "tony@bologna.pony",
    phone: "414-323-4444",
    streetNo: 42,
    streetName: "W. Wisconsin Ave.",
    city: "Milwaukee",
    state: "Wisconsin",
    zip: "53233",
}]

app.get('/Restaurant', (req, res) => res.send(rest))

/*
 * +            name="Tony's Balogna Pony"
 +            diningType="Fast Food"
 +            hours="9AM-5PM"
 +            priceRange="5-35"
 +            offersDelivery={ true }
 +            outdoors={ true }
 +            email="tony@bologna.pony"
 +            phone="414-323-4444"
 +            streetNo={ 42 }
 +            streetName="W. Wisconsin Ave."
 +            city="Milwaukee"
 +            state="Wisconsin"
 +            zip="53233"
 * */

module.exports = app;
