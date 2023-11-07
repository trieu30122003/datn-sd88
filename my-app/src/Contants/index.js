export const APP_ROUTERS = {
  BILL: {
    INDEX: {
      LABEL: 'QUAN LI HOA DON',
      VALUE: '/api/bill/new'
    },
    VIEW_ADD: {
      LABEL: 'QUAN LI HOA DON',
      VALUE: '/api/bill/new/add/'
    },
    // SEARCH: {
    //     LABEL: 'QUAN LI HOA DON',
    //     VALUE: '/admin/customer/search/:name'
    // },
    DETAIL: {
      LABEL: 'QUAN LI HOA DON',
      VALUE: '/api/bill/new/:id'
    },
    DELETE: {
      LABEL: 'QUAN LI HOA DON',
      VALUE: '/api/bill/delete/:id'
    },
  },
  COLOR: {
    INDEX: {
      LABEL: 'QUAN LI MAU SAC',
      VALUE: '/color'
    },
    VIEW_ADD: {
      LABEL: 'QUAN LI MAU SAC',
      VALUE: '/color/add'
    },
    DETAIL: {
      LABEL: 'QUAN LI MAU SAC',
      VALUE: '/color/:colorCode'
    },
  },

  BRAND: {
    INDEX: {
      LABEL: 'QUAN LI HANG',
      VALUE: '/brand'
    }
  },

  PRODUCT: {
    INDEX: {
      LABEL: 'QUAN LI SAN PHAM',
      VALUE: '/product'
    },
    VIEW_ADD: {
      LABEL: 'QUAN LI SAN PHAM',
      VALUE: '/product/add'
    },
    DETAIL: {
      LABEL: 'QUAN LI SAN PHAM',
      VALUE: '/product/:productName'
    },
  },

  EMPLOYEE: {
    INDEX: {
      LABEL: 'QUAN LI NHAN VIEN',
      VALUE: '/employee'
    },
    VIEW_ADD: {
      LABEL: 'QUAN LI NHAN VIEN',
      VALUE: '/employee/add'
    },
    DETAIL: {
      LABEL: 'QUAN LI NHAN VIEN',
      VALUE: '/employee/:employeeCode'
    },
  },
}