import 'dart:async';
import 'dart:convert';

import 'package:flutter_web/material.dart';
import 'package:flutter_web/services.dart';
import 'package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart';

import 'package:hkbook/model/coupon_model.dart';
import 'package:hkbook/page/home/tabbar.dart';
import 'package:hkbook/public.dart';

import 'home_banner.dart';
import 'home_header.dart';
import 'home_sort.dart';


class HomeMain extends StatefulWidget {

  final VoidCallback toSort;
  List<MapData> couponList;
  HomeMain(this.toSort,this.couponList);
  @override
  _HomeMainState createState() => _HomeMainState();
}

class _HomeMainState extends State<HomeMain> with AutomaticKeepAliveClientMixin,TickerProviderStateMixin{
    @override
  bool get wantKeepAlive => true;
  ScrollController _scrollViewController;
  GlobalKey _keyFilter = GlobalKey();
  int page = 1;
  
  List<TabModel> _tabModels = [];
  TabController _controller;
  int _currentIndex = 0;
  Size _sizeRed = null;
  double navAlpha = 0;
  double navShow = -Screen.topSafeHeight;
  _afterLayout(_) {
    _getSizes('_keyFilter', _keyFilter);
    _getPositions('_keyFilter', _keyFilter);
  }

  _getSizes(log, GlobalKey globalKey) {
    //获取元素大小:
    RenderBox renderBoxRed = globalKey.currentContext.findRenderObject();
    _sizeRed = renderBoxRed.size;
    setState(() {});
  }

  _getPositions(log, GlobalKey globalKey) {
    RenderBox renderBoxRed = globalKey.currentContext.findRenderObject();
    var positionRed = renderBoxRed.localToGlobal(Offset.zero);
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    SystemChrome.setSystemUIOverlayStyle(SystemUiOverlayStyle(
      statusBarBrightness: Brightness.light,
      statusBarIconBrightness: Brightness.light,
    ));
    _tabModels.add(TabModel(title: '精选', subtitle: '猜你喜欢',keyId:"3756"));
    _tabModels.add(TabModel(title: '家电', subtitle: '居家好手',keyId:"3759"));
    _tabModels.add(TabModel(title: '女装', subtitle: '清新靓丽',keyId:"3767"));
    _tabModels.add(TabModel(title: '美妆', subtitle: '每日美哒',keyId:"3763"));
    _tabModels.add(TabModel(title: '母婴', subtitle: '宝妈必备',keyId:"3760"));
    _tabModels.add(TabModel(title: '食品', subtitle: '好吃推荐',keyId:"3761"));


    _controller = TabController(vsync: this, length:  _tabModels.length);
    _controller.addListener(_handleTabSelection);

    _scrollViewController = ScrollController(initialScrollOffset: 0.0);
    WidgetsBinding.instance.addPostFrameCallback(_afterLayout);
       _scrollViewController.addListener(() {
      var offset = _scrollViewController.offset;
      if (offset < 0) {
        if (navAlpha != 0) {
          setState(() {
            navAlpha = 0;
          });
        }
      } else if (offset < 150) {
        setState(() {
          navAlpha = 1 - (150 - offset) / 150;
        });
      } else if (navAlpha != 1) {
        setState(() {
          navAlpha = 1;
        });
      }
      if (offset >  kToolbarHeight) {
          setState(() {
            navShow = kToolbarHeight;
          });
      }  else  {
        setState(() {
          navShow = -Screen.topSafeHeight;
        });
      }
    });
  }

  _handleTabSelection() {
    setState(() {
      _currentIndex = _controller.index;
    });
  }

  @override
  void dispose() {
    _scrollViewController.dispose();
    // TODO: implement dispose
    super.dispose();
  }

   @override
  Widget build(BuildContext context) {
      super.build(context);
      var v = Column(
      children: <Widget>[
        HomeBanner(),
        HomeHeader(widget.couponList),
        
      ],);
      // return v;
      var body = NestedScrollView(
        controller: _scrollViewController,
        headerSliverBuilder: (BuildContext context, bool boxIsScrolled) {
          return <Widget>[
            SliverAppBar(
              pinned: true,
              floating: true,
              forceElevated: boxIsScrolled,
              backgroundColor: Color(0xFFEEEEEE),
              flexibleSpace: FlexibleSpaceBar(
                collapseMode: CollapseMode.pin,
                background: MediaQuery.removePadding(
                    removeTop: true,
                    context: context,
                    child: ListView(
                          shrinkWrap:true,
                          physics: const NeverScrollableScrollPhysics(),
                          // crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[v],
                    ),
                ),
              ),
              expandedHeight: (_sizeRed == null ? Screen.height : _sizeRed.height)+ScreenUtil().setHeight(100.0),
              bottom: PreferredSize(
                preferredSize: Size(double.infinity, ScreenUtil().setHeight(100)),
                child: GZXTabBarWidget(
                  tabController: _controller,
                  tabModels: _tabModels,
                  currentIndex: _currentIndex,
                ),
              ),
            )
          ];
        },
        body: TabBarView(controller: _controller, children: _searchResultListPages()),
      );
      return  AnnotatedRegion<SystemUiOverlayStyle>(
        value: SystemUiOverlayStyle.light,
        child:Scaffold(
        backgroundColor:Colors.white,
        appBar: PreferredSize(
            child: Offstage(child:Opacity(child:
            AppBar(
              backgroundColor: SQColor.primary,
              // brightness: Brightness.light,
              elevation: 0.5,
              leading: InkWell(
                  onTap: (){
                    widget.toSort();
                  },
                  child: Column(
                    children: <Widget>[
                      Container(
                        margin: EdgeInsets.fromLTRB(15, 10, 0, 0),
                        child: Image.asset('home_nav_icon_category.png',height: ScreenUtil().setHeight(45),)
                      ),
                      Container(
                        margin: EdgeInsets.fromLTRB(15, 2, 0, 0),
                        child:Text(
                            '分类',
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: ScreenUtil().setSp(20)
                            ),
                          ),
                      ),
                    ],
                  )),
                  title: InkWell(
                        onTap: (){
                          AppNavigator.pushSearch(context);
                        },
                        child:Container(
                          // margin: EdgeInsets.fromLTRB(ScreenUtil().setWidth(30), ScreenUtil().setHeight(15), ScreenUtil().setWidth(30), ScreenUtil().setHeight(15)),
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
            ),opacity: navAlpha,),offstage:navShow> kToolbarHeight),
            preferredSize: Size.fromHeight(navShow)
            ),
        body:Column(
          children: <Widget>[
            Offstage(
              offstage: true,
              child: Container(
                child: v,
                key: _keyFilter,
              ),
            ),
            Expanded(child: body),
          ],
        )));
  }

    // bool _onScroll(ScrollNotification scroll) {
    //   print("fs");
    //   return false;
    // }

    List<Widget> _searchResultListPages() {
      List<Widget> pages = [];
      for (var i = 0; i < _tabModels.length; ++i) {
        TabModel m = _tabModels[i];
        var page = SearchSortResult(m.keyId);
        pages.add(page);
      }
      return pages;
    }
}

/*
class _HomeMainState extends State<HomeMain> with AutomaticKeepAliveClientMixin{


  int page = 1;
  List<MapData> couponList = [];
  Key fotterKey = new Key("fotterKey");

  ScrollController scrollController = ScrollController();
  double navAlpha = 0;

  // List<String> _navList = ['我的', '广场', '找吧'];
  // int _navActIndex = 0;

  @override
  void initState() {
    super.initState();
    print("initState 0");
    page = 1;
    couponList = [];
    _couponList(page,"3756","");

    scrollController.addListener(() {
      var offset = scrollController.offset;
      if (offset < 0) {
        if (navAlpha != 0) {
          setState(() {
            navAlpha = 0;
          });
        }
      } else if (offset < 50) {
        setState(() {
          navAlpha = 1 - (50 - offset) / 50;
        });
      } else if (navAlpha != 1) {
        setState(() {
          navAlpha = 1;
        });
      }
    });
  }

  

  @override
  bool get wantKeepAlive => true;


  @override
  Widget build(BuildContext context) {
    super.build(context);//必须添加
    print("build 0");
    if (couponList.length == 0){
      return Container(
        alignment: Alignment.center,
        child: InkWell(
        child:  Image.asset(
        'HomePlaceHolder.jpg',
        fit: BoxFit.fill,
        width: Screen.width,
        height: Screen.height,
        ),
        onTap: (){
          page = 1;
          couponList = [];
          _couponList(page,"3756","");
        },
      ),
      );
    }else{
      return AnnotatedRegion(
        value: navAlpha > 0.5 ? SystemUiOverlayStyle.light : SystemUiOverlayStyle.dark,
        child:  Stack(children: [
          Container(
            child: EasyRefresh(
                  child:ListView(
                    controller: scrollController,
                    children: <Widget>[
                      HomeBanner(),
                      HomeHeader(couponList),
                      _warpList(),
                    ],
                  ),
                  onRefresh: () async{
                    page = 1;
                    couponList = [];
                    _couponList(page,"3756","");
                  },
                  onLoad: () async{
                    page ++;
                    _couponList(page,"3756","");
                  },
                  footer: ClassicalFooter(
                    bgColor: Colors.white,
                    textColor: Colors.pink,
                    infoColor:Colors.pink,
                    noMoreText: '',
                    key:fotterKey,
                  ),
            ),
          ),
          _buildNavigationBar(),
          ]),
        );
      }
  }

  Widget _buildNavigationBar(){
    return Stack(
      children: <Widget>[
        Opacity(
          opacity: navAlpha,
          child: Container(
            padding: EdgeInsets.fromLTRB(5, Screen.topSafeHeight, 0, 0),
            height: Screen.navigationBarHeight,
            color: SQColor.primary,
            child: Row(
              children: <Widget>[
                InkWell(
                  onTap: (){
                    // Provide.value<CurrentIndexProvice>(context).changIdex(1);
                    widget.toSort();
                  },
                  child:  Column(
                    children: <Widget>[
                      Container(
                        margin: EdgeInsets.fromLTRB(15, 10, 0, 0),
                        child: Image.asset('home_nav_icon_category.png')
                      ),
                      Container(
                        margin: EdgeInsets.fromLTRB(15, 2, 0, 0),
                        child:Text(
                            '分类',
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: ScreenUtil().setSp(20)
                            ),
                          ),
                      ),
                    ],
                  ),
                ),
                Stack(
                  children: <Widget>[
                    InkWell(
                      onTap: (){
                        AppNavigator.pushSearch(context);
                      },
                      child:Container(
                        width: ScreenUtil().setWidth(750 - 135),
                        height: ScreenUtil().setHeight(55),
                        margin: EdgeInsets.fromLTRB(15, 4, 10, 0),
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(ScreenUtil().setHeight(55/2)),   
                          color: Colors.white,    
                        ),
                      ),
                    ),
                    Positioned(
                      left: ScreenUtil().setWidth(750 - 160)/2,
                      top: 10,
                      child: InkWell(
                        onTap: (){
                          AppNavigator.pushSearch(context);
                        },
                        child: Row(
                          children: <Widget>[
                            Container(
                              padding: EdgeInsets.only(right: 2),
                              width: ScreenUtil().setWidth(40),
                              child: Image.asset('icon_search_gray.png'),
                            ),
                            Text('搜索',style: TextStyle(
                              color: Colors.grey
                            ),)
                          ],
                        ),
                      ),
                    )
                  ],
                ),
         
                
              ],
            ),
          ),
        )
      ],
    );
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
                Image(
                      image: CachedNetworkImageProvider(v.pictUrl ?? ''),
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
        'empty.png',
      );
    }
  }


  Future<void> _couponList(page,materiaqlId,sort) async {
    var formdata = {"app_key":TAOKAO_APPKEY,"session_key":"hank","method":"taobao.tbk.dg.material.optional","partner_id":"top-apitools","format":"json","v":"2.0","sign_method":"md5","timestamp":getTime(),"adzone_id":TAOKAO_ADZONEID,"force_sensitive_param_fuzzy":"true","page_no":"${page}","has_coupon":"true","cat":"0","page_size":"10","material_id":materiaqlId};
    await request('couponList', formdata).then((value){
      ResultData result =  value;
      var data = json.decode(result.data.toString());
      CounponModel cdata = CounponModel.fromJson(data);
      if (cdata == null){
        Fluttertoast.showToast(
          msg: "网络错误,点击重新加载",
          toastLength: Toast.LENGTH_SHORT,
          gravity: ToastGravity.CENTER,
          timeInSecForIos: 1,
          backgroundColor: Colors.red,
          textColor: Colors.white,
          fontSize: 16.0
        );
      }else{
        setState(() {
        couponList.addAll(cdata.tbkDgMaterialOptionalResponse.resultList.mapData);
      });
      } 
    });
  }

}*/