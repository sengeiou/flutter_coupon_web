import 'package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart';
import 'package:flutter_web/material.dart';
import 'package:hkbook/app/app_navigator.dart';
import 'package:hkbook/provide/search_history.dart';

import 'package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart';

class SearchSuggestPage extends StatefulWidget {
  @override
  _SearchSuggestPageState createState() => _SearchSuggestPageState();
}

class _SearchSuggestPageState extends State<SearchSuggestPage> {
  bool _isHideSearchFind = true;
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
          borderRadius: BorderRadius.only(topLeft: Radius.circular(16), topRight: Radius.circular(16)),
          color: Colors.white),
//      color: Colors.red,
      child: Column(
        children: <Widget>[
          SizedBox(
            height: 30,
          ),
          Row(
            children: <Widget>[
              SizedBox(
                width: 12,
              ),
              Expanded(
                child: Text(
                  '历史搜索',
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12),
                ),
              ),
              Container(
                child: InkWell(
                  child: Row(
                    children: <Widget>[
                      Icon(
                        Icons.delete_forever,
                        color: Colors.grey,
                        size: 16,
                        ),
                        Text(
                          '清空记录',
                          style: TextStyle(
                            color: Colors.grey,
                            fontSize: ScreenUtil().setSp(20),
                          ),
                        )
                    ],
                  ),
                  onTap: (){
                    Provide.value<HistoryProvide>(context).remove();
                  },
                ),
              ),
              SizedBox(
                width: 8,
              ),
            ],
          ),
          SizedBox(
            height: 16,
          ),
          FutureBuilder(
             future: _getistorynfo(context),
             builder: (BuildContext context, AsyncSnapshot snapshot) {
               if (snapshot.hasData){
                 return Provide<HistoryProvide>(
                    builder: (ccontext,child,childhistory){
                      return Wrap(
                          direction: Axis.horizontal,
                          alignment: WrapAlignment.start,
                          spacing: 8,
                          runSpacing: 8,
                          children: childhistory.historyList
                              .map((i) => GestureDetector(
                                    onTap: () {
                                      AppNavigator.pushSearchResult(context,i);
                                    },
                                    child: Container(
                                        decoration: BoxDecoration(
                                            color: Color(0xFFf7f8f7),
                                            borderRadius: BorderRadius.circular(13)),
                                        padding: EdgeInsets.symmetric(vertical: 8, horizontal: 12),
                                        child: Text(
                                          i,
                                          style: TextStyle(color: Color(0xFF565757), fontSize: 13),
                                        )),
                                  ))
                              .toList(),
                        );     
                    }
                  );
               }else{
                 return Container();
               }
             }
          ),
          SizedBox(
            height: 30,
          ),
          /*
          Row(
            children: <Widget>[
              SizedBox(
                width: 12,
              ),
              Expanded(
                child: Text(
                  '搜索发现',
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 12),
                ),
              ),
              GestureDetector(
                onTap: () {
                  setState(() {
                    _isHideSearchFind = !_isHideSearchFind;
                  });
                },
                child: Icon(
                  _isHideSearchFind ? Icons.settings : Icons.settings_cell,
                  color: Colors.grey,
                  size: 16,
                ),
              ),
              SizedBox(
                width: 8,
              ),
            ],
          ),
          SizedBox(
            height: 16,
          ),
          
          Offstage(
            offstage: !_isHideSearchFind,
            child: Center(
              child: Text(
                '当前搜索发现已隐藏',
                style: TextStyle(fontSize: 10, color: Colors.grey),
              ),
            ),
          ),
          Expanded(
            /*
            当offstage为true，控件隐藏； 当offstage为false，显示；
    当Offstage不可见的时候，如果child有动画等，需要手动停掉，Offstage并不会停掉动画等操作。
            */
            child: Offstage(
                offstage: _isHideSearchFind,
                child: GridView.count(
                  padding: const EdgeInsets.only(left: 12),
                  crossAxisCount: 2,
                  // 左右间隔
                  crossAxisSpacing: 8,
                  // 上下间隔
                  mainAxisSpacing: 8,
                  reverse: false,
                  scrollDirection: Axis.vertical,
                  controller: ScrollController(
                    initialScrollOffset: 0.0,
                  ),
                  childAspectRatio: 12 / 2,
                  physics: BouncingScrollPhysics(),
                  primary: false,
                  //宽高比 默认1
//            childAspectRatio: 3 / 4,
//          children: searchHintTexts.map((i) {
////            return Container(color: Colors.red,child: Text(i,style: TextStyle(color: Colors.grey),),);
//          }).toList(),
                  children: List.generate(searchHintTexts.length, (index) {
                    return GestureDetector(
                      onTap: () {
                        // NavigatorUtils.gotoSearchGoodsResultPage(context, searchHintTexts[index]);
                      },
                      child: Container(
                        child: Text(
                          searchHintTexts[index],
                          style: TextStyle(fontSize: 13, color: Color(0xFF565757)),
                        ),
                      ),
                    );
                  }, growable: false),
                )),
          )
          */
        ],
      ),
    );
  }

  Future _getistorynfo(BuildContext c) async{
    await  Provide.value<HistoryProvide>(c).getHistory();
    return 'finish';
  }
}
