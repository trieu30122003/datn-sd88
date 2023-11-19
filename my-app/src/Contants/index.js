export const APP_ROUTERS = {
  BILL: {
    INDEX: {
      LABEL: 'QUAN LI HOA DON',
      VALUE: '/bill'
    },
    VIEW_ADD: {
      LABEL: 'QUAN LI HOA DON',
      VALUE: '/bill/add'
    },
    // SEARCH: {
    //     LABEL: 'QUAN LI HOA DON',
    //     VALUE: '/admin/customer/search/:name'
    // },
    DETAIL: {
      LABEL: 'QUAN LI HOA DON',
      VALUE: '/bill/:billCode'
    },
    DELETE: {
      LABEL: 'QUAN LI HOA DON',
      VALUE: '/bill/:billCode'
    },
    CONFIRM: {
      LABEL: 'QUAN LI HOA DON',
      VALUE: '/confirm/:id'
    }
  },
  HOME: {
    DETAIL: {
      LABEL: 'TRANG CHU',
    VALUE: '/product-detail-page/:id'
    },
    
    ALL: {
      LABEL: 'TRANG CHU',
      VALUE: '/all-product'
    }
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
    },
    VIEW_ADD: {
      LABEL: 'QUAN LI HANG',
      VALUE: '/brand/add'
    },
    DETAIL: {
      LABEL: 'QUAN LI HANG',
      VALUE: '/brand/:brandCode'
    }
  },
  Customer: {
    INDEX: {
      LABEL: 'QUAN LI KHACH HANG',
      VALUE: '/customer'
    },
    VIEW_ADD: {
      LABEL: 'QUAN LI KHACH HANG',
      VALUE: '/customer/add'
    },
    DETAIL: {
      LABEL: 'QUAN LI KHACH HANG',
      VALUE: '/customer/:customerCode'
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