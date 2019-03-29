const consultants = {
  pxl: {
    name: '潘晓良',
    position: '联合创始人',
    jobTitle: '前百姓网CTO&联合创始人',
    introduction: '从零开始打造百姓网 “小而美”的技术团队 在产品运营、公司文化、人事制度等方面经验丰富'
  }
}
const services = {
  interview: {
    key: 'interview',
    name: '面试服务',
    products: [{
      code: 'A01',
      title: 'CTO/技术合伙人',
      bg: require('../assets/product/A01.jpg'),
      consultantsKeys:['pxl']
    }, {
      code: 'A02',
      title: '技术总监',
      bg: require('../assets/product/A02.jpg'),
      consultantsKeys:['pxl']
    }, {
      code: 'A03',
      title: '后端架构',
      bg: require('../assets/product/A03.jpg'),
      consultantsKeys:['pxl']
    },{
      code: 'A04',
      title: '前端架构',
      bg: require('../assets/product/A04.jpg'),
      consultantsKeys:['pxl']
    }, {
      code: 'A05',
      title: '产品经理',
      bg: require('../assets/product/A05.jpg'),
      consultantsKeys:['pxl']
    }, {
      code: 'A06',
      title: '运营总监',
      bg: require('../assets/product/A06.jpg'),
      consultantsKeys:['pxl']
    },{
      code: 'A07',
      title: '第一个工程师',
      bg: require('../assets/product/A07.jpg'),
      consultantsKeys:['pxl']
    }]
  },
  consulting: {
    key: 'consulting',
    name: '轻咨询服务',
    products: [{
      code: 'B01',
      title: '怎样寻找技术合伙人？',
      bg: require('../assets/product/B01.jpg'),
      consultantsKeys:['pxl']
    },{
      code: 'B02',
      title: '如何找到靠谱的外包方？',
      bg: require('../assets/product/B02.jpg'),
      consultantsKeys:['pxl']
    },{
      code: 'B03',
      title: '创业初期如何组建技术团队？',
      bg: require('../assets/product/B03.jpg'),
      consultantsKeys:['pxl']
    }]
  },
  deep_service: {
    key: 'deep_service',
    name: '技术深度服务',
    products: [{
      code: 'C01',
      title: '技术诊断',
      bg: require('../assets/product/C01.jpg'),
      consultantsKeys:['pxl']
    },{
      code: 'C02',
      title: '第一个产品研发上线',
      bg: require('../assets/product/C02.jpg'),
      consultantsKeys:['pxl']
    },{
      code: 'C03',
      title: '第一个产品的开发外包监理',
      bg: require('../assets/product/C03.jpg'),
      consultantsKeys:['pxl']
    }]
  }
}

const data = {
  getService(serviceKey) {
    var service = services[serviceKey]
    service.products.forEach(product => {
      product.consultants = product.consultantsKeys.map(key => {
        return consultants[key]
      })
    });
    return service
  },
  getProduct(serviceKey, productCode) {
    var service = services[serviceKey]
    var product = service.products.filter(product => {
      return product.code == productCode
    })[0]
    product.consultants = product.consultantsKeys.map(key => {
      return consultants[key]
    })
    return product
  }
}

export default data