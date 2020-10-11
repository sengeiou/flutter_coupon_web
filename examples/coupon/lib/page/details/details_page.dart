import 'dart:convert';
// import 'dart:io';

// import 'package:hkbook/ThridLib/url_launcher-5.4.1/lib/url_launcher.dart';
import 'package:flutter_web/cupertino.dart';
import 'package:flutter_web/material.dart';
import 'package:flutter_web/services.dart';
import 'package:hkbook/ThridLib/url_launcher-5.4.2/lib/url_launcher.dart';

import 'package:hkbook/model/counpntbk_model.dart';
import 'package:hkbook/model/coupon_model.dart';
import 'package:hkbook/service/service_method.dart';
import 'package:hkbook/widget/loading/loading_page.dart';
import 'package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart';
import 'package:hkbook/widget/toast.dart';
import '../../public.dart';
import 'details_header.dart';
import 'details_share.dart';

class DetailsPage extends StatefulWidget {

  final MapData model;
  DetailsPage(this.model);

  @override
  DetailsPageState createState() => DetailsPageState(model);
}

class DetailsPageState extends  State<DetailsPage> with SingleTickerProviderStateMixin , AutomaticKeepAliveClientMixin{

  final MapData model;


  String tb = "";
  String tbk = "";
  bool isShareVisiable = false;
  DetailsPageState(this.model);


  @override
  void initState() {
    super.initState();
    setup();

  }

  void setup() async {
    // await SystemChrome.setEnabledSystemUIOverlays([]);
    // 不延迟的话，安卓获取到的topSafeHeight是错的。
    await Future.delayed(const Duration(milliseconds: 100), () {});
    // SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle.dark);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon:Icon(Icons.arrow_back),
          onPressed: (){
            Navigator.pop(context);
          },
        ),
        title: Text(
          '商品详情',
        ),
      ),
      body: Stack(
              children: <Widget>[
                GestureDetector(
                  onTapUp: (TapUpDetails details) {
                  },
                ),
                ListView(
                  children:_detailView(context),
                ),
                // 绝对定位
                Positioned(
                  bottom: 0,
                  left: 0,
                  child: _detailBottom(context),
                ),
                buildShare()
              ],
            ),
    );
  }


  List<Widget> _detailView(BuildContext context){
    List<Widget> list = [DetailsHeader(this.model,(){
      // getTpwd(false,context);
      print('window.open("https://136951866.github.io/coupon/");');
    })];
      if (model.smallImages != null && model.smallImages.string != null){
        List<Widget> nlist = model.smallImages.string.map((v){
          return Image.network(
             v ?? '',
              fit: BoxFit.fill,
      
          );
          // return CachedNetworkImage(
          //                     fit: BoxFit.cover,
          //                     width: Screen.width,
          //                     height: Screen.width,
          //                     imageUrl: v ?? '',
          //                     placeholder: (context, url) => new Image.asset(
          //                             "imgp.png",width:Screen.width,),
          //                     errorWidget: (contextq, url, error) => Icon(Icons.error),
          //                   );
        }).toList();
        list.addAll(nlist);
      }
     var c = Container(
      width: ScreenUtil().setWidth(750),
      height: ScreenUtil().setHeight(100),
      color: Color(0xFFF5F5F5),
     );
     list.add(c);
    return  list;
  }

  buildShare() {
    if (!isShareVisiable) {
      return Container();
    }
    return DetailsShare(
      model: tb,
      onTap: (){
        setState(() {
          this.isShareVisiable = false;
        });
      },
    );
  }


  Widget _detailBottom(BuildContext context){
    return Container(
      width: ScreenUtil().setWidth(750),
      height: ScreenUtil().setHeight(100),
      color: Colors.white,
      child: InkWell(
        onTap:(){
          print('window.open("https://136951866.github.io/coupon/");');
        },
        child: Container(
          color: Color(0xFFFC8F0C),
          width: ScreenUtil().setWidth(750),
          alignment: Alignment.center,
          child: Text(
            '下载APP获取优惠券',
            style: TextStyle(
              color: Colors.white
            ),
          ),
        )
      ),
      // child: Row(
      //   children: <Widget>[
      //     Container(
      //       color: Color(0xFFFC8F0C) ,
      //       child:InkWell(
      //           onTap: (){
      //             getTpwd(true,context);
      //           },
      //           child: Container(
      //             width: ScreenUtil().setWidth(750/2),
      //             alignment: Alignment.center,
      //             child: Text(
      //               '我要分享',
      //               style: TextStyle(
      //                 color: Colors.white
      //               ),
      //             ),
      //           ),
      //       ),
      //     ),
      //     Container(
      //       color: Color(0xFFF24D33) ,
      //       child:InkWell(
      //           onTap: (){
      //             getTpwd(false,context);
      //           },
      //           child: Container(
      //             width: ScreenUtil().setWidth(750/2),
      //             alignment: Alignment.center,
      //             child:Text(
      //               '立即购买',
      //               style: TextStyle(
      //                 color: Colors.white
      //               ),
      //             ),
      //           ),
      //       ),
      //     )
      //   ],
      // ),
    );
  }

  Future<void> getTpwd(bool isShare,BuildContext context) async {
    if (tb.length > 0){
      if (isShare){
        setState(() {
          isShareVisiable = true;
        });
      }else{
        ClipboardData data = new ClipboardData(text:tbk);
        Clipboard.setData(data);
        _openTaobao(tbk);
      }
    }else{
      var logo = model.pictUrl ?? '';
      var url = "https:" + (model.couponShareUrl ?? "");
      var ruel = url + "&pid=" + TAOKAO_PID;
      var text = model.title ?? "";
      var formdata = {"app_key":TAOKAO_APPKEY,"session_key":"hank","method":"taobao.tbk.tpwd.create","partner_id":"top-apitools","format":"json","v":"2.0","sign_method":"md5","timestamp":getTime(),"adzone_id":TAOKAO_ADZONEID,"force_sensitive_param_fuzzy":"true","logo":logo,"url":ruel,"text":text};
      
      LoadingPage loadingPage = LoadingPage(context);     
      loadingPage.show();
      await request('getTpwd',formdata).then((value){
        loadingPage.close();
        if (value == null) return;
        var data = json.decode(value.toString());
        TpwdCreate cdata = TpwdCreate.fromJson(data);
        if (cdata == null){
          ToastHelper.showToast(context, "网络错误,点击重新加载");

          // Fluttertoast.showToast(
          //   msg: "网络错误,点击重新加载",
          //   toastLength: Toast.LENGTH_SHORT,
          //   gravity: ToastGravity.CENTER,
          //   timeInSecForIos: 1,
          //   backgroundColor: Colors.red,
          //   textColor: Colors.white,
          //   fontSize: 16.0
          // );
        }else{
          tb = model.title + "\n" + "[价格]¥" + model.zkFinalPrice + "\n[优惠券]¥" + model.couponAmount + "\n复制这段描述"+cdata.tbkTpwdCreateResponse.data.model+"打开淘宝APP查看来自好友的分享" + "\n下载APP https://136951866.github.io/coupon/ 获取更多链接";
          if(isShare){
            setState(() {
              isShareVisiable = true;
            });
          }else{
            tbk = cdata.tbkTpwdCreateResponse.data.model;
            ClipboardData data = new ClipboardData(text:tbk);
            Clipboard.setData(data);
            Future.delayed(Duration(seconds: 1), (){
                _openTaobao(tbk);
            });
            
          }
        }
      });
     }
  }

  _openTaobao(String tbk) async{                    
    print("---modift");
  }

  @override
  // TODO: implement wantKeepAlive
  bool get wantKeepAlive => true;
  

}