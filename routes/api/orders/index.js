'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return [
      {
        "_id": "6237521ae5bfa293bf21836e",
        "restaurant": {
          "_id": "62374c64e5bfa293bf21831b",
          "name": "동백커피 센텀점",
          "menu": [
            {
              "_id": "62374fe0e5bfa293bf218347",
              "name": "동백커피",
              "price": 4000,
              "quantity": 1
            }
          ],
          "address": "부산시 수영구 센텀1로 777",
          "rating": 4.8
        },
        "orderedMenu": [
          {
            "_id": "62374fe0e5bfa293bf218347",
            "name": "동백커피",
            "price": 4000,
            "quantity": 1
          }
        ],
        "deliveryInfo": {
          "status": "PREPARING",
          "assignedCourier": "김배달",
          "estimatedDeleveryTime": 40
        }
      }
    ]
  })
}
