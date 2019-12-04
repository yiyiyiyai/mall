import React, { Component } from 'react';
import {Button,WingBlank,SearchBar} from 'antd-mobile';
import Location from '../components/Main/Location';
import Messages from '../components/Main/Messages';
import Autoplay from '../components/Main/Autoplay';
import Catebtn from '../components/Main/Catebtn';
import Limitedsale from '../components/Main/Limitedsale';
import Featured from '../components/Main/Featured';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'玉米',
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            catebtn:[
                {
                    title:'蔬菜豆制品',
                    img:'https://m.360buyimg.com/n1/s130x130_jfs/t15787/353/109633918/16701/5a8390ef/5a27ae6dNc530b5bb.jpg!q70.jpg.dpg',
                    url:''
                },
                {
                    title:'肉禽蛋',
                    img:'https://m.360buyimg.com/n1/s130x130_jfs/t20845/274/1898979256/38009/6f461017/5b3b2a0cNede9d540.png!q70.jpg.dpg',
                    url:''
                },
                {
                    title:'水产海鲜',
                    img:'https://m.360buyimg.com/n1/s130x130_jfs/t3967/348/1948861683/146448/9bbe570b/589ec74bN911b1ba4.jpg!q70.jpg.dpg',
                    url:''
                },
                {
                    title:'水果',
                    img:'https://m.360buyimg.com/mobilecms/s130x130_jfs/t14251/339/1738489148/26244/792efe55/5a56fd12N458f4fe7.jpg!q70.jpg.dpg',
                    url:''
                },
                {
                    title:'乳品烘焙',
                    img:'https://m.360buyimg.com/n1/s130x130_jfs/t21532/360/764701806/223647/83d30500/5b1799cdN37efd6ec.jpg!q70.jpg.dpg',
                    url:''
                },
                {
                    title:'米面粮油',
                    img:'https://m.360buyimg.com/n1/s130x130_jfs/t3586/286/796506379/82930/1eb37a2a/5813767aN76633141.jpg!q70.jpg.dpg',
                    url:''
                },
                {
                    title:'方便速食',
                    img:'https://m.360buyimg.com/n1/s130x130_jfs/t4543/125/138304129/244584/7a52b06d/58ca527dN6c192927.jpg!q70.jpg.dpg',
                    url:''
                },
                {
                    title:'酒饮零食',
                    img:'https://m.360buyimg.com/n1/s130x130_jfs/t22795/242/864648261/19041/5506280d/5b45a837N22d7244b.jpg!q70.jpg.dpg',
                    url:''
                },
                {
                    title:'火锅来了',
                    img:'https://m.360buyimg.com/n1/s130x130_jfs/t22795/242/864648261/19041/5506280d/5b45a837N22d7244b.jpg!q70.jpg.dpg',
                    url:''
                },
                {
                    title:'邀请有礼',
                    img:'https://m.360buyimg.com/n1/s130x130_jfs/t22795/242/864648261/19041/5506280d/5b45a837N22d7244b.jpg!q70.jpg.dpg',
                    url:''
                }
            ],
            commodity:[
                {
                  img:'http://m.360buyimg.com/mobilecms/s370x370_jfs/t18586/142/1447684320/281393/f0731e53/5aca103dNae9f1605.jpg!q70.jpg.dpg',
                  name:'新鲜菠菜 250g',
                  discountprice:'2.50',
                  price:'4.20',
                },
                {
                    img:'http://m.360buyimg.com/mobilecms/s370x370_jfs/t18586/142/1447684320/281393/f0731e53/5aca103dNae9f1605.jpg!q70.jpg.dpg',
                    name:'4度鲜冰鲜童子鸡切块 600g',
                    discountprice:'19.90',
                    price:'24.90',
                },
                {
                    img:'http://m.360buyimg.com/mobilecms/s370x370_jfs/t18586/142/1447684320/281393/f0731e53/5aca103dNae9f1605.jpg!q70.jpg.dpg',
                    name:'寰球渔市生冻厄瓜多尔白虾',
                    discountprice:'23.90',
                    price:'28.80',
                },
                {
                    img:'http://m.360buyimg.com/mobilecms/s370x370_jfs/t18586/142/1447684320/281393/f0731e53/5aca103dNae9f1605.jpg!q70.jpg.dpg',
                    name:'红心蜜柚1个 1kg以上',
                    discountprice:'6.80',
                    price:'9.90',
                },
                {
                    img:'http://m.360buyimg.com/mobilecms/s370x370_jfs/t18586/142/1447684320/281393/f0731e53/5aca103dNae9f1605.jpg!q70.jpg.dpg',
                    name:'南翔小笼包 180g/袋',
                    discountprice:'7.50',
                    price:'8.80',
                },
                {
                    img:'http://m.360buyimg.com/mobilecms/s370x370_jfs/t18586/142/1447684320/281393/f0731e53/5aca103dNae9f1605.jpg!q70.jpg.dpg',
                    name:'长崎蜂蜜蛋糕 250g/份',
                    discountprice:'10.90',
                    price:'12.90',
                },
                {
                    img:'http://m.360buyimg.com/mobilecms/s370x370_jfs/t18586/142/1447684320/281393/f0731e53/5aca103dNae9f1605.jpg!q70.jpg.dpg',
                    name:'五丰五常稻花香米 5kg/袋',
                    discountprice:'84.90',
                    price:'89.8',
                },
                {
                    img:'http://m.360buyimg.com/mobilecms/s370x370_jfs/t18586/142/1447684320/281393/f0731e53/5aca103dNae9f1605.jpg!q70.jpg.dpg',
                    name:'金沙河原味鸡蛋挂面 900g/袋',
                    discountprice:'9.90',
                    price:'11.90',
                },
                {
                    img:'http://m.360buyimg.com/mobilecms/s370x370_jfs/t18586/142/1447684320/281393/f0731e53/5aca103dNae9f1605.jpg!q70.jpg.dpg',
                    name:'农业土鸡蛋 15枚',
                    discountprice:'16.90',
                    price:'21.90',
                }
            ],
            features:[
                {
                    name:'新品尝鲜',
                    desc:'荠菜水饺 就是好吃',
                    img1:'http://m.360buyimg.com/mobilecms/s370x370_jfs/t18586/142/1447684320/281393/f0731e53/5aca103dNae9f1605.jpg!q70.jpg.dpg',
                    img2:'http://m.360buyimg.com/mobilecms/s370x370_jfs/t18586/142/1447684320/281393/f0731e53/5aca103dNae9f1605.jpg!q70.jpg.dpg',
                },
                {
                    name:'12月爆款',
                    desc:'白米虾 活蹦乱跳送到家',
                    img1:'http://m.360buyimg.com/mobilecms/s370x370_jfs/t18586/142/1447684320/281393/f0731e53/5aca103dNae9f1605.jpg!q70.jpg.dpg',
                    img2:'http://m.360buyimg.com/mobilecms/s370x370_jfs/t18586/142/1447684320/281393/f0731e53/5aca103dNae9f1605.jpg!q70.jpg.dpg',
                },
                {
                    name:'会员专享',
                    desc:'精选600+ 一省再省！',
                    img1:'http://m.360buyimg.com/mobilecms/s370x370_jfs/t18586/142/1447684320/281393/f0731e53/5aca103dNae9f1605.jpg!q70.jpg.dpg',
                    img2:'http://m.360buyimg.com/mobilecms/s370x370_jfs/t18586/142/1447684320/281393/f0731e53/5aca103dNae9f1605.jpg!q70.jpg.dpg',
                },
                {
                    name:'火锅来啦',
                    desc:'放肆开涮',
                    img1:'http://m.360buyimg.com/mobilecms/s370x370_jfs/t18586/142/1447684320/281393/f0731e53/5aca103dNae9f1605.jpg!q70.jpg.dpg',
                    img2:'http://m.360buyimg.com/mobilecms/s370x370_jfs/t18586/142/1447684320/281393/f0731e53/5aca103dNae9f1605.jpg!q70.jpg.dpg',
                },
            ]
        }
    }

    render() {
        return (
            <div className="main-box" >
                {/*定位和消息提醒*/}
                <div className="locationandmessage">
                    {/*定位*/}
                    <Location/>
                    {/*消息提醒*/}
                    <Messages/>
                </div>
                <div className="header">
                    {/*搜索框*/}
                    <WingBlank>
                        <SearchBar placeholder={this.state.value} maxLength={8} />
                    </WingBlank>
                </div>
                <div className="body">
                    {/*轮播图*/}
                    <Autoplay data={this.state.data}/>
                    {/*退换货原则*/}
                    <div className="principle">
                        <p className="desc">最快29分钟到达 0起送费 0配送费 安心退</p>
                    </div>
                    {/*每日推送*/}
                    {/*分类按钮，点击会跳转到分类去*/}
                    <Catebtn data={this.state.catebtn}></Catebtn>
                    {/*限时抢购*/}
                    <Limitedsale data={this.state.commodity}/>
                    {/*特色专区*/}
                    <Featured data={this.state.features}/>
                    {/*商品：猜你喜欢|火锅节|午餐|人气|心选*/}
                </div>
            </div>

        );
    }
}

export default Main;