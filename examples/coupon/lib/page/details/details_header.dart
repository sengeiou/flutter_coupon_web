
import 'package:flutter_web/material.dart';
import 'package:hkbook/model/coupon_model.dart';
import 'package:hkbook/public.dart';

import 'package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart';

class DetailsHeader extends StatelessWidget {

  final MapData model;
  final VoidCallback onTap;

  DetailsHeader(this.model,this.onTap);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: <Widget>[
          Container(
            width: Screen.width,
            height: Screen.width,
            child: Image.network(
                    model.pictUrl ?? '',
                      fit: BoxFit.cover,
                      ),
          ),
          Container(
            margin: EdgeInsets.all(ScreenUtil().setWidth(10)),
            child: Text(
              model.title,
              style: TextStyle(
                color: Color(0xFF333333),
                fontSize: ScreenUtil().setSp(30)
              ),
            ),
          ),
          Container(
            margin: EdgeInsets.all(ScreenUtil().setWidth(10)),
            child: Row(
              children: <Widget>[
                Image.asset(model.userType == 1 ? "icon_tmall.png":"icon_tao.png"),
                Container(
                  padding: EdgeInsets.only(left: 5),
                  child: Text(
                    "¥${model.zkFinalPrice}",
                    style: TextStyle(
                      color: Color(0xFFFF88A4),
                      fontSize: ScreenUtil().setSp(40)
                    ),
                  ),
                ),
              ],
            ),
          ),
          Container(
              margin: EdgeInsets.all(ScreenUtil().setWidth(10)),
              width: ScreenUtil().setWidth(750 - 20),
              child:Stack(
                children: <Widget>[
                  Image.asset('yungdmuwsgjudbb.png'),
                  Positioned(
                    left: 0,
                    top: 10,
                    child: Row(
                      children: <Widget>[
                        Column(
                          children: <Widget>[
                            Container(
                              margin:EdgeInsets.only(top: ScreenUtil().setHeight(15)),
                              alignment: Alignment.center,
                              width: ScreenUtil().setWidth(750 - 200),
                              child: Text('${model.couponAmount}元券',
                              style: TextStyle(
                                color: Colors.white
                              ),),
                            ),
                            Container(
                              margin:EdgeInsets.only(top: ScreenUtil().setHeight(5)),
                              alignment: Alignment.center,
                              width: ScreenUtil().setWidth(750 - 180),
                              child: Text('有效期:${model.couponStartTime}~${model.couponEndTime}',
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: ScreenUtil().setSp(22)
                              ),),
                            ),
                          ],
                        ),
                        InkWell(
                          child: Container(
                          margin:EdgeInsets.only(top: ScreenUtil().setHeight(25)),
                          child: Text(
                              "立即领取",
                              style: TextStyle(
                                color: Colors.white
                              ),
                            ),
                            alignment: Alignment.center,
                          ),
                          onTap: (){
                            onTap();
                          },
                        )
                      ],
                    ),
                  )
                ],
              ) 
            ),
            Container(
              color: Colors.white,
              padding: EdgeInsets.all(ScreenUtil().setHeight(20)),
              width:  ScreenUtil().setWidth(750 - 20),
              child: Text(
                '宝贝详情',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: ScreenUtil().setSp(32),
                ),
              ),
            )
        ],
      ),
    );
  }
}