"use strict";

var express = require('express');

var router = express.Router();
/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
module.exports = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9yb3V0ZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJyb3V0ZXIiLCJSb3V0ZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJuZXh0IiwicmVuZGVyIiwidGl0bGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBckI7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHRixPQUFPLENBQUNHLE1BQVIsRUFBYjtBQUVBOztBQUNBRCxNQUFNLENBQUNFLEdBQVAsQ0FBVyxHQUFYLEVBQWdCLFVBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQkMsSUFBbkIsRUFBeUI7QUFDdkNELEVBQUFBLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLE9BQVgsRUFBb0I7QUFBRUMsSUFBQUEsS0FBSyxFQUFFO0FBQVQsR0FBcEI7QUFDRCxDQUZEO0FBSUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlQsTUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XHJcblxyXG4vKiBHRVQgaG9tZSBwYWdlLiAqL1xyXG5yb3V0ZXIuZ2V0KCcvJywgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcclxuICByZXMucmVuZGVyKCdpbmRleCcsIHsgdGl0bGU6ICdFeHByZXNzJyB9KTtcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjtcclxuIl19