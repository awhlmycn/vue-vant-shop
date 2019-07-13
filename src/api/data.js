// 打乱数组
function randomsort(a, b) {
    return Math.random()>.5 ? -1 : 1;
    //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}

let imgArr = [
    'http://pic5.nipic.com/20100106/4118657_131626000655_2.jpg',
    'http://pic32.nipic.com/20130828/8786105_145601629000_2.jpg',
    'http://img.sccnn.com/bimg/337/28119.jpg',
    'http://pic30.nipic.com/20130622/13015479_102425791000_2.jpg',
    'http://img.ph.126.net/YvOfZ79f0q1ongyYwh9fdg==/2592384535522075832.jpg'
];

let getRangName = function(){
    return nameArr[ Math.floor( Math.random() * nameArr.length )];
}
let getRangImg = function(){
    return imgArr[ Math.floor( Math.random() * imgArr.length )];
}

let getIndex = function( arr ){
    return arr[ Math.floor( Math.random() * arr.length )];
}
let lele = {
    // 轮播图
    lunbotu(){
        let data = [
            {
                id : 1,
                imgUrl : 'http://b-ssl.duitang.com/uploads/item/201412/25/20141225204152_aYEc3.jpeg'
            },
            {
                id : 2,
                imgUrl : 'http://hbimg.b0.upaiyun.com/8b6e86871a6afbee031a30f0fdb4bc5fbfde0ce22bd42-MvP93v_fw658'
            },
            {
                id : 3,
                imgUrl : 'http://img.mp.itc.cn/upload/20170220/3bde98f642f546be95b2d242994897aa_th.jpg'
            },
            {
                id : 4,
                imgUrl : 'http://pic161.nipic.com/file/20180411/9448607_145554945000_2.jpg'
            },
            {
                id : 5,
                imgUrl : 'http://img.juimg.com/tuku/yulantu/110715/9128-110G514440969.jpg'
            },
        ]
        return data;
    },
    // 新闻列表
    getNewList(){
        let data = [
            {
                id : 1,
                title : '暮景',
                add_time : '2019-07-04 18:10:10',
                zhaiyao : '2019已经过半',
                click : 1,
                imgUrl : 'http://pic29.nipic.com/20130530/12174133_162640398000_2.jpg'
            },
            {
                id : 2,
                title : '童话',
                add_time : '2019-07-04 18:10:10',
                zhaiyao : '2019已经过半',
                click : 1,
                imgUrl : 'http://pic37.nipic.com/20140110/8821914_135241051000_2.jpg'
            },
            {
                id : 3,
                title : '残阳',
                add_time : '2019-07-04 18:10:10',
                zhaiyao : '2019已经过半',
                click : 1,
                imgUrl : 'http://img.sccnn.com/bimg/337/23662.jpg'
            },
            {
                id : 4,
                title : '月缺',
                add_time : '2019-07-04 18:10:10',
                zhaiyao : '2019已经过半',
                click : 1,
                imgUrl : 'http://pic144.nipic.com/file/20171030/20261224_123636695000_2.jpg'
            },
            {
                id : 5,
                title : '月缺',
                add_time : '2019-07-04 18:10:10',
                zhaiyao : '2019已经过半',
                click : 1,
                imgUrl : 'http://5b0988e595225.cdn.sohucs.com/images/20180415/b1920990b5654d53864afeb1c3ce932e.jpeg'
            },
            {
                id : 6,
                title : '月缺',
                add_time : '2019-07-04 18:10:10',
                zhaiyao : '2019已经过半',
                click : 1,
                imgUrl : 'http://pic166.nipic.com/file/20180527/11949215_140246196000_2.jpg'
            },
            {
                id : 7,
                title : '月缺',
                add_time : '2019-07-04 18:10:10',
                zhaiyao : '2019已经过半',
                click : 1,
                imgUrl : 'http://pic19.nipic.com/20120212/9337475_104548381000_2.jpg'
            },
            {
                id : 8,
                title : '月缺',
                add_time : '2019-07-04 18:10:10',
                zhaiyao : '2019已经过半',
                click : 1,
                imgUrl : 'http://pic53.nipic.com/file/20141105/18505720_101842720000_2.jpg'
            },
            {
                id : 9,
                title : '月缺',
                add_time : '2019-07-04 18:10:10',
                zhaiyao : '2019已经过半',
                click : 1,
                imgUrl : 'http://pic170.nipic.com/file/20180625/11949215_162115287000_2.jpg'
            },
            {
                id : 10,
                title : '月缺',
                add_time : '2019-07-04 18:10:10',
                zhaiyao : '2019已经过半',
                click : 1,
                imgUrl : 'http://img02.tooopen.com/images/20151231/tooopen_sy_153310261897.jpg'
            },
            {
                id : 11,
                title : '月缺',
                add_time : '2019-07-04 18:10:10',
                zhaiyao : '2019已经过半',
                click : 1,
                imgUrl : 'http://hbimg.b0.upaiyun.com/28ea2e5cf17173f84ef74064e95627cc3ba75fe627e71-hKNgS4_fw658'
            }
        ];
        return data;
    },
    // 得到新闻详情
    getNewDetail( id ){
        let jsonData = {
            id : 1,
            title : '暮景',
            add_time : '2019-07-04 18:10:10',
            zhaiyao : '2019已经过半',
            click : 1,
            imgUrl : 'http://pic29.nipic.com/20130530/12174133_162640398000_2.jpg',
            content : `《公告》中指出，为社区提供养老、托育、家政等服务的机构，按照以下规定享受税费优惠政策：
                ——提供社区养老、托育、家政服务取得的收入，免征增值税。
                ——提供社区养老、托育、家政服务取得的收入，在计算应纳税所得额时，减按90%计入收入总额。
                ——承受房屋、土地用于提供社区养老、托育、家政服务的，免征契税。
                ——用于提供社区养老、托育、家政服务的房产、土地，免征不动产登记费、耕地开垦费、土地复垦费、土地闲置费；用于提供社区养老、托育、家政服务的建设项目，免征城市基础设施配套费；确因地质条件等原因无法修建防空地下室的，免征防空地下室易地建设费。
                《公告》提到，为社区提供养老、托育、家政等服务的机构自有或其通过承租、无偿使用等方式取得并用于提供社区养老、托育、家政服务的房产、土地，免征房产税、城镇土地使用税。
                《公告》指出，社区是指聚居在一定地域范围内的人们所组成的社会生活共同体，包括城市社区和农村社区。
                为社区提供养老服务的机构，是指在社区依托固定场所设施，采取全托、日托、上门等方式，为社区居民提供养老服务的企业、事业单位和社会组织。社区养老服务是指为老年人提供的生活照料、康复护理、助餐助行、紧急救援、精神慰藉等服务。
                为社区提供托育服务的机构，是指在社区依托固定场所设施，采取全日托、半日托、计时托、临时托等方式，为社区居民提供托育服务的企业、事业单位和社会组织。社区托育服务是指为3周岁(含)以下婴幼儿提供的照料、看护、膳食、保育等服务。
                为社区提供家政服务的机构，是指以家庭为服务对象，为社区居民提供家政服务的企业、事业单位和社会组织。社区家政服务是指进入家庭成员住所或医疗机构为孕产妇、婴幼儿、老人、病人、残疾人提供的照护服务，以及进入家庭成员住所提供的保洁、烹饪等服务。
                此外，《公告》还称，家政服务企业提供家政服务取得的收入，比照《营业税改征增值税试点过渡政策的规定》(财税〔2016〕36号附件)第一条第(三十一)项规定，免征增值税。
                ——与家政服务员、接受家政服务的客户就提供家政服务行为签订三方协议。
                ——向家政服务员发放劳动报酬，并对家政服务员进行培训管理。
                ——通过建立业务管理系统对家政服务员进行登记管理。`
        };
        return jsonData;
    },
    // 得到图片分类
    getCategory(){
        let data = [
            {
                id : 0,
                title : '全部'
            },
            {
                id : 1,
                title : '家居生活'
            },
            {
                id : 2,
                title : '摄影设计'
            },
            {
                id : 3,
                title : '明星美女'
            },
            {
                id : 4,
                title : '古典美女'
            }
        ]
        return data;
    },
    getPhotoList(){
        let data = [];
        let imgs = [
            'http://k.zol-img.com.cn/dcbbs/24715/a24714279_01000.jpg',
            'http://pic163.nipic.com/file/20180426/6083536_224728727037_2.jpg',
            'http://pic8.nipic.com/20100713/1954049_091647155567_2.jpg',
            'http://attachments.gfan.com/forum/201411/20/145145w5u4504gu4th7g0z.jpg',
            'http://pic21.nipic.com/20120514/9740741_213025596000_2.jpg',
            'http://attachments.gfan.net.cn/forum/201501/13/143316yttiiyiuvufcoyjh.jpg',
            'http://t1.mmonly.cc/uploads/tu/201611/86/92.jpg',
            'http://pic41.nipic.com/20140519/18505720_094740582159_2.jpg',
            'http://pic.58pic.com/58pic/11/83/65/00a58PICH85.jpg',
            'http://pic.58pic.com/58pic/17/60/26/82R58PICkeD_1024.jpg'
        ];
        for( let i = 0; i < 10;i++){
            data.push({
                id : i +1,
                title : '美女图画',
                imgUrl : imgs[i],
                zhaiyao: '收集美女图片是一件艰难的事情，其实很多美女，也只是画的美，心里美才是最重要的。'
            });
        }
        data.sort( randomsort );
        return data;
    },
    getPhotoInfoById(){
        let jsonData = {
            id : 1,
            title : '暮景',
            add_time : '2019-07-04 18:10:10',
            zhaiyao : '2019已经过半',
            click : 1,
            imgUrl : 'http://pic29.nipic.com/20130530/12174133_162640398000_2.jpg',
            content : `《公告》中指出，为社区提供养老、托育、家政等服务的机构，按照以下规定享受税费优惠政策：
                ——提供社区养老、托育、家政服务取得的收入，免征增值税。
                ——提供社区养老、托育、家政服务取得的收入，在计算应纳税所得额时，减按90%计入收入总额。
                ——承受房屋、土地用于提供社区养老、托育、家政服务的，免征契税。
                。`
        };
        return jsonData;
    },
    /*
        得到商品列表
        page 得到第几页,每页数量应该固定 此时定义为5
     */
    getShopList( page ){
        let arr = [];
        let nameArr = ['夕阳','歪瓜人','芒果','西红柿','圣骑','小阳','牡丹','梧桐','映月','落阳','残月'];
        for( let i = 0; i < 10; i++ ){
            let jsonData = {
                imgUrl : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562481503761&di=5628584e3d02a3106a8a6728c1d47661&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1905%2F17%2F12589136_11_thumb.jpg',
                title : getIndex( nameArr ),
                now : 899,
                old : 999,
                num : 66,
                tags : '热卖中'
            };
            jsonData.id = i+1;
            jsonData.imgUrl = getRangImg();
            arr.push( jsonData );
        }
        return arr;
    },
    // 得到购物车列表信息
    getCartList(){
        let obj = {};
        let nameArr = ['小米','华为','苹果','oppop', 'vivo'];
        for( let i = 0; i < 3; i++){
            let jsonData = {
                id : 1,
                imgUrl : 'http://5b0988e595225.cdn.sohucs.com/images/20180531/84be3401d548436b840a3fc3b80e10ff.jpeg',
                title : '小米',
                selected : false,
                now : 799,
                old : 999,
                count : 1
            }
            jsonData.id = i +1;
            jsonData.title = getRangName();
            obj[jsonData.id ] = jsonData;
        }
        return obj;
    }
};

module.exports = lele;