import 'package:flutter_web/material.dart';
import 'package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart';
import 'package:hkbook/model/coupon_model.dart';
import 'package:hkbook/public.dart';
import 'package:hkbook/widget/marquee/ace_marquee.dart';

class HomeHeader extends StatelessWidget {


  final List<MapData> couponList;
  HomeHeader(this.couponList);

  var funcImageA = ["http://img01.liwushuo.com/image/150626/4q7omzsaj.png-pw144", "http://img03.liwushuo.com/image/150615/qzd06srrt.png-pw144", "http://img01.liwushuo.com/image/150615/r8ck3dd11.png-pw144", "http://img02.liwushuo.com/image/150615/cjx5ewf8a.png-pw144", "http://img02.liwushuo.com/image/150615/mwblar564.png-pw144", "http://img02.liwushuo.com/image/150615/3twtwf7a5.png-pw144", "http://img03.liwushuo.com/image/150615/np4eyslm9.png-pw144", "http://img02.liwushuo.com/image/150615/jq6zajwvy.png-pw144"];
  var funcTitieA = ["底妆", "美妆工具", "美甲", "彩妆套装", "洁面", "乳液/面霜", "精华", "防晒"];
  var announceMentArr = ["好多人不知道的淘宝购物秘诀","精选好物尽在淘优惠券", "领劵即可在淘宝下单,购买省钱"];
  var titleC = [Color(0xFF982EFF), Color(0xFFF93838), Color(0xFFFF6812), Color(0xFF0EB9B0)];
  var subTitleA = ["即时好货疯狂抢", "白菜价格买好货", "流行势力最前沿", "低价享受高品质生活"];
  var image1A = ["http://hank.image.alimmdn.com/tbCoupon/b1.png", "http://hank.image.alimmdn.com/tbCoupon/t1.png", "http://hank.image.alimmdn.com/tbCoupon/c1.png", "http://hank.image.alimmdn.com/tbCoupon/91.png"];
  var image2A = ["http://hank.image.alimmdn.com/tbCoupon/b2.png", "http://hank.image.alimmdn.com/tbCoupon/t2.png", "http://hank.image.alimmdn.com/tbCoupon/c2.png", "http://hank.image.alimmdn.com/tbCoupon/92.png"];
  var url = ["http://img02.liwushuo.com/image/150615/v65bdnets.png-pw144","http://img02.liwushuo.com/image/150615/1mlvwwz03.png-pw144","http://img02.liwushuo.com/image/150615/w01wjnzql.png-pw144","http://img03.liwushuo.com/image/150615/gc3d24sx9.png-pw144","http://img03.liwushuo.com/image/150615/cw21m8c10.png-pw144","http://img01.liwushuo.com/image/150312/ouiup1wr8.png-pw144"];
  var urlIcom = ['home_adv_icon_ziying.png','home_adv_icon_remai.png','home_adv_icon_haohuo.png','home_adv_icon_youhuiquan.png'];
  var urlTitle = ['人气爆款','超值特惠','时尚潮流','9块9包邮'];
  var masterKey = ["4092", "4094", "4093", "0000"];
  // pushMaterPage
  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        _fliterView(context),
        _announView(),
        _gridOneView(context),
        _gridTowView(context),
        _chuxiaoView(context)
      ],
    );
  }



  Widget _chuxiaoView(BuildContext context){
    if (couponList.length == 0){
      return  Container(
        height: ScreenUtil().setHeight(10),
        width: Screen.width
      );
    }
    return Container(
      // color: Color(0xFFF3F3F3),
      height: ScreenUtil().setHeight(380),
      margin: EdgeInsets.fromLTRB(ScreenUtil().setWidth(15), ScreenUtil().setHeight(10), ScreenUtil().setWidth(15),  ScreenUtil().setHeight(10)),
      width: ScreenUtil().setWidth(750),
      // height: ScreenUtil().setHeight(400),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(4),   
        color: Colors.white,    
      ),
      child: Column(
        children: <Widget>[
          Column(
            children: <Widget>[
              Container(
                alignment: Alignment.centerLeft,
                width: ScreenUtil().setWidth(750-30),
                height: ScreenUtil().setHeight(80),
                padding: EdgeInsets.only(left: ScreenUtil().setWidth(15)),
                // padding: EdgeInsets.fromLTRB(ScreenUtil().setWidth(15), ScreenUtil().setHeight(10), ScreenUtil().setWidth(15),  ScreenUtil().setHeight(10)),
                child: Row(
                  children: <Widget>[
                    Text(
                      '促销惠',
                      textAlign: TextAlign.center,
                      style:TextStyle(
                      fontSize: ScreenUtil().setSp(33),
                      fontWeight: FontWeight.bold
                    )),
                    Container(
                      margin: EdgeInsets.only(left: 5),
                      child: Text('特惠商品精品不断',textAlign: TextAlign.center,style:TextStyle(
                        fontSize: ScreenUtil().setSp(25),
                        color: Colors.black54
                      )),
                    )
                  ],
                ),
                decoration: BoxDecoration(
                  border: Border(bottom: BorderSide(
                    width: 1,
                    color: Colors.black12
                  ))
                ),
              ),
     
              
              Container(
                width: ScreenUtil().setWidth(750-30),
                height: ScreenUtil().setHeight(300),
                decoration: BoxDecoration(
                  border: Border(bottom: BorderSide(
                    width: 1,
                    color: Colors.black12
                  ))
                ),
                child: ListView.builder(
                  shrinkWrap:true,
                  scrollDirection: Axis.horizontal,
                  itemCount: url.length,
                  itemBuilder: (context,i){
                      return InkWell(
                        onTap: (){
                          AppNavigator.pushNovelDetail(context, couponList[i]);
                        },
                        child: Container(
                          padding: EdgeInsets.fromLTRB(10, ScreenUtil().setHeight(15), 10, ScreenUtil().setHeight(10)),
                          child: Column(
                            children: <Widget>[
                              ClipOval(
                                child:Image.network(couponList[i].pictUrl ?? '',fit: BoxFit.cover,width: ScreenUtil().setHeight(150),height: ScreenUtil().setHeight(150))
                                //  CachedNetworkImage(
                                //   fit: BoxFit.cover,
                                //   width: ScreenUtil().setHeight(150),
                                //   height: ScreenUtil().setHeight(150),
                                //   imageUrl: couponList[i].pictUrl ?? '',
                                //   placeholder: (context, url) => new Image.asset(
                                //           "img/imgp.png",width:ScreenUtil().setHeight(150),),
                                //   errorWidget: (contextq, url, error) => Icon(Icons.error),
                                // )
                              ),
                              Container(
                                padding: EdgeInsets.only(top: ScreenUtil().setHeight(2)),
                                width: ScreenUtil().setHeight(150),
                                height: ScreenUtil().setHeight(40),
                                child: Text(
                                  couponList[i].title ?? '',
                                  maxLines:1,
                                  style: TextStyle(
                                    color: Color(0xFF333333),
                                    fontSize: ScreenUtil().setSp(26),
                                  ),
                                ),
                              ),
                              Container(
                                padding: EdgeInsets.only(top: ScreenUtil().setHeight(2)),
                                width: ScreenUtil().setHeight(150),
                                height: ScreenUtil().setHeight(40),
                                child: Text(
                                  '原价:¥${couponList[i].zkFinalPrice}',
                                  maxLines:1,
                                  style: TextStyle(
                                    color: SQColor.primary,
                                    fontSize: ScreenUtil().setSp(26),
                                  ),
                                ),
                              ),
                              Container(
                                // width: ScreenUtil().setWidth(50),
                                // height: ScreenUtil().setWidth(45),
                                width: ScreenUtil().setHeight(150),
                                // padding: EdgeInsets.fromLTRB(8, 0, 8, 0),
                                // margin:  EdgeInsets.fromLTRB(5, ScreenUtil().setHeight(5), 5, 0),
                                alignment: Alignment.center,
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(3),
                                  // color: SQColor.primary,
                                  border: Border.all(width: 1,color: SQColor.primary)
                                ),
                                child:  Text(
                                  '¥${couponList[i].couponAmount}元券',
                                    style: TextStyle(
                                    color: SQColor.primary,
                                    fontSize: ScreenUtil().setSp(25)
                                  ),  
                                ),
                              )
                            ],
                          ),
                      ),
                    );
                  },
                )
              ),
            ],
          )
        ],
      )
      );
  }

  Widget _gridOneView(BuildContext context){
    return Container(
      color: Color(0xFFF3F3F3),
      margin: EdgeInsets.fromLTRB(ScreenUtil().setWidth(15), 0, ScreenUtil().setWidth(15), 5),
      width: ScreenUtil().setWidth(750),
      child: Row(
        children: <Widget>[
          _gridContentView(0,context),
          _gridContentView(1,context),
        ],
      ),
    );
  }

   Widget _gridTowView(BuildContext context){
    return Container(
      color: Color(0xFFF3F3F3),
      margin: EdgeInsets.fromLTRB(ScreenUtil().setWidth(15), 0, ScreenUtil().setWidth(15), 5),
      width: ScreenUtil().setWidth(750),
      child: Row(
        children: <Widget>[
          _gridContentView(2,context),
          _gridContentView(3,context),
        ],
      ),
    );
  }

  Widget _gridContentView(index,BuildContext c){
    return Container(
      height: ScreenUtil().setHeight(240),
      width: ScreenUtil().setWidth((750-35)/2),
      // color: Colors.white,
      margin: index%2!=0?EdgeInsets.only(left:ScreenUtil().setWidth(5)):EdgeInsets.only(left:0),
      padding: EdgeInsets.all(5),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(4),   
        color: Colors.white,    
      ),
      child: InkWell(
        child: Column(
        children: <Widget>[
            Row(
              children: <Widget>[
                Container(
                  width: ScreenUtil().setWidth(30),
                  child: Image.asset(urlIcom[index]),
                ),
                Container(
                  padding: EdgeInsets.fromLTRB(5, 5, 0, 0),
                  child: Text(
                    urlTitle[index],
                    style: TextStyle(
                      color: titleC[index],
                      fontSize: ScreenUtil().setSp(30)
                    ),
                  ),
                )
              ],
            ),
            Container(
              alignment: Alignment.topLeft,
              child: Text(
                    subTitleA[index],
                    textAlign: TextAlign.left,
                    style: TextStyle(
                      color: Colors.black54,
                      fontSize: ScreenUtil().setSp(20)
                    ),
                  ),
            ),
            Container(
              child: Row(
                children: <Widget>[
                  Container(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(4),   
                      color: Colors.white,    
                    ),
                    child:Image.network(image1A[index] ?? '',fit: BoxFit.cover,width: ScreenUtil().setHeight(130))


                    // CachedNetworkImage(
                    //   width: ScreenUtil().setWidth(130),
                    //   fit: BoxFit.cover,
                    //   imageUrl: image1A[index] ?? '',
                    //   placeholder: (context, url) => new Image.asset(
                    //           "img/imgp.png",width:ScreenUtil().setWidth(130),),
                    //   errorWidget: (context, url, error) => Icon(Icons.error),
                    // ),
                  ),
                  Container(
                    margin: EdgeInsets.only(left: ScreenUtil().setWidth(30)),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(4),   
                      color: Colors.white,    
                    ),
                    child:Image.network(image2A[index] ?? '',fit: BoxFit.cover,width: ScreenUtil().setHeight(130))
                    //   CachedNetworkImage(
                    //   width: ScreenUtil().setWidth(130),
                    //   fit: BoxFit.cover,
                    //   imageUrl: image2A[index] ?? '',
                    //   placeholder: (context, url) => new Image.asset(
                    //           "img/imgp.png",width:ScreenUtil().setWidth(130),),
                    //   errorWidget: (context, url, error) => Icon(Icons.error),
                    // ),
                  )
                ],
              ),
            )
        ],
      ),
      onTap: (){
        AppNavigator.pushMaterPage(c, masterKey[index] ?? "", urlTitle[index] ?? "");
      },
      ),
    );
  }

  Widget _announView(){
    return Container(
      width: ScreenUtil().setWidth(750),
      height: ScreenUtil().setHeight(60),
      margin: EdgeInsets.fromLTRB(10, 10, 10, 10),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(ScreenUtil().setHeight(55/2)),   
        color: Colors.white,    
      ),
      child: Row(
        children: <Widget>[
          _marqueeWid02('推荐', announceMentArr, AxisDirection.down),
        ],
      ),
    );

  }

  Widget _marqueeWid02(recStr, list, direction) {
    List<Widget> _wList = List<Widget>();
    for (int i = 0; i < list.length; i++) {
      _wList.add(Container(
          width: ScreenUtil().setWidth(750 - 30 - 150 - 10 - 110),
          height: ScreenUtil().setHeight(50),
          alignment: Alignment.centerLeft,
          child: Text(list[i])));
    }
    return Container(
        height: ScreenUtil().setHeight(60),
        child: Row(children: <Widget>[
          Container(
              padding: EdgeInsets.only(left: 10),
              width: ScreenUtil().setWidth(150),
              child: Image.asset('home_gg_t.png')
          ),
          Container(
              width: 1,
              height: ScreenUtil().setHeight(20),
              color: Colors.grey,
              margin: EdgeInsets.symmetric(horizontal: 20)),
          ACEMarquee(
              children: _wList,
              direction: direction,
              duration: Duration(milliseconds: 2000),
              onItemTap: (index) {

              },
          )
        ]));
  }


  Widget _fliterView(BuildContext context){
    return Container(
      height: ScreenUtil().setHeight(150),
      child: ListView.builder(
        scrollDirection: Axis.horizontal,
        itemCount: url.length,
        itemBuilder: (c,i){
            return InkWell(
              onTap: (){
                AppNavigator.pushSearchResult(context,funcTitieA[i] ?? '');
              },
              child:  Container(
                margin: EdgeInsets.fromLTRB(10, ScreenUtil().setHeight(15), 10, ScreenUtil().setHeight(10)),
                child: Column(
                  children: <Widget>[
                    ClipOval(
                    child:Image.network(url[i] ?? '',fit: BoxFit.cover,width: ScreenUtil().setHeight(80), height:  ScreenUtil().setHeight(80),)
                      //  CachedNetworkImage(
                      //   fit: BoxFit.cover,
                      //   width: ScreenUtil().setHeight(80),
                      //   height:  ScreenUtil().setHeight(80),
                      //   imageUrl: url[i] ?? '',
                      //   placeholder: (context, url) => new Image.asset(
                      //           "img/imgp.png",width: ScreenUtil().setHeight(80),),
                      //   errorWidget: (context, url, error) => Icon(Icons.error),
                      // )
                    ),
                    Container(
                      margin: EdgeInsets.only(top: ScreenUtil().setHeight(2)),
                      child: Text(
                        funcTitieA[i] ?? '',
                        style: TextStyle(
                          color: Color(0xFF333333),
                          fontSize: ScreenUtil().setSp(26),
                        ),
                      ),
                    )
                  ],
                ),
              ),
            );
        },
      )
    );
  }
}