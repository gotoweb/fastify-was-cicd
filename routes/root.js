'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { root: true, hostname: process.env.RDS_HOSTNAME, username: process.env.RDS_USERNAME }
  })
}
