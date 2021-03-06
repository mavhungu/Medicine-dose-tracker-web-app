'use strict';
const Medicine = require('../database/models/medicine.Model')

const notificationWorkerFactory = function() {
  return {
    run: function() {
      Medicine.sendNotifications();
    },
  };
};

module.exports = notificationWorkerFactory();
