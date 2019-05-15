const consultants = {
  gsh: {
    name: '龚世海',
    position: 'HiCTO创始人',
    jobTitle: '上海交通大学硕士、中欧EMBA、前大众点评网CTO',
    introduction: '十年来帮助大众点评建立完整的技术体系， 从几人扩展到六百人的精悍团队。',
    avatar: require('../assets/avatars/gsh.jpg'),
    price: 3600,
    originalPrice: 16000,
  },
  pxl: {
    name: '潘晓良',
    position: 'HiCTO联合创始人',
    jobTitle: '前百姓网CTO & 联合创始人',
    introduction: '从零开始打造百姓网 “小而美”的技术团队 在产品运营、公司文化、人事制度等方面经验丰富',
    avatar: require('../assets/avatars/pxl.jpg'),
    price: 3600,
    originalPrice: 16000,
  },
  mmx: {
    name: '马明兴',
    position: 'HiCTO合伙人',
    jobTitle: '12年互联网研发经验，曾任大众点评技术总监、运满满资深技术总监',
    avatar: require('../assets/avatars/mmx.jpg'),
    price: 1800,
    originalPrice: 5000,
  },
  tr: {
    name: '唐睿',
    position: 'HiCTO技术专家',
    jobTitle: '前百度、EMC、VMware后端工程师、架构师',
    introduction: '12年软件研发经验，负责过多个互联网、大数据项目的后端架构和开发工作，对于后端的各种关键技术如大并发、高可用、海量数据处理等都有丰富的实践经验',
    avatar: require('../assets/avatars/tr.jpg'),
    price: 1800,
    originalPrice: 5000,
  },
  yc: {
    name: '虞骢',
    position: 'HiCTO技术专家',
    jobTitle: '前大众点评架构师，Glow， Musical.ly全栈工程师',
    introduction: '7年互联网行业研发经验，对Web前端，客户端，后端架构，DevOps，音视频等领域都有丰富的实战经验',
    avatar: require('../assets/avatars/yc.jpg'),
    price: 1800,
    originalPrice: 5000,
  },
  hx: {
    name: '何萱',
    position: 'HiCTO投后合伙人',
    jobTitle: '前大众点评平台事业群HR负责人，前1号店人力资源业务合作伙伴，前Randstad顾问',
    introduction: '十年互联网高端人才招聘和组织发展经验',
    avatar: require('../assets/avatars/hx.jpg'),
    price: 1800,
    originalPrice: 5000,
  },
  micasa: {
    name: 'Micasa',
    position: '产品总监',
    jobTitle: '10年商业产品经验，先后就职于过腾讯、美团，曾任产品总监',
    avatar: require('../assets/avatars/icon-female.svg'),
    price: 1800,
    originalPrice: 5000,
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
      '<br/>',
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
      consultantsKeys: ['gsh', 'pxl']
    }, {
      code: 'A02',
      title: '技术总监',
      bg: require('../assets/product/A02.jpg'),
      consultantsKeys: ['mmx']
    }, {
      code: 'A03',
      title: '后端架构',
      bg: require('../assets/product/A03.jpg'),
      consultantsKeys: ['tr', 'mmx', 'yc']
    }, {
      code: 'A04',
      title: '前端架构',
      bg: require('../assets/product/A04.jpg'),
      consultantsKeys: ['yc']
    }, {
      code: 'A05',
      title: '产品经理',
      bg: require('../assets/product/A05.jpg'),
      consultantsKeys: ['micasa']
    }, {
      code: 'A06',
      title: '运营总监',
      bg: require('../assets/product/A06.jpg'),
      consultantsKeys: ['micasa']
    }, {
      code: 'A07',
      title: '第一个工程师',
      bg: require('../assets/product/A07.jpg'),
      consultantsKeys: ['mmx', 'tr', 'yc']
    }]
  },
  consulting: {
    key: 'consulting',
    name: '轻咨询服务',
    introduction: [
      '服务流程为：',
      '1. 在线提交服务需求，我们会帮您安排时间，确定双方都方便的时间。',
      '2. 时间确认后，双方线上沟通或者线下见面。',
      '3. 最后双方确认服务达成。'
    ],
    products: [{
      code: 'B01',
      title: '怎样寻找技术合伙人？',
      bg: require('../assets/product/B01.jpg'),
      consultantsKeys: ['pxl', 'gsh', 'mmx'],
      introduction: ['技术合伙人已经是创业的标准配置，但是优秀的技术合伙人凤毛菱角，我们应该从那些渠道去寻找技术合伙人？又应该从哪些方面去判断一个技术合伙人是否具备能力和素质，可以陪伴企业成长呢？']
    }, {
      code: 'B02',
      title: '如何找到靠谱的外包方？',
      bg: require('../assets/product/B02.jpg'),
      consultantsKeys: ['mmx', 'tr', 'yc'],
      introduction: ['创业初期往往没有自己专职的技术团队，这个时候外包成为选择，但是外包团队鱼龙混杂，质量无法保证。如何找到靠谱的外包团队？如何在过程中做必要的把控？将外包的成功率提高？']
    }, {
      code: 'B03',
      title: '创业初期如何组建技术团队？',
      bg: require('../assets/product/B03.jpg'),
      consultantsKeys: ['mmx', 'tr', 'yc'],
      introduction: ['创业初期对于技术人员的吸引力不是很大，应该以怎样的渠道和方式，寻找哪些特质的人才加入？团队的组成结构应该是怎样的？又可以有产出，成本又能够较低。']
    }, {
      code: 'B04',
      title: '传统企业如何快速互联网转型？',
      bg: require('../assets/product/B04.jpg'),
      consultantsKeys: ['gsh', 'pxl', 'mmx'],
      introduction: ['互联网的下半场被认为是产业互联网，传统产业要么被颠覆，要么就自己革自己的命，传统企业应该怎样转型？哪一条路是成功率最高的道路？需要考虑的因素有哪些？']
    }, {
      code: 'B05',
      title: '创业初期是一定要开发APP？',
      bg: require('../assets/product/B05.jpg'),
      consultantsKeys: ['mmx', 'tr', 'yc'],
      introduction: ['企业初创，APP，小程序，PC端，到底哪个选择是最适合的？这个可能不能一概而论，需要根据自己的业务特点来做出正确的选择，这样才能事半功倍。']
    }, {
      code: 'B06',
      title: '创业初期怎样解决技术问题？',
      bg: require('../assets/product/B06.jpg'),
      consultantsKeys: ['mmx', 'tr', 'yc'],
      introduction: ['创业企业在早期很难请到技术大牛，那遇到问题怎么办呢？有哪些渠道可以找到可以定位和解决问题的人？用怎样的合作方式会更有效？']
    }, {
      code: 'B07',
      title: '怎样考核技术团队？',
      bg: require('../assets/product/B07.jpg'),
      consultantsKeys: ['pxl', 'gsh', 'mmx'],
      introduction: ['初创企业往往很难对技术团队进行一个合理的评价，到底我们的技术团队的产出是属于高的还是低的？和业界比起来到底在什么水准之上？怎样让技术团队发挥他们最大的产能？']
    }, {
      code: 'B08',
      title: '我的技术合伙人合格吗？',
      bg: require('../assets/product/B08.jpg'),
      consultantsKeys: ['pxl', 'gsh', 'mmx'],
      introduction: ['一个优秀的技术合伙人是公司成功的重要保障，但是怎样才能判断自己的合伙人是合格的？是能够支持公司长期发展的？到底他的能力在业界算是什么水平呢？跟我们的专家聊聊就能知道。']
    }, {
      code: 'B09',
      title: '技术合伙人给多少股权合适？',
      bg: require('../assets/product/B09.jpg'),
      consultantsKeys: ['hx'],
      introduction: ['技术合伙人对公司非常重要，但是给多少比例是比较合适的呢？给多了觉得有点亏，给少了怕打不到激励的效果？一般业界是什么情况？还有当然工资大概给多少是合适的呢？']
    }, {
      code: 'B10',
      title: '创业公司如何吸引和激励人才？',
      bg: require('../assets/product/B10.jpg'),
      consultantsKeys: ['hx'],
      introduction: ['21世纪什么最贵？人才！对于现在的创业团队来说，如何能够吸引到高素质的人才，留住他们，激励他们创造最大价值，这是摆在每个创业者面前的问题。看看大厂的人力资源专家们都怎么说？']
    }]
  },
  deep_service: {
    key: 'deep_service',
    name: '技术深度服务',
    products: [{
      code: 'C01',
      title: '技术诊断',
      bg: require('../assets/product/C01.jpg'),
      consultantsKeys: ['gsh', 'pxl'],
      introduction: [
        '创业团队处于快速发展和变化之中，对技术平台提出了更高的要求，必须时刻跟上业务发展的节奏，才能不成为公司发展的瓶颈。我们能说我们的系统肯定没有问题吗？是否需要为你的系统做一次体检呢？发现潜在的问题，让你的系统跑得更快？',
        '服务流程：',
        '1. 在线提交服务需求，我们会有专人尽快联系您，了解您的具体需求',
        '2. 服务时长为1个工作日，如果系统较大，则需要更多时间。',
        '3. 诊断完成后，会提交诊断报告。'
      ]
    }, {
      code: 'C02',
      title: '第一个产品研发上线',
      bg: require('../assets/product/C02.jpg'),
      consultantsKeys: ['gsh', 'mmx'],
      introduction: ['初创团队在一开始的时候没有自己的技术团队，找外包质量又良莠不齐。我们是来自一线互联网公司的技术团队，可以快速提供高质量的研发服务，同时我们会从业务角度出发，帮助梳理产品，同时考虑长期代码的可维护性，帮助快速实现，同时配合人员招聘，做到顺利交接。',
        '服务流程：',
        '1. 在线提交服务需求，我们会有专人尽快联系您，了解您的具体需求',
        '2. 服务时长和报价需要根据项目需求进行调整。',
        '3. 项目启动，跟踪，直至项目结束。'
      ]
    }, {
      code: 'C03',
      title: '第一个产品的开发外包监理',
      bg: require('../assets/product/C03.jpg'),
      consultantsKeys: ['mmx'],
      introduction: [
        '初创企业一开始没有技术团队，第一个版本往往是通过外包来实现，但是外包质量良莠不齐。通过对外包开发的监理，可以来确保项目顺利完工。1.确保需求是合理的，并且把隐形需求显性化；2.确保进度可控，按时交付；3.确保后续可维护；最终保证成功率', '服务流程：',
        '1. 在线提交服务需求，我们会有专人尽快联系您，了解您的具体需求',
        '2. 服务时长和报价需要根据项目需求进行调整。',
        '3. 项目启动，跟踪，直至项目结束。'
      ]
    }, {
      code: 'C04',
      title: '技术战略咨询',
      bg: require('../assets/product/C04.jpg'),
      consultantsKeys: ['pxl', 'gsh'],
      introduction: [
        '对于没有技术基础的创业者来说，技术到底能够做什么，不能做什么，到底业务发展过程中，技术可以助力的点有哪些不是太清楚。您需要一位在互联网技术领域摸爬滚打多年的老朋友来帮你一块儿来想，这项服务是非常具有深度的，我们首先需要了解您的业务特点，然后结合技术发展的趋势，帮您来设计一条适合企业发展的道路。', '服务流程：',
        '1. 在线提交服务需求，我们会有专人尽快联系您，了解您的具体需求',
        '2. 服务时长和报价需要根据项目需求进行调整。',
        '3. 项目启动，跟踪，直至项目结束。'
      ]
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
      var users = product.consultants.slice();
      users.sort(function (a, b) {
        return a.price < b.price
      })
      product.lowestPrice = users[0].price
      if (serviceKey == 'deep_service') {
        product.lowestPrice = 0
      }
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