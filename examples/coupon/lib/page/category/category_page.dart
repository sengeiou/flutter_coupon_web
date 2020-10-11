import 'dart:convert';

import 'package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart';
import 'package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart';
import 'package:flutter_web/cupertino.dart';
import 'package:flutter_web/material.dart';
import 'package:hkbook/ThridLib/flutter_spinkit-4.1.1+1/lib/flutter_spinkit.dart';
import 'package:hkbook/app/constant.dart';
import 'package:hkbook/model/category_model.dart';
import 'package:hkbook/provide/category.dart';

import '../../public.dart';


class XFileAppbar extends StatefulWidget implements PreferredSizeWidget {

  final double contentHeight; //从外部指定高度
  final Widget contentChild;  //从外部指定内容
  final Color statusBarColor; //设置statusbar的颜色

  XFileAppbar({this.contentChild, this.contentHeight, this.statusBarColor}): super();

  @override
  State<StatefulWidget> createState() {
    return new _XFileAppbarState();
  }

  @override
  Size get preferredSize => new Size.fromHeight(contentHeight);
  
}


/**
 * 这里没有直接用SafeArea，而是用Container包装了一层
 * 因为直接用SafeArea，会把顶部的statusBar区域留出空白
 * 外层Container会填充SafeArea，指定外层Container背景色也会覆盖原来SafeArea的颜色
 */
class _XFileAppbarState extends State<XFileAppbar> {
  @override
  Widget build(BuildContext context) {
    return new Container(
        color: widget.statusBarColor,
        child: new SafeArea(
        top: true,
        child: widget.contentChild,
      ),
    );
  }
  
}

class CategoryPage extends StatefulWidget {
  @override
  _CategoryPageState createState() => _CategoryPageState();
}

class _CategoryPageState extends State<CategoryPage> with AutomaticKeepAliveClientMixin{

  List list = [];
  @override
  void initState() {
    print("initState 1");
    super.initState();
    // _getCategory();
  }

  @override
  Widget build(BuildContext context) {
    super.build(context);//必须添加
    print("build 1");
    return Container(
        child: Scaffold(
          appBar: XFileAppbar(
            contentHeight:Screen.navigationBarHeight,
            statusBarColor:Colors.white,
            contentChild: Container(
              child:  InkWell(
                      onTap: (){
                        AppNavigator.pushSearch(context);
                      },
                      child:Container(
                        margin: EdgeInsets.fromLTRB(ScreenUtil().setWidth(30), ScreenUtil().setHeight(15), ScreenUtil().setWidth(30), ScreenUtil().setHeight(15)),
                        height: ScreenUtil().setHeight(60),
                        // margin: EdgeInsets.fromLTRB(15, 4, 10, 0),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(ScreenUtil().setHeight(60)/2),   
                          color: Color(0xfff0f0f0),    
                        ),
                        child: Row(
                          children: <Widget>[
                            Container(
                              padding: EdgeInsets.fromLTRB(ScreenUtil().setWidth(30), 0, ScreenUtil().setWidth(15), 0),
                              height: ScreenUtil().setHeight(40),
                              child: Image.asset('icon_search_gray.png'),
                            ),
                            Text('请输入您要搜索的商品',style: TextStyle(
                              color: Colors.black54,
                              fontSize: ScreenUtil().setSp(28)
                            ),)
                          ],
                        ),
                      ),
                    ),
            ),
          ),
          // appBar: PreferredSize(
          // child: AppBar(
          //     brightness: Brightness.light,
          //     backgroundColor: SQColor.mainBackgroundColor,
          //     elevation: 0,
          //   ),
          // preferredSize: Size.fromHeight(0))
          // ,
          body:
          // Stack(children: <Widget>[
            FutureBuilder(
              future: _getCategory(),
              builder: (context,snapshot){
                if (snapshot.hasData){
                  return _getMain();
                }else{
                  return SpinKitFadingCircle(color: Colors.white);
                }
              }
            ),
            // _buildNavigationBar()
          // ],
          // )
        )
    );
  }


Widget _buildNavigationBar(){
    return Stack(
      children: <Widget>[
         Container(
            padding: EdgeInsets.fromLTRB(0, Screen.topSafeHeight, 0, 0),
            height: Screen.navigationBarHeight,
            color: SQColor.white,
            child: Container(
              // height: ScreenUtil().setHeight(44),
              color: Colors.white,
              child: InkWell(
                      onTap: (){
                        AppNavigator.pushSearch(context);
                      },
                      child:Container(
                        margin: EdgeInsets.fromLTRB(ScreenUtil().setWidth(30), ScreenUtil().setHeight(15), ScreenUtil().setWidth(30), ScreenUtil().setHeight(15)),
                        height: ScreenUtil().setHeight(30),
                        // margin: EdgeInsets.fromLTRB(15, 4, 10, 0),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(ScreenUtil().setHeight(30)/2),   
                          color: Colors.black12,    
                        ),
                      ),
                    ),
            ),
          ),
      ],
    );
  }
  
  Widget _getMain(){
    if (list.length == 0){
      return CupertinoActivityIndicator();
    }
    else{
      return Row(
        children: <Widget>[
            LeftCategoryNav(list),
            RightCategoryNav()
          ],
      );
    }
  }
  Future _getCategory() async {
    var data = json.decode(Categoryjson.toString());
    CategoryModel cdata = CategoryModel.fromJson(data);
    var c = cdata.data[0].subcategories;
    Provide.value<ChildCategory>(context).getChildCategory(c);
    list =  cdata.data;
    return data;
  }

  @override
  // TODO: implement wantKeepAlive
  bool get wantKeepAlive => true;
}

class RightCategoryNav extends StatefulWidget {
  @override
  _RightCategoryNavState createState() => _RightCategoryNavState();
}

class _RightCategoryNavState extends State<RightCategoryNav> {

  // List list = [];
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    var singleChildScrollView = SingleChildScrollView(
        child: _warpList(),
      );
    return Container(
      color: Colors.white,
      width: ScreenUtil().setWidth(570),
      child:singleChildScrollView,
      );
  }

  Widget _warpList(){
    //Provide 页面可以随时变 childGorty就是实例
    return Provide<ChildCategory>(
        builder: (c,child,childGorty){
          if (childGorty.cl.length == 0){
            return Container();
          }
          List<Widget> list = childGorty.cl.map((v){
            return InkWell(
              onTap: (){
                AppNavigator.pushSearchResult(context,v.name);
              },
              child: Container(
                width: ScreenUtil().setWidth(570/2),
                color: Colors.white,
                padding: EdgeInsets.all(0),
                margin: EdgeInsets.only(bottom: 0),
                child: Column(
                  children: <Widget>[
                    Image.network(
                      v.iconUrl ?? '',
                      fit: BoxFit.cover,
                      height: 570/4
                      ),
                    Text(
                      v.name,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(
                        color: Colors.red,
                        fontSize: ScreenUtil().setSp(26),
                      ),
                    ),
                  ],
                ),
              ),
            );
          }).toList();

          //流式布局
          return Wrap(
            alignment:WrapAlignment.start,
            crossAxisAlignment: WrapCrossAlignment.start,
            children: list,
          );
        }
    );
  }

}


class LeftCategoryNav extends StatefulWidget {

  final List list;
  LeftCategoryNav(this.list);

  @override
  _LeftCategoryNavState createState() => _LeftCategoryNavState();
}

class _LeftCategoryNavState extends State<LeftCategoryNav> {

  // List list = [];
  var currentIndex = 0;
  @override
  void initState() {
    // _getCategory();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: ScreenUtil().setWidth(180),
      decoration: BoxDecoration(
        border: Border(
          right: BorderSide(width: 1,color: Colors.black12)
        )
      ),
      child: ListView.builder(
        itemCount: this.widget.list.length,
        itemBuilder: (c,i){
          return _leftInkWll(i);
        },
      ),
    );
  }

  Widget _leftInkWll(index){
    bool isSelect = false;
    isSelect = (index == currentIndex)?true:false;
    return InkWell(
      onTap: (){
          setState(() {
            currentIndex = index;
          });
          var c = this.widget.list[index].subcategories;
          Provide.value<ChildCategory>(context).getChildCategory(c);
      },
      child: Container(
        height: ScreenUtil().setHeight(100),
        padding: EdgeInsets.fromLTRB(ScreenUtil().setWidth(20), ScreenUtil().setHeight(30), 0, 0),
        decoration: BoxDecoration(
          color: isSelect?Colors.pink:Colors.white,
          border: Border(
            bottom: BorderSide(width: 1,color: Colors.black12),
          )
        ),
        child: Text(this.widget.list[index].name,style: TextStyle(
          fontSize: ScreenUtil().setSp(30),
          color: isSelect?Colors.white:Colors.black38,
        ),),
      ),
    );

    
  }


  
}