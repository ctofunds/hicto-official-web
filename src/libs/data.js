const consultants = {
  gsh: {
    name: '龚世海',
    position: '创始人',
    jobTitle: '上海交通大学硕士、中欧EMBA、前大众点评网CTO',
    introduction: '十年来帮助大众点评建立完整的技术体系， 从几人扩展到六百人的精悍团队。',
    avatar: require('../assets/avatars/gsh.jpg'),
  },
  pxl: {
    name: '潘晓良',
    position: '联合创始人',
    jobTitle: '前百姓网CTO&联合创始人',
    introduction: '从零开始打造百姓网 “小而美”的技术团队 在产品运营、公司文化、人事制度等方面经验丰富',
    avatar: require('../assets/avatars/pxl.jpg'),
  }
}
const services = {
  interview: {
    key: 'interview',
    name: '面试服务',
    introduction: [
      '服务流程主要分成三个部分：',
      '1. 面试前沟通（30分钟）：与HR或者招聘负责人进行沟通岗位要求，了解公司对于候选人的需求，阅读简历，从简历中发现一些问题以及了解之前沟通的内容，明确需要考察的关键点。',
      '2. 面试（60分钟）：电话或者现场面试（如果是现场则是候选人到面试官所在地）时间安排由HR或者招聘负责人进行，HR或者招聘负责人也可以电话接入或者现场同时参与',
      '3. 反馈建议（30分钟）：根据面试情况，面试官先做自己梳理，总结每个考察点的情况，完成评判。并且把自己的看法和HR或者招聘负责人沟通，最终确认是否雇佣。',
      '我们的专家都是在各自领域从业多年，具备丰富实战经验的专业人士，他们主要从专业角度对候选人进行以下方面考察：',
      '1. 基础知识和专业能力',
      '2. 项目实战经验',
      '3. 学习能力和成长性',
      '以及与专业相关的一些软性能力，主要有：',
      '4. 技术领导力',
      '5. 团队协作能力',
      '6. 职业道德和工作方式'
    ],
    products: [{
      code: 'A01',
      title: 'CTO/技术合伙人',
      bg: require('../assets/product/A01.jpg'),
      consultantsKeys: ['pxl', 'gsh']
    }, {
      code: 'A02',
      title: '技术总监',
      bg: require('../assets/product/A02.jpg'),
      consultantsKeys: ['gsh', 'pxl']
    }, {
      code: 'A03',
      title: '后端架构',
      bg: require('../assets/product/A03.jpg'),
      consultantsKeys: ['pxl', 'gsh']
    }, {
      code: 'A04',
      title: '前端架构',
      bg: require('../assets/product/A04.jpg'),
      consultantsKeys: ['gsh', 'pxl']
    }, {
      code: 'A05',
      title: '产品经理',
      bg: require('../assets/product/A05.jpg'),
      consultantsKeys: ['pxl', 'gsh']
    }, {
      code: 'A06',
      title: '运营总监',
      bg: require('../assets/product/A06.jpg'),
      consultantsKeys: ['pxl', 'gsh']
    }, {
      code: 'A07',
      title: '第一个工程师',
      bg: require('../assets/product/A07.jpg'),
      consultantsKeys: ['gsh', 'pxl']
    }]
  },
  consulting: {
    key: 'consulting',
    name: '轻咨询服务',
    introduction: [
      '服务流程为',
      '1. 服务以1小时为单位，填写联系方式，并支付费用，支付完成后，HiCTO会尽快联系您，您也可以直接联系HiCTO，我们会帮您安排时间，确定双方都方便的时间。',
      '2. 时间确认后，双方线上沟通或者线下见面。',
      '3. 最后双方确认服务达成。'
    ],
    products: [{
      code: 'B01',
      title: '怎样寻找技术合伙人？',
      bg: require('../assets/product/B01.jpg'),
      consultantsKeys: ['gsh', 'pxl']
    }, {
      code: 'B02',
      title: '如何找到靠谱的外包方？',
      bg: require('../assets/product/B02.jpg'),
      consultantsKeys: ['pxl', 'gsh']
    }, {
      code: 'B03',
      title: '创业初期如何组建技术团队？',
      bg: require('../assets/product/B03.jpg'),
      consultantsKeys: ['gsh', 'pxl']
    }, {
      code: 'B04',
      title: '传统企业如何快速互联网转型？',
      bg: require('../assets/product/B04.jpg'),
      consultantsKeys: ['gsh', 'pxl']
    }, {
      code: 'B05',
      title: '创业初期是一定要开发APP？',
      bg: require('../assets/product/B05.jpg'),
      consultantsKeys: ['pxl', 'gsh']
    }, {
      code: 'B06',
      title: '创业初期怎样解决技术问题？',
      bg: require('../assets/product/B06.jpg'),
      consultantsKeys: ['pxl', 'gsh']
    }, {
      code: 'B07',
      title: '怎样考核技术团队？',
      bg: require('../assets/product/B07.jpg'),
      consultantsKeys: ['gsh', 'pxl']
    }, {
      code: 'B08',
      title: '我的技术合伙人合格吗？',
      bg: require('../assets/product/B08.jpg'),
      consultantsKeys: ['gsh', 'pxl']
    }, {
      code: 'B09',
      title: '技术合伙人给多少股权合适？',
      bg: require('../assets/product/B09.jpg'),
      consultantsKeys: ['pxl', 'gsh']
    }, {
      code: 'B10',
      title: '创业公司如何吸引和激励人才？',
      bg: require('../assets/product/B10.jpg'),
      consultantsKeys: ['gsh', 'pxl']
    }]
  },
  deep_service: {
    key: 'deep_service',
    name: '技术深度服务',
    introduction: [
      '服务流程：',
      '1. 在线提交服务需求，我们会有专人尽快联系您，了解您的具体需求',
      '2. 服务时长为1个工作日，如果系统较大，则需要更多时间。',
      '3. 诊断完成后，会提交诊断报告。'
    ],
    products: [{
      code: 'C01',
      title: '技术诊断',
      bg: require('../assets/product/C01.jpg'),
      consultantsKeys: ['gsh', 'pxl']
    }, {
      code: 'C02',
      title: '第一个产品研发上线',
      bg: require('../assets/product/C02.jpg'),
      consultantsKeys: ['gsh', 'pxl']
    }, {
      code: 'C03',
      title: '第一个产品的开发外包监理',
      bg: require('../assets/product/C03.jpg'),
      consultantsKeys: ['pxl', 'gsh']
    }, {
      code: 'C04',
      title: '技术战略咨询',
      bg: require('../assets/product/C04.jpg'),
      consultantsKeys: ['pxl', 'gsh']
    },]
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