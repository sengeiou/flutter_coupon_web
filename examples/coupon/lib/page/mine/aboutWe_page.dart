import 'package:flutter_web/material.dart';
import 'package:hkbook/ThridLib/flutter_screenutil-0.7.0/lib/flutter_screenutil.dart';
import 'package:hkbook/app/sq_color.dart';
import 'package:hkbook/public.dart';

class AboutWePage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    var margin = ScreenUtil().setHeight(30);
    return Scaffold(
      appBar: AppBar(
        title: Text("关于我们"),
      ),
      body: Stack(
        children: <Widget>[
          _mainView(),
          Positioned(
                  bottom: 0,
                  left: 0,
                  child: Container(
                    width: Screen.width,
                    alignment: Alignment.center,
                    // height: ScreenUtil().setHeight(100),
                    padding: EdgeInsets.all(margin),
                    child: Text('Copyright@2020',style: TextStyle(color: Colors.black54,fontSize: ScreenUtil().setSp(26)),textAlign: TextAlign.center,),
                  ),
          )
        ],
      ),
    );
  }
  Widget _mainView(){
    var margin = ScreenUtil().setHeight(30);
    return ListView(
        children: <Widget>[
          Container(
            color: SQColor.primary,
            alignment: Alignment.center,
            child: Column(
              children: <Widget>[
                Container(
                  padding: EdgeInsets.fromLTRB(margin, margin *2, margin, margin *2),
                  width: ScreenUtil().setWidth(200),
                  child: Image.asset('login_logo.png'),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(ScreenUtil().setHeight(10)),   
                  ),
                ),
                FutureBuilder(
                  future: _getVersion(),
                  builder: (context,snapshot){
                    if (snapshot.hasData){
                      return Container(
                        padding: EdgeInsets.all(margin),
                        alignment: Alignment.center,
                        child: Text("v${snapshot.data}",style: TextStyle(
                          color: Colors.white,
                          fontSize: ScreenUtil().setSp(30),
                        ),textAlign: TextAlign.center,),
                      );
                    }else{
                      return Container();
                    }
                  }
                )
              ],
            ),
          ),
          Container(
            child: Row(
              children: <Widget>[
                Container(
                  padding: EdgeInsets.all(margin),
                  child: Text('QQ'),
                ),
                Expanded(
                child:Container(
                  padding: EdgeInsets.all(margin),
                  child: Text('136951866',style: TextStyle(color: SQColor.primary),textAlign: TextAlign.right),
                ),
                 
                )
              ],
            ),
          ),
          Container(
            child: Row(
              children: <Widget>[
                Container(
                  padding: EdgeInsets.all(margin),
                  child: Text('邮箱'),
                ),
                Expanded(
                  child: Container(
                    padding: EdgeInsets.all(margin),
                    child: Text('zhangweihao113@163.com',style: TextStyle(color: Color(0xff333333)),textAlign: TextAlign.right),
                  ),
                )
              ],
            ),
          )
        ],
      );
  }
  // Future<String> _getVersion() async{
  // PackageInfo packageInfo = await PackageInfo.fromPlatform();
  //   String version = packageInfo.version;
  //   return  version;
  // }

    Future<String> _getVersion() async{
    // PackageInfo packageInfo = await PackageInfo.fromPlatform();
    // String version = packageInfo.version;
    return  '1.0.0';
    }
}