'use strict';

angular.module('erisApp')
  .factory('DataUtility', function ($filter, $location) {

      Number.isFinite = Number.isFinite || function (value) {
          return typeof value === 'number' && isFinite(value);
      };

      //Number.isInteger = Number.isInteger || function (value) {
      //    return typeof value === 'number' &&
      //      isFinite(value) &&
      //      Math.floor(value) === value;
      //};

      Number.isNaN = Number.isNaN || function (value) {
          return typeof value === 'number' && isNaN(value);
      };

      function isInt(n) {
          return Number(n) === n && n % 1 === 0;
      }

      function isFloat(n) {
          return Number(n) === n && n % 1 !== 0;
      }

      return {
          isDateRangeValid: function (from, to, allowSameDay) {
              if (!this.isValidDate(from) || !this.isValidDate(to)) {
                  return false;
              }

              return allowSameDay ? moment(from).startOf('day') <= moment(to).startOf('day') : moment(from).startOf('day') < moment(to).startOf('day');
          },
          isValidDate: function (date) {
              return moment(_.trim(date)).isValid();
          },
          isValidObject: function (obj) {
              return !_.isNil(obj);
          },
          isValidString: function (string) {
              return (!_.isNil(string) && !_.isEmpty(_.trim(string)));
          },
          isNumericValue: function (num) {
              return angular.isNumber(num) && Number.isFinite(num);
          },
          isValidInteger: function (num) {
              if (!this.isValidString(num) || Number.isNaN(num)) {
                  return false;
              }

              var intParsed = parseInt(num);

              if (!this.isNumericValue(intParsed) || !isInt(intParsed) || intParsed <= 0) {
                  return false;
              }

              return true;
          },
          isValidFloat: function (num) {
              if (!this.isValidString(num) || Number.isNaN(num)) {
                  return false;
              }

              var floatParsed = parseFloat(num);

              if (!this.isNumericValue(floatParsed) || !isFloat(floatParsed) || floatParsed <= 0) {
                  return false;
              }

              return true;
          },
          isStringEqual: function (str1, str2) {
              return _.toLower(_.trim(str1)) === _.toLower(_.trim(str2));
          },
          isKeywordInString: function (string, keyword) {
              return _.toLower(_.trim(string)).indexOf(_.trim(_.toLower(keyword))) > -1;
          },

          formatDate: function (date) {
              if (!this.isValidDate(date)) {
                  return '';
              }

              var localTime = moment.utc(date).toDate();
              localTime = moment(localTime).format('M/DD/YYYY');
              return localTime;
          },

          formatDateForServer: function (date) {
              if (!this.isValidDate(date)) {
                  return null;
              }

              return moment(date).toISOString();
          },
          //baseUrl: function() {
          //    return $location.protocol + '://' + $location.host + '/';
          //},
          parseInt: function (num) {
              if (!this.isValidInteger(num) && !this.isValidFloat(num)) {
                  return 0;
              }

              if (_.isString(num)) {
                  num = num.replace(',', '');
              }

              return parseInt(num);
          },
          parseFloat: function (num) {
              if (!this.isValidFloat(num) && !this.isValidInteger(num)) {
                  return 0;
              }

              if (_.isString(num)) {
                  num = num.replace(',', '');
              }

              return parseFloat(num);
          }
      };

  });


