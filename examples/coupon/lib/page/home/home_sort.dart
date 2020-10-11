import 'dart:convert';

import 'package:flutter_web/material.dart';
import 'package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/easy_refresh.dart';
import 'package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart';
import 'package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/flutter_spinkit.dart';
import 'package:hkbook/model/coupon_model.dart';
import 'package:hkbook/public.dart';
import 'package:hkbook/service/result_data.dart';
import 'package:hkbook/service/service_method.dart';
import 'package:hkbook/widget/toast.dart';


class SearchSortResult<T extends ScrollNotification>  extends StatefulWidget {
  final keywrod;
  // final NotificationListenerCallback<T> onNotification;
  SearchSortResult(this.keywrod);
  @override
  _SearchMasterSortResultState createState() => _SearchMasterSortResultState();
}

class _SearchMasterSortResultState extends State<SearchSortResult> with AutomaticKeepAliveClientMixin<SearchSortResult>, SingleTickerProviderStateMixin{

  int page = 1;
  List<MapData> couponList = [];
  Key fotterKey = new Key("fotterKey");

  // GlobalKey _keyFilter = GlobalKey();
  // GlobalKey _keyDropDownItem = GlobalKey();

  
   @override
  void initState() {
    super.initState();
    page = 1;
    couponList = [];
    if (widget.keywrod == "0000"){
      _couponNIneList(page,this.widget.keywrod,"");
    }else{
      _couponList(page,this.widget.keywrod,"");
    }
    
  }

  @override
  Widget build(BuildContext context) {
    super.build(context);
    return  AnnotatedRegion(
        value: SystemUiOverlayStyle.light,
        child:Center(
      child: NotificationListener<ScrollNotification>(
        child: _getMain(),
        onNotification: (ScrollNotification scrollInfo) =>
            _onScrollNotification(scrollInfo),
      ),
    ));
    
  }

  _onScrollNotification(ScrollNotification scrollInfo) {

  }

  Widget _getMain(){
     if (couponList.length == 0){
      return Container(
        alignment: Alignment.center,
        child: InkWell(
        child: SpinKitFadingCircle(color: SQColor.primary),
        onTap: (){
          page = 1;
          couponList = [];
          if (widget.keywrod == "0000"){
            _couponNIneList(page,this.widget.keywrod,"");
          }else{
            _couponList(page,this.widget.keywrod,"");
          }
        },
      ),
      );
    }else{
      return EasyRefresh(
                  child:ListView(
                    shrinkWrap: true,
                    children: <Widget>[
                      _warpList(),
                    ],
                  ),
                  // onRefresh: () async{
                  //   page = 1;
                  //   couponList = [];
                  //   if (widget.keywrod == "0000"){
                  //     _couponNIneList(page,this.widget.keywrod,"");
                  //   }else{
                  //     _couponList(page,this.widget.keywrod,"");
                  //   }
                  // },
                  onLoad: () async{
                    page ++;
                    if (widget.keywrod == "0000"){
                      _couponNIneList(page,this.widget.keywrod,"");
                    }else{
                      _couponList(page,this.widget.keywrod,"");
                    }
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
          return InkWell(
            onTap: (){
              AppNavigator.pushNovelDetail(context, v);
            },
            child: Container(
              width: ScreenUtil().setWidth(372),
              color: Colors.white,
              padding: EdgeInsets.all(5),
              margin: EdgeInsets.only(bottom: 3),
              child: Column(
                children: <Widget>[
                  Image.network(v.pictUrl ?? '',
                        height: 372/2,
                        ),
                  Text(
                    v.title,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(
                      color: Colors.red,
                      fontSize: ScreenUtil().setSp(26),
                    ),
                  ),
                  Row(
                    children: <Widget>[
                      Text('¥${v.zkFinalPrice}'),
                      Container(
                        // width: ScreenUtil().setWidth(50),
                        // height: ScreenUtil().setWidth(50),
                        padding: EdgeInsets.fromLTRB(8, 0, 8, 0),
                        margin:  EdgeInsets.fromLTRB(5, 0, 5, 0),
                        alignment: Alignment.center,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(3),
                          color: Colors.red,
                        ),
                        child:  Text(
                          '¥${v.couponAmount}元券',
                            style: TextStyle(
                            color: Colors.white,
                          ),  
                        ),
                      )
                    ],
                  )
                ],
              ),
            ),
          );
        }).toList();

        //流式布局
        return Wrap(
          spacing: ScreenUtil().setHeight(3),
          children: list,
        );
      }else{
        return Image.asset(
          'img/empty.png',
        );
      }
    }

    Future<void> _couponList(page,materiaqlId,sort) async {
    var formdata = {"app_key":TAOKAO_APPKEY,"session_key":"hank","method":"taobao.tbk.dg.material.optional","partner_id":"top-apitools","format":"json","v":"2.0","sign_method":"md5","timestamp":getTime(),"adzone_id":TAOKAO_ADZONEID,"force_sensitive_param_fuzzy":"true","page_no":"${page}","has_coupon":"true","cat":"0","page_size":"10","material_id":materiaqlId};
    await request('couponList', formdata).then((value){
        if (value == null) return;
        var data = json.decode(value.toString());
        print(value.toString());
      CounponModel cdata = CounponModel.fromJson(data);
      print(cdata.tbkDgMaterialOptionalResponse.resultList);
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
        setState(() {
        couponList.addAll(cdata.tbkDgMaterialOptionalResponse.resultList.mapData);
      });
      }
      
    }); 
  }

  Future<void> _couponNIneList(page,materiaqlId,sort) async {
    var formdata = {"app_key":TAOKAO_APPKEY,"session_key":"hank","method":"taobao.tbk.dg.material.optional","partner_id":"top-apitools","format":"json","v":"2.0","sign_method":"md5","timestamp":getTime(),"adzone_id":TAOKAO_ADZONEID,"force_sensitive_param_fuzzy":"true","page_no":"${page}","has_coupon":"true","cat":"10,13,16,19,20","page_size":"10","end_price":"10","need_free_shipment":"true"};
    await request('couponList', formdata).then((value){
      ResultData result =  value;
      var data = json.decode(result.data.toString());
      CounponModel cdata = CounponModel.fromJson(data);
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