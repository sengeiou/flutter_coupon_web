import 'dart:convert';

import 'package:flutter_web/material.dart';

import 'package:hkbook/model/coupon_model.dart';
import 'package:hkbook/service/service_method.dart';
import 'package:hkbook/widget/toast.dart';
import '../../public.dart';
import 'package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/easy_refresh.dart';
import 'package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart';
class CricelMorePage extends StatefulWidget {
  @override
  CricelMorePageState createState() => CricelMorePageState();
}

class CricelMorePageState extends State<CricelMorePage> with AutomaticKeepAliveClientMixin{
  int page = 2;
  List<MapData> couponList = [];
  Key fotterKey = new Key("fotterKey");

  
  @override
  void initState() {
    super.initState();
    print("initState 2");
    page = 1;
    couponList = [];
    _couponList(page,"3786");
  }

  @override
  Widget build(BuildContext context) {
    super.build(context);//必须添加
    print("build 2");
    return Scaffold(
      appBar: AppBar(
        title: Text("看看"),
      ),
      body: _getMain(),
      backgroundColor: Colors.white,
      resizeToAvoidBottomInset:false
    );
  }

  Widget _getMain(){
     if (couponList.length == 0){
      return Container(
        alignment: Alignment.center,
        child: InkWell(
        child: Container(
          width: Screen.width/3,
          height: Screen.height/3,
          child: Image.asset(
            'empty.png',
          ),
        ),
        onTap: (){
          page = 1;
          couponList = [];
          _couponList(page,"3786");
        },
      ),
      );
    }else{
        print("build 3");
        return  EasyRefresh(
                  child:ListView(
                    children: <Widget>[
                      _warpList(),
                    ],
                  ),
                  onRefresh: () async{
                    page = 1;
                    couponList = [];
                    _couponList(page,"3786");
                  },
                  onLoad: () async{
                    page ++;
                    _couponList(page,"3786");
                  },
                  footer: ClassicalFooter(
                    bgColor: Colors.white,
                    textColor: Colors.pink,
                    infoColor:Colors.pink,
                    noMoreText: '',
                    key:fotterKey,
                  ),
        );  
      }
  }

  Widget _warpList(){
      if (couponList.length > 0){
        List<Widget> list = couponList.map((v){
          return _CricleCell(v);
        }).toList();
        //流式布局
        return Wrap(
          children: list,
        );
      }else{
        return Image.asset(
          'empty.png',
        );
      }
    }
    Widget _CricleCell(MapData m){
      var margin = ScreenUtil().setWidth(15);
      return InkWell(
            onTap: (){
              AppNavigator.pushNovelDetail(context, m);
            },
            child: Container(
              decoration: BoxDecoration(
                // borderRadius: BorderRadius.circular(3),
                border: Border(bottom: BorderSide(
                    width: margin,
                    color: Colors.black12
                  )),
                color: Colors.white,
              ),
              padding: EdgeInsets.all(margin),
              child: Column(
                children: <Widget>[
                  Container(
                    child: Row(
                      children: <Widget>[
                        Image.asset(m.userType == 1 ? "icon_tmall.png":"icon_tao.png"),
                        Container(
                          alignment: Alignment.centerLeft,
                          margin: EdgeInsets.all(margin),
                          child: Column(
                            crossAxisAlignment:CrossAxisAlignment.start,
                            children: <Widget>[
                              Container(
                                child: Text(m.shopTitle,textAlign: TextAlign.left,),
                              ),
                              Container(
                                child: Text(m.couponInfo,
                                textAlign: TextAlign.left,
                                  style: TextStyle(
                                    color: SQColor.primary,
                                    fontSize: ScreenUtil().setSp(28)
                                  ),
                                ),
                              )
                            ],
                          ),
                        )
                      ],
                    ),
                  ),
                  //title
                  Container(
                    alignment: Alignment.centerLeft,
                    padding: EdgeInsets.fromLTRB(0,0 , 0, margin),
                    child: Text(m.title,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    textAlign: TextAlign.left,
                                  style: TextStyle(
                                    color: Color(0xFF333333)
                                  ),
                    ),
                  ),
                  //photo
                  _photoView(m, margin,context),
                  Container(
                    alignment: Alignment.centerLeft,
                    padding: EdgeInsets.fromLTRB(0,margin , 0, 0),
                    child: Text('[价格]¥${m.zkFinalPrice}',
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    textAlign: TextAlign.left,
                                  style: TextStyle(
                                    color: Color(0xFF333333)
                                  ),
                    ),
                  ),
                  Container(
                    alignment: Alignment.centerLeft,
                    padding: EdgeInsets.fromLTRB(0,margin/2 , 0, 0),
                    child: Text('[优惠券]¥${m.couponAmount}',
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    textAlign: TextAlign.left,
                                  style: TextStyle(
                                    color: Color(0xFF333333)
                                  ),
                    ),
                  ),
                  _allContent(context,m),
                  Container(
                    child: InkWell(
                      onTap: (){
                        setState(() {
                          m.isExpand = !m.isExpand;
                        });
                      },
                      child: Container(
                          alignment: Alignment.centerLeft,
                          padding: EdgeInsets.fromLTRB(0,margin/2 , 0, margin),
                          child: Text(m.isExpand ? "收起" : "全文",
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          textAlign: TextAlign.center,
                                        style: TextStyle(
                                          color: SQColor.primary
                                        ),
                          ),
                        ),
                    ),
                  ),
                  Container(
                    padding: EdgeInsets.fromLTRB(0, margin * 2, 0, 0),
                    child: Row(
                      children: <Widget>[

                        Expanded(
                          child: Text(
                            '优惠券已领取:${m.couponTotalCount}',
                            style: TextStyle(
                              color: Colors.black38,
                              fontSize: ScreenUtil().setSp(30)
                            ),
                          ),
                        ),
                        Row(
                          children: <Widget>[
                              Text(
                                '立即领取',
                                style: TextStyle(
                                  color: SQColor.primary,
                                  fontSize: ScreenUtil().setSp(30)
                                ),
                              ),
                              Image.asset('dianji.png',height: ScreenUtil().setHeight(50),)
                            ],
                        ),
                      ],
                    )
                  ),
                  
                ],
              ),
            ),
      );
    }
    Widget _photoView(MapData m,margin,c){
      if (m.smallImages == null || m.smallImages.string == null || m.smallImages.string.length == 0){
        return Container();
      }
      List<Map> nl = [];
      for(int i=0;i<m.smallImages.string.length;i++){
        nl.add({"image":m.smallImages.string[i]});
      }
      return Container(
        child:  GridView.builder(
          shrinkWrap: true,
          physics: NeverScrollableScrollPhysics(),
          padding: EdgeInsets.symmetric(vertical: 0),
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 3,
            crossAxisSpacing: margin,
            mainAxisSpacing: margin
          ),
          itemBuilder: (BuildContext context, int index) {
          return  InkWell(
            child: Image.network(
              m.smallImages.string[index] ?? '',
              fit: BoxFit.fill,
      
            ),
            // child: CachedNetworkImage(
            //     fit: BoxFit.fill,
            //     imageUrl: m.smallImages.string[index] ?? '',
            //     placeholder: (context, url) => new Image.asset(
            //             "imgp.png",width:(Screen.width - margin*4)/3,),
            //     errorWidget: (contextq, url, error) => Icon(Icons.error),
            //   ),
              onTap: (){
                AppNavigator.pushPhoto(c,index,nl);
              },
          );
        },
        itemCount: m.smallImages.string.length,
          // children: m.smallImages.string.map((item){
          //     i++;
          //     return InkWell(
          //       child: CachedNetworkImage(
          //           fit: BoxFit.fill,
          //           imageUrl: item ?? '',
          //           placeholder: (context, url) => new Image.asset(
          //                   "imgp.png",width:(Screen.width - margin*4)/3,),
          //           errorWidget: (contextq, url, error) => Icon(Icons.error),
          //         ),
          //         onTap: (){
          //           AppNavigator.pushPhoto(c,0,nl);
          //         },
          //     );
          // }).toList(),
        ),
      );
    }

    
    Widget _allContent(BuildContext context, MapData m){
      if (m.isExpand){
        return Container(
              alignment: Alignment.centerLeft,
              // padding: EdgeInsets.fromLTRB(0,margin/2 , 0, margin/2),
              child: Text(m.title,
              // maxLines: 1,
              // overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.left,
                            style: TextStyle(
                              color: Color(0xFF333333)
                            ),
              ),
            );
        return Row(
          children: <Widget>[
            Container(
              alignment: Alignment.centerLeft,
              // padding: EdgeInsets.fromLTRB(0,margin/2 , 0, margin/2),
              child: Text(m.title,
              // maxLines: 1,
              // overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.left,
                            style: TextStyle(
                              color: Color(0xFF333333)
                            ),
              ),
            ),
            InkWell(
              onTap: (){
                AppNavigator.pushNovelDetail(context, m);
              },
              child: Text("宝贝详情",
              // maxLines: 1,
              overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.left,
              style: TextStyle(
                color: SQColor.primary,
                decoration: TextDecoration.underline
              ),
              ),
            )
          ],
        );
      }else{
        return Container();
      }
    }

    Future<void> _couponList(page,materiaqlId) async {
      var formdata = {"app_key":TAOKAO_APPKEY,"session_key":"hank","method":"taobao.tbk.dg.material.optional","partner_id":"top-apitools","format":"json","v":"2.0","sign_method":"md5","timestamp":getTime(),"adzone_id":TAOKAO_ADZONEID,"force_sensitive_param_fuzzy":"true","page_no":"${page}","has_coupon":"true","cat":"0","page_size":"10","material_id":materiaqlId};
      await request('couponList', formdata).then((value){
        if (value == null) return;
        var data = json.decode(value.toString());
        CounponModel cdata = CounponModel.fromJson(data);
        if (cdata == null){
          ToastHelper.showToast(context, "网络错误,点击重新加载");

        }else{
          setState(() {
          couponList.addAll(cdata.tbkDgMaterialOptionalResponse.resultList.mapData);
        });
        }
        
      }); 
    }

  @override
  // TODO: implement wantKeepAlive
  bool get wantKeepAlive => true;


  }