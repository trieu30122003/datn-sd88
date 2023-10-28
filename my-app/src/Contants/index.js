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
  },
  BRAND: {
    INDEX: {
      LABEL: 'QUAN LI HANG',
      VALUE: '/brand'
    }
  }
}