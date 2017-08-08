var name = 'levelup'
var spec = require('samizdat-spec')

var levelup = require('levelup')
var memdown = require('memdown')
var pull = require('pull-stream')
var samizdat = require('./')

var test = require('tape')
var db = samizdat(levelup(memdown))

spec.basic(name, {
    tape: require('tape'),
    db: samizdat(levelup(memdown))
})

spec.stream(name, {
    tape: require('tape'),
    db: samizdat(levelup(memdown))
})
