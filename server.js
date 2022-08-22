const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const _ = require('lodash');
const Utility = require('./lib/utility.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.post('/rsvp', async (req, res) => {
    console.log('got an rsvp post request', req.body);
    let params = {
        fullName: `${_.get(req, 'body.first_name')} ${_.get(req, 'body.last_name')}`,
        phone: _.get(req, 'body.phone'),
        guests: _.get(req, 'body.guest_no'),
        message: _.get(req, 'body.message'),
        attending: _.get(req, 'body.attending')
    };

    if (_.isNil(params.fullName) || _.isNil(params.phone) ||
    _.isNil(params.guests) || _.isNil(params.attending)) {
        return res.status(400).send({ message: 'Missing parameters!' });
    }

    const queryError = await Utility.insertRsvp(params);

    if (!_.isEmpty(queryError)) {
        return res.status(400).send({ error: queryError });
    }
    return res.jsonp({ success: true });
});

app.post('/contact', async (req, res) => {
    console.log('got a contact post request', req.body);
    let params = {
        fullName: _.get(req, 'body.full_name'),
        email: _.get(req, 'body.email'),
        phoneNumber: _.get(req, 'body.contact_no'),
        message: _.get(req, 'body.message')
    };

    if (_.isNil(params.fullName) || _.isNil(params.email) ||
    _.isNil(params.phoneNumber) || _.isNil(params.message)) {
        return res.status(400).send({ message: 'Missing parameters!' });
    }

    const queryError = Utility.insertContact(params);

    if (!_.isEmpty(queryError)) {
        return res.status(400).send({ error: queryError });
    }

    return res.jsonp({ success: true });
});

app.listen({ port: 3111 }, () => {
    console.log('Server running and listening at localhost:3111')
});
