import 'dart:convert';

import 'package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart';
import 'package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart';
import 'package:flutter_web/material.dart';
// import 'package:flutter_screenutil/flutter_screenutil.dart';
// import 'package:fluttertoast/fluttertoast.dart';
import 'package:hkbook/page/category/recomend.dart';
import 'package:hkbook/page/category/search_card.dart';
import 'package:hkbook/page/category/search_suggest_page.dart';
import 'package:hkbook/provide/search_history.dart';
import 'package:hkbook/service/service_method.dart';
// import 'package:provide/provide.dart';

import '../../public.dart';
import 'package:hkbook/ThridLib/http-0.12.0+4/lib/http.dart' as http;

class SearchGoodsPage extends StatefulWidget {
  final String keywords;

  const SearchGoodsPage({Key key, this.keywords}) : super(key: key);

  @override
  _SearchGoodsPageState createState() => _SearchGoodsPageState();
}

class _SearchGoodsPageState extends State<SearchGoodsPage> {
  // List _tabsTitle = ['全部', '天猫', '店铺'];
  List<String> recomendWords = [];
  TextEditingController _keywordsTextEditingController = TextEditingController();

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    _keywordsTextEditingController.text = widget.keywords;

    if (widget.keywords != null) {
      seachTxtChanged(widget.keywords);
    }
  }

  @override
  Widget build(BuildContext context) {
    // return Container(
    //   color: Colors.red,
    // );
    return Scaffold(
      backgroundColor: SQColor.mainBackgroundColor,
      appBar: PreferredSize(
          child: AppBar(
            brightness: Brightness.light,
            backgroundColor: SQColor.mainBackgroundColor,
            elevation: 0,
//              forceElevated: false, //是否显示阴影
          ),
          preferredSize: Size.fromHeight(0)),
          body:  Column(
            children: <Widget>[
              Row(
                children: <Widget>[
                  SizedBox(
                    width: 8,
                  ),
                  Expanded(
                    flex: 1,
                    child: SearchCardWidget(
                      elevation: 0,
                      autofocus: true,
                      textEditingController: _keywordsTextEditingController,
                      isShowLeading: false,
                      hintText: '请输入您要搜索的商品',
                      onSubmitted: (value) {
                        Provide.value<HistoryProvide>(context).save(value);
                        AppNavigator.pushSearchResult(context,value);
                      },
                      onChanged: (value) {
                        seachTxtChanged(value);
                      },
                    ),
                  ),
                  Container(
                    alignment: Alignment.center,
                    width: ScreenUtil().setWidth(80),
                    child: GestureDetector(
                      child: Text(
                        '取消',
                        style: TextStyle(fontSize:ScreenUtil().setSp(30)),
                      ),
                      onTap: () {
                        Navigator.pop(context);
                      },
                    ),
                  ),
                  
                  SizedBox(
                    width: 8,
                  ),
                ],
              ),
              Expanded(
                  child: (recomendWords.length == 0
                      ? _buildContentWidget()
                      : RecomendListWidget(recomendWords, onItemTap: (value) {
                          Provide.value<HistoryProvide>(context).save(value);
                          AppNavigator.pushSearchResult(context,value);
                        })
                  )
              )
            ],
          ),
      // body: DefaultTabController(
      //     length: 3,
      //     initialIndex: 0,
      //     child: Column(
      //       children: <Widget>[
      //         Row(
      //           children: <Widget>[
      //             SizedBox(
      //               width: 8,
      //             ),
      //             Expanded(
      //               flex: 1,
      //               child: SearchCardWidget(
      //                 elevation: 0,
      //                 autofocus: true,
      //                 textEditingController: _keywordsTextEditingController,
      //                 isShowLeading: false,
      //                 onSubmitted: (value) {
      //                   //NavigatorUtils.gotoSearchGoodsResultPage(context, value);
      //                 },
      //                 onChanged: (value) {
      //                   seachTxtChanged(value);
      //                 },
      //               ),
      //             ),
      //             GestureDetector(
      //               child: Text(
      //                 '取消',
      //                 style: TextStyle(fontSize: 13),
      //               ),
      //               onTap: () {
      //                 Navigator.pop(context);
      //               },
      //             ),
      //             SizedBox(
      //               width: 8,
      //             ),
      //           ],
      //         ),
      //         Expanded(
      //             child: (recomendWords.length == 0
      //                 ? _buildContentWidget()
      //                 : RecomendListWidget(recomendWords, onItemTap: (value) {
      //                     // NavigatorUtils.gotoSearchGoodsResultPage(context, value);
      //                   })))
      //       ],
      //     )),
    );
  }

  Widget _buildContentWidget() {
    return Column(
      children: <Widget>[
        SizedBox(
          height: 8,
        ),
        Expanded(
          child: SearchSuggestPage(),
        )
        // SearchSuggestPage(),
//         TabBar(
// //          controller: widget.tabController,
//             indicatorColor: Color(0xFFfe5100),
//             indicatorSize: TabBarIndicatorSize.label,
//             isScrollable: true,
// //          labelColor: KColorConstant.themeColor,
//             labelColor: Color(0xFFfe5100),
//             unselectedLabelColor: Colors.black,
// //          labelPadding: EdgeInsets.only(left: (ScreenUtil.screenWidth-30*3)/4),
//             labelPadding: EdgeInsets.only(left: 40, right: 40),
//             labelStyle: TextStyle(fontSize: 12),
//             onTap: (i) {
// //            _selectedIndex = i;
// //
// //            setState(() {});
//             },
//             tabs: _tabsTitle
//                 .map((i) => Text(
//                       i,
//                       style: TextStyle(fontSize: 15),
//                     ))
//                 .toList()),
//         SizedBox(
//           height: 8,
//         ),
//         Expanded(
//             child: TabBarView(
//           children: <Widget>[
//             SearchSuggestPage(),
//             SearchSuggestPage(),
//             SearchSuggestPage(),
//           ],
//         ))
      ],
    );
  }

  void seachTxtChanged(String q) async {
    print(q);
    String url = 'https://suggest.taobao.com/sug';
    await normalRequest(url, {"code":"utf-8","area":"c2c","q":q}).then((res){
        if (res == null) return;
        var datajson = json.decode(res.toString());
        List data = datajson['result'] as List;
        recomendWords = data.map((dynamic i) {
          List item = i as List;
          return item[0] as String;
        }).toList();
        setState(() {});
    });
  }


}
