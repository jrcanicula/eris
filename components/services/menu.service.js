'use strict';

angular.module('erisApp')
  .factory('MenuService', function () {
      return {
          menuItems: [
            {
                name: 'Home',
                state: 'master.home',
                order: 1,
                subMenu: []
            },
            {

                name:'About',
                state:'master.about',
                order: 2,
                subMenu: []

            }
            //{
            //    name: 'Sample',
            //    state: 'master.\\',
            //    order: 7,
            //    subMenu: [
            //        {
            //            name: 'Upload download',
            //            state: 'upload',
            //            order: 5,
            //            subMenu: []
            //        }
            //    ]
            //},
            //{
            //    name: 'Indonesia',
            //    state: '',
            //    order: 7,
            //    subMenu: [
            //         {
            //             name: 'Discount Request',
            //             state: 'discountRequest',
            //             order: 1,
            //             subMenu: []
            //         },

            //    {
            //        name: 'Discount Approval',
            //        state: 'discountApproval',
            //        order: 1,
            //        subMenu: []
            //    },
            //     {
            //         name: 'Discount Analysis',
            //         state: 'discountAnalysis',
            //         order: 1,
            //         subMenu: []
            //     }
            //    ]
            //}
          ]
      };
  });