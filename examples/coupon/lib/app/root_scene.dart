

import 'dart:convert';

import 'package:flutter_web/cupertino.dart';
import 'package:flutter_web/material.dart';
import 'package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart';
import 'package:hkbook/ThridLib/provide-1.0.2/lib/provide.dart';
import 'package:hkbook/ThridLib/shared_preferences-0.5.6/lib/shared_preferences.dart';
import 'package:hkbook/model/coupon_model.dart';
import 'package:hkbook/page/Cricle/cricel_page.dart';
import 'package:hkbook/page/category/category_page.dart';
import 'package:hkbook/page/home/home_main.dart';
import 'package:hkbook/page/mine/mine_page.dart';
import 'package:hkbook/provide/current_index.dart';
import 'package:hkbook/public.dart';
import 'package:hkbook/service/result_data.dart';
import 'package:hkbook/service/service_method.dart';
import 'package:hkbook/widget/toast.dart';




// import 'package:hkbook/home/home_scene.dart';
// import 'package:hkbook/bookshelf/bookshelf_scene.dart';
// import 'package:hkbook/me/me_scene.dart';

class RootScene extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => RootSceneState();
}

class RootSceneState extends State<RootScene>{
  int _tabIndex = 0;
  bool isFinishSetup = false;
  List<Image> _tabImages = [
    Image.asset('home.png'),
    Image.asset('fenlei.png'),
    Image.asset('kankan.png'),
    Image.asset('me.png'),
  ];
  List<Image> _tabSelectedImages = [
    Image.asset('home_1.png'),
    Image.asset('fenlei_1.png'),
    Image.asset('kankan_1.png'),
    Image.asset('me_1.png'),
  ];

  HomeMain homeVC;

  List<Widget> _pages = [
   
  ];
  
  PageController _controller;
  @override
  void initState() {
    super.initState();
    _couponList(1,"3756","");

    homeVC =  HomeMain((){
      onTap(1);
    },[]);
    _pages.addAll([homeVC,CategoryPage(),CricelPage(),MeScene()]);
    _controller = PageController(initialPage: 0);
    setupApp();
    // eventBus.on(EventUserLogin, (arg) {
    //   setState(() {});
    // });

    // eventBus.on(EventUserLogout, (arg) {
    //   setState(() {});
    // });

    // eventBus.on(EventToggleTabBarIndex, (arg) {
    //   setState(() {
    //     _tabIndex = arg;
    //   });
    // });
  }

  @override
  void dispose() {
    // eventBus.off(EventUserLogin);
    // eventBus.off(EventUserLogout);
    // eventBus.off(EventToggleTabBarIndex);
    super.dispose();
  }

  setupApp() async {
    preferences = await SharedPreferences.getInstance();
    setState(() {
      isFinishSetup = true;
    });
  }

  @override
  Widget build(BuildContext context) {
    // super.build(context);//必须添加
    ScreenUtil.instance = ScreenUtil(width: 750,height: 1334)..init(context);
    // return Provide<SplashProvice>(
    //     builder: (BuildContext context, Widget child, SplashProvice value) {
    //       bool isHome = value.isSetUp;
    //       if (isHome){
            // return Provide<CurrentIndexProvice>(
            //       builder: (BuildContext context, Widget child, CurrentIndexProvice value) {
                    // int currentIndex = value.currentIndex;
                    // print(currentIndex);
                    // print(_pages.length);
                    // _tabIndex = currentIndex;
                    //  print("------------${_tabIndex}---------");
                    return _mainView();
      //             // }
      //       // );
      //     }else{
      //       return SplashPage();
      //     }
      //   }
      // );
  }
  
  Widget _mainView(){
    
    return Scaffold(
      body: PageView.builder(
            physics: NeverScrollableScrollPhysics(),//viewPage禁止左右滑动
            // onPageChanged: (index){
            //   ////onPageChanged 监听页面改变，输出当前页面序号
            //   _pageChange(index);
            // },
            controller: _controller,
            itemCount: _pages.length,
            itemBuilder: (context, index){
               return _pages[index];
            }),
      
      // IndexedStack(
      //   children: this._pages,
      //   index: index,
      // ),
      bottomNavigationBar: CupertinoTabBar(
        backgroundColor: Colors.white,
        activeColor: SQColor.primary,
        items: <BottomNavigationBarItem>[
          BottomNavigationBarItem(icon: getTabIcon(0), title: Text('首页')),
          BottomNavigationBarItem(icon: getTabIcon(1), title: Text('分类')),
          BottomNavigationBarItem(icon: getTabIcon(2), title: Text('看看')),
          BottomNavigationBarItem(icon: getTabIcon(3), title: Text('我的')),
        ],
        currentIndex: _tabIndex,
        onTap: (index) {
          onTap(index);
        },
      ),
    );
  }

  //pageview
  // void _pageChange(int index) {
  //   print("-----");
  //   print(index);
  //   if (index == _tabIndex){
  //     return;
  //   }
  //   Provide.value<CurrentIndexProvice>(context).changIdex(index);
  //   _controller.jumpToPage(index);
  // }


  void onTap(int index) {
    print(index);
    if (index == _tabIndex){
      return;
    }
    _tabIndex =  index;
    // Provide.value<CurrentIndexProvice>(context).changIdex(index);
    _controller.jumpToPage(_tabIndex);
    setState(() {
      
    });
  }

  Image getTabIcon(int index) {
    if (index == _tabIndex) {
      return _tabSelectedImages[index];
    } else {
      return _tabImages[index];
    }
  }

  Future<void> _couponList(page,materiaqlId,sort) async {
    var formdata = {"app_key":TAOKAO_APPKEY,"session_key":"hank","method":"taobao.tbk.dg.material.optional","partner_id":"top-apitools","format":"json","v":"2.0","sign_method":"md5","timestamp":getTime(),"adzone_id":TAOKAO_ADZONEID,"force_sensitive_param_fuzzy":"true","page_no":"${page}","has_coupon":"true","cat":"0","page_size":"10","material_id":materiaqlId};
    // LoadingPage ls = LoadingPage(context);
    // ls.show();
    await request('couponList', formdata).then((value){
      // ls.close();
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
        homeVC.couponList = [];
      }else{
        homeVC.couponList = cdata.tbkDgMaterialOptionalResponse.resultList.mapData;
      } 
    });
  }
}


