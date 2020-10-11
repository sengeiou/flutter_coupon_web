import 'package:flutter_web/material.dart';
import 'package:flutter_web/services.dart';
// import 'package:hkbook/ThridLib/url_launcher-5.4.1/lib/url_launcher.dart';
import 'package:hkbook/page/mine/mine_cell.dart';
import 'package:hkbook/ThridLib/flutter_easyrefresh-2.0.8/lib/easy_refresh.dart';
import '../../public.dart';
import 'me_header.dart';


class MeScene extends StatefulWidget {
  @override
  _MeSceneMainState createState() => _MeSceneMainState();
}

class _MeSceneMainState extends State<MeScene> with AutomaticKeepAliveClientMixin{

  Widget buildCells(BuildContext context) {
    return Stack(children: [
      Container(
        child: Column(
          children: <Widget>[
                // MeCell(
                //   title: '收藏',
                //   iconName: 'collection.png',
                //   onPressed: () {},
                // ),
                // MeCell(
                //   title: '帮助',
                //   iconName: 'bangzhu.png',
                //   onPressed: () {
                //     AppNavigator.pushHelp(context);
                //   },
                // ),
                MeCell(
                  title: '设置',
                  iconName: 'weibiaoti.png',
                  onPressed: () {
                    AppNavigator.pushClearCPage(context);
                  },
                ),
                MeCell(
                  title: '下载APP',
                  iconName: 'zhengcejiedu.png',
                  onPressed: () {
                    print('window.open("https://136951866.github.io/coupon/");');
                  },
                ),
                MeCell(
                  title: '关于我们',
                  iconName: 'guanyuwomen.png',
                  onPressed: () {
                    AppNavigator.pushAboutWePage(context);
                  },
                ),
              ],
          ),
        ),
      ]);
  }

  @override
  Widget build(BuildContext context) {
    super.build(context);
    return  AnnotatedRegion(
        value: SystemUiOverlayStyle.light,
        child: Stack(children: [
          Container(
          color: Colors.white,
          child: EasyRefresh(
            child: ListView(
            children: <Widget>[
              MeHeader(),
              SizedBox(height: 10),
              buildCells(context),
            ],
          ),
          onRefresh: () async{
          
          },
          onLoad: () async{
        
          },
          ),
        ),
        ]),
    );
  }

  @override
  // TODO: implement wantKeepAlive
  bool get wantKeepAlive => true;
}
