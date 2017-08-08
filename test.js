var spec = require('samizdat/spec')

var levelup = require('levelup')
var memdown = require('memdown')
var pull = require('pull-stream')
var samizdat = require('./')

var test = require('tape')
var db = samizdat(levelup(memdown))

spec.basic('level', {
    tape: require('tape'),
    db: samizdat(levelup(memdown))
})

spec.stream('level', {
    tape: require('tape'),
    db: samizdat(levelup(memdown))
})
